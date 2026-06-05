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
import { Switch } from "@/components/ui/switch"
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
            <DialogTitle>افزودن دسته محصولات</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">دسته والد</Label>
              <Input id="name-1" name="name" placeholder="بدون والد" />
            </Field>
            <Field>
              <Label htmlFor="username-1">عنوان</Label>
              <Input id="username-1" name="username" placeholder="عنوان دسته" />
            </Field>
            <Field>
              <Label htmlFor="username-1">توضیحات</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="توضیحات دسته"
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
              <Label htmlFor="username-1">تگ‌ها</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="با - از هم جدا شوند"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Field orientation="horizontal">
              <Switch />
              <Label>وضعیت فعال</Label>
            </Field>
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
