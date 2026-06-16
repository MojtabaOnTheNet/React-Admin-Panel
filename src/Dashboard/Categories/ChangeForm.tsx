import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useState } from "react"
import { getCategoriesService, postCategoryService } from "@/services/category"
import {
  RHFFileUpload,
  RHFInput,
  RHFSelect,
  RHFSwitch,
  RHFTextarea,
} from "@/components/RHFComponents/RHFComponents"
import { toast } from "sonner"

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
}: {
  handleGetCategories: (categoryId?: string | undefined) => Promise<void>
}) => {
  type parentsType = { id: string; title: string }
  const [parents, setParents] = useState<parentsType[]>([])
  const [open, setOpen] = useState(false)
  const form = useForm<categoryData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      is_active: false,
      show_in_menu: false,
    },
  })

  const onSubmit = async (data: categoryData) => {
    try {
      const response = await postCategoryService(data)
      console.log(response)
      if (response.status == 200 || response.status == 201) {
        toast.success("دسته بندی با موفقیت اضافه شد.")
        form.reset()
        handleGetCategories()
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form id="form-rhf" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <Button className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100">
            اضافه
          </Button>
        </DialogTrigger>
        <DialogContent className="p-7 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>افزودن دسته محصولات</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            {parents.length ? (
              <Field>
                <RHFSelect
                  control={form.control}
                  name="parent_id"
                  label="دسته والد"
                  placeholder="انتخاب دسته"
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
            <Field>
              <RHFFileUpload
                control={form.control}
                name="image"
                label="آپلود تصویر"
              />
            </Field>
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
              {form.formState.isSubmitting ? <Spinner /> : "ذخیره"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ChangeForm
