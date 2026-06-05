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
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const ChangeForm = () => {
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
            <DialogTitle>افزودن محصول جدید</DialogTitle>
          </DialogHeader>
          <ScrollArea dir="rtl" className="max-h-[50vh] px-3">
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">دسته</Label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="انتخاب دسته محصول"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">عنوان</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="عنوان محصول"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">قیمت</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="قیمت محصول"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">وزن</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="(کیلوگرم)وزن محصول"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">برند</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="قسمتی از نام برند را وارد کنید"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">رنگ</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="قسمتی از نام رنگ را وارد کنید"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">گارانتی</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="قسمتی از نام گارانتی را وارد کنید"
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">توضیحات</Label>
                <Textarea
                  id="username-1"
                  name="username"
                  placeholder="توضیحات محصول"
                  className="field-sizing-fixed max-h-50 min-h-25 resize-y"
                />
              </Field>
            </FieldGroup>
          </ScrollArea>
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
