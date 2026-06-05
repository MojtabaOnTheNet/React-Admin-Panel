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
        <DialogContent className="p-7 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>افزودن کد تخفیف</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">عنوان</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="عنوان تخفیف را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">کد</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="کد تخفیف را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">درصد تخفیف</Label>
              <Input
                id="name-1"
                name="name"
                type="number"
                placeholder="درصد تخفیف را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">تاریخ</Label>
              <Input
                id="name-1"
                name="name"
                type="number"
                placeholder="تاریخ انقضا را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">گروه تخفیف</Label>
              <Input
                id="name-1"
                name="name"
                type="number"
                placeholder="گروه تخفیف را وارد کنید"
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
