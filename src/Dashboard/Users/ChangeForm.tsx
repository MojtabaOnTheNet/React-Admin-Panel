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
import { Button } from "@/components/ui/button"

const ChangeForm = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100">
            اضافه
          </Button>
        </DialogTrigger>
        <DialogContent className="p-7 sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>افزودن نحوه ارسال</DialogTitle>
          </DialogHeader>
          <FieldGroup className="grid max-w-2xl grid-cols-3">
            <Field>
              <Label htmlFor="name-1">نام و نام خانوادگی</Label>
              <Input id="name-1" name="name" placeholder="انتخاب نام کامل" />
            </Field>
            <Field>
              <Label htmlFor="name-1">موبایل</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="انتخاب شماره موبایل"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">ایمیل</Label>
              <Input id="name-1" name="name" placeholder="انتخاب ایمیل" />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid max-w-2xl grid-cols-2">
            <Field>
              <Label htmlFor="username-1">نقش</Label>
              <Input id="username-1" name="username" placeholder="انتخاب نقش" />
            </Field>
            <Field>
              <Label htmlFor="username-1">تاریخ ثبت نام</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب تاریخ ثبت نام"
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
