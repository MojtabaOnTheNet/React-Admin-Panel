import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { File } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Spinner } from "@/components/ui/spinner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { getCategoriesService } from "@/services/category"

const formSchema = z.object({
  parent_id: z.string().optional(),
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

// const parents = [
//   {
//     id: 21212,
//     title: "برقی",
//   },
//   {
//     id: 21211,
//     title: "2 برقی",
//   },
// ]

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
                <Controller
                  name="parent_id"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-parent_id">
                        دسته والد
                      </FieldLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        dir="rtl"
                      >
                        <SelectTrigger
                          id="form-rhf-parent_id"
                          aria-invalid={fieldState.invalid}
                        >
                          <SelectValue placeholder="انتخاب دسته والد" />
                        </SelectTrigger>
                        <SelectContent>
                          {parents.map((parent) => {
                            return (
                              <SelectItem value={parent.id.toString()}>
                                {parent.title}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </Field>
            ) : null}
            <Field>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-title">عنوان *</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-title"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="عنوان دسته"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
            <Field>
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-description">
                      توضیحات
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id="form-rhf-description"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="توضیحات دسته"
                      className="field-sizing-fixed max-h-50 min-h-25 resize-y"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
            <Field>
              <Controller
                name="image"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="file-upload">آپلود تصویر</FieldLabel>

                    <label
                      htmlFor="file-upload"
                      className="flex min-h-40 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-input/50 p-6"
                    >
                      <File className="h-12 w-12 text-muted-foreground" />

                      <p className="mt-4 font-medium">
                        فایل خود را انتخاب کنید
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        PNG, JPG, WEBP
                      </p>

                      {field.value && (
                        <p className="mt-3 text-sm text-primary">
                          {field.value.name}
                        </p>
                      )}
                    </label>

                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] ?? undefined)
                      }
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Controller
              name="is_active"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label>وضعیت فعال</Label>
                </Field>
              )}
            />
            <Controller
              name="show_in_menu"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label>نمایش در منو</Label>
                </Field>
              )}
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
