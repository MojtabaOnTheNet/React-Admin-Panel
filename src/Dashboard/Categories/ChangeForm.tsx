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
import { getCategoriesService } from "@/services/category"
import {
  RHFFileUpload,
  RHFInput,
  RHFSelect,
  RHFSwitch,
  RHFTextarea,
} from "@/components/RHFComponents/RHFComponents"

const formSchema = z.object({
  parent_id: z.number().optional(),
  title: z.string().min(1, "عنوان الزامی است"),
  description: z.string().optional(),
  image: z
    .file()
    .optional()
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "فقط فایل‌های JPG، PNG و WEBP مجاز هستند",
      }
    )
    .refine(
      (file) => !file || file.size <= 10 * 1024 * 1025, // 10 megabytes
      {
        message: "حداکثر حجم فایل 10 مگابایت است",
      }
    ),
  is_active: z.boolean().optional(),
  show_in_menu: z.boolean().optional(),
})

export type categoryData = z.infer<typeof formSchema>

const ChangeForm = () => {
  type parentsType = { id: string; title: string }
  const [parents, setParents] = useState<parentsType[]>([])
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

  const onSubmit = (data: categoryData) => {
    console.log(data)
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
      } else {
        alert("Oh No! " + response.data.message)
      }
    } catch (error) {
      alert("Something went wrong! " + error)
    }
  }

  useEffect(() => {
    handleGetParentcategories()
  }, [])

  return (
    <Dialog>
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
