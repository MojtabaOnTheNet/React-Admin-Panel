import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useState } from "react"
import {
  getCategoriesService,
  getCategoryService,
  postCategoryService,
  updateCategoryService,
} from "@/services/category"
import {
  RHFFileUpload,
  RHFInput,
  RHFSelect,
  RHFSwitch,
  RHFTextarea,
} from "@/components/RHFComponents/RHFComponents"
import { toast } from "sonner"
import { useParams } from "react-router"

const formSchema = z.object({
  parent_id: z.number().optional(),
  title: z.string().min(1, "عنوان الزامی است"),
  description: z.string().optional(),
  image: z
    .file()
    .max(10 * 1024 * 1024, "حداکر حجم فایل ده مگابایت است")
    .mime(
      ["image/jpeg", "image/png", "image/webp"],
      "لطفا عکس را در فرمت درست آپلود کنید"
    )
    .optional(),
  is_active: z.boolean(),
  show_in_menu: z.boolean(),
})

export type categoryData = z.infer<typeof formSchema>

const ChangeForm = ({
  handleGetCategories,
  open,
  setOpen,
  editId,
}: {
  handleGetCategories: (categoryId?: string | undefined) => Promise<void>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  editId?: number | null
}) => {
  type parentsType = { id: string; title: string }
  const params = useParams()
  const [parents, setParents] = useState<parentsType[]>([])
  const form = useForm<categoryData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      is_active: false,
      show_in_menu: false,
      parent_id: Number(params.categoryId) || undefined,
    },
  })

  const onSubmit = async (data: categoryData) => {
    try {
      const response = editId
        ? await updateCategoryService(data, String(editId))
        : await postCategoryService(data)
      if (response.status == 200 || response.status == 201) {
        toast.success(
          `دسته بندی با موفقیت ${editId ? "ویرایش" : "اضافه"} شد.`,
          {
            duration: 2000,
            id: "success-toast",
          }
        )
        form.reset()
        handleGetCategories(params.categoryId || undefined)
        setOpen(false)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const handleGetParentcategories = async () => {
    try {
      const response = await getCategoriesService()
      if (response.status == 200) {
        const allParents = response.data.data
        setParents(
          allParents.map((parent: parentsType) => {
            return { id: parent.id, title: parent.title }
          })
        )
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    handleGetParentcategories()
  }, [])

  useEffect(() => {
    form.reset({
      ...form.getValues(),
      parent_id: Number(params.categoryId) || undefined,
    })
  }, [params.categoryId])

  useEffect(() => {
    if (!editId) {
      form.reset({
        title: "",
        description: "",
        image: undefined,
        is_active: false,
        show_in_menu: false,
        parent_id: Number(params.categoryId) || undefined,
      })
      return
    }
    const loadCategory = async () => {
      const response = await getCategoryService(String(editId))
      console.log(response)
      form.reset({
        title: response.data.data.title,
        description: response.data.data.descriptions ?? "",
        is_active: !!response.data.data.is_active, // !! to turn number into boolean
        show_in_menu: !!response.data.data.show_in_menu,
        parent_id: response.data.data.parent_id ?? undefined,
      })
    }
    loadCategory()
  }, [editId])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form id="form-rhf" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogContent className="p-7 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editId ? "ویرایش دسته محصولات" : "افزودن دسته محصولات"}
            </DialogTitle>
          </DialogHeader>
          <FieldGroup>
            {parents.length ? (
              <Field>
                <RHFSelect
                  control={form.control}
                  name="parent_id"
                  label="دسته والد"
                  placeholder="انتخاب دسته والد"
                  options={parents.map((parent) => ({
                    value: parent.id,
                    label: parent.title,
                  }))}
                />
              </Field>
            ) : null}
            <Field>
              <RHFInput
                control={form.control}
                name="title"
                label="عنوان"
                placeholder="عنوان دسته"
              />
            </Field>
            <Field>
              <RHFTextarea
                control={form.control}
                name="description"
                label="توضیحات"
                placeholder="توضیحات دسته"
              />
            </Field>
            {!editId && (
              <Field>
                <RHFFileUpload
                  control={form.control}
                  name="image"
                  label="آپلود تصویر"
                />
              </Field>
            )}
          </FieldGroup>
          <DialogFooter>
            <RHFSwitch
              control={form.control}
              name="is_active"
              label="وضعیت فعال"
            />
            <RHFSwitch
              control={form.control}
              name="show_in_menu"
              label="نمایش در منو"
            />
            <DialogClose asChild>
              <Button variant="outline">انصراف</Button>
            </DialogClose>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              form="form-rhf"
            >
              {form.formState.isSubmitting ? (
                <Spinner />
              ) : editId ? (
                "ویرایش"
              ) : (
                "ذخیره"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ChangeForm
