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
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

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
            <DialogTitle>افزودن نقش</DialogTitle>
          </DialogHeader>
          <FieldGroup className="">
            <Field>
              <Label htmlFor="name-1">عنوان </Label>
              <Input id="name-1" name="name" placeholder="انتخاب عنوان نقش " />
            </Field>
            <Field>
              <Label htmlFor="username-1">توضیحات</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="توضیحات نقش"
                className="field-sizing-fixed max-h-50 min-h-25 resize-y"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">دسترسی‌ها </Label>
              <Input
                id="name-1"
                name="name"
                placeholder="قسمتی از مجوز مورد نظر را وارد کنید"
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
