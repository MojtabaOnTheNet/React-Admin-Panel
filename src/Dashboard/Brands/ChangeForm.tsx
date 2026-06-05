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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { File } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const ChangeForm = () => {
  const [file, setFile] = useState<File | null>(null)

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100">
            اضافه
          </Button>
        </DialogTrigger>
        <DialogContent className="p-7 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>افزودن برند</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">عنوان لاتین برند</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="کیبورد را در حالت لاتین قرار دهید"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">عنوان فارسی برند</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="کیبورد را در حالت فارسی قرار دهید"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">توضیحات برند</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="توضیحات برند"
                className="field-sizing-fixed max-h-50 min-h-25 resize-y"
              />
            </Field>
            <Field>
              <Label htmlFor="file-upload">آپلود تصویر</Label>

              <label
                htmlFor="file-upload"
                className="flex min-h-40 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-input/50 p-6 transition-colors hover:border-primary hover:bg-accent/20"
              >
                <File
                  className="h-12 w-12 text-muted-foreground"
                  aria-hidden="true"
                />

                <p className="mt-4 font-medium">فایل خود را انتخاب کنید</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  PNG, JPG, WEBP
                </p>

                {file && (
                  <p className="mt-3 text-sm text-primary">{file.name}</p>
                )}
              </label>

              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0]
                  if (selectedFile) {
                    setFile(selectedFile)
                  }
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">توضیح تصویر</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="یک کلمه در مورد تصویر"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">انصراف</Button>
            </DialogClose>
            <Button type="submit">ذخیره</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ChangeForm
