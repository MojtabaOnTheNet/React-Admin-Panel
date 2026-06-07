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
            <DialogTitle>افزودن سفارش</DialogTitle>
          </DialogHeader>
          <FieldGroup className="grid max-w-2xl grid-cols-2">
            <Field>
              <Label htmlFor="name-1">سبد</Label>
              <Input id="name-1" name="name" placeholder="انتخاب سبد مشتری" />
            </Field>
            <Field>
              <Label htmlFor="username-1">تاریخ پرداخت</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب تاریخ پرداخت"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid max-w-2xl grid-cols-3">
            <Field>
              <Label htmlFor="name-1">پرداخت</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="500,000 تومان"
                disabled
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">تخفیف</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="5,000 تومان"
                disabled
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">کد تخفیف</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب کد تخفیف"
              />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field>
              <Label htmlFor="username-1">آدرس</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="آدرس کامل"
                className="field-sizing-fixed max-h-50 min-h-25 resize-y"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="max-w-مل grid grid-cols-3">
            <Field>
              <Label htmlFor="username-1">نوع ارسال</Label>
              <Input id="username-1" name="username" placeholder="" />
            </Field>
            <Field>
              <Label htmlFor="username-1">تلفن</Label>
              <Input id="username-1" name="username" placeholder="" />
            </Field>
            <Field>
              <Label htmlFor="username-1">ایمیل</Label>
              <Input id="username-1" name="username" placeholder="" />
            </Field>
          </FieldGroup>
          <FieldGroup className="max-w-2xl">
            <Field>
              <div className="flex items-center justify-between rounded-3xl bg-input/50 px-5 py-1">
                <div>
                  <span>
                    محصول شماره 1 (100 هزار تومان) (گارانتی فلان){" "}
                    <div className="inline-block size-3 rounded-full bg-red-600"></div>
                  </span>
                </div>
                <div className="space-x-2">
                  <Input
                    type="text"
                    className="ml-7 inline w-20 rounded-md text-center"
                    defaultValue={50}
                    disabled
                  />
                  <span>عدد</span>
                </div>
              </div>
            </Field>
          </FieldGroup>
          <FieldGroup className="max-w-2xl">
            <Field>
              <div className="flex items-center justify-between rounded-3xl bg-input/50 px-5 py-1">
                <div>
                  <span>
                    محصول شماره 1 (100 هزار تومان) (گارانتی فلان){" "}
                    <div className="inline-block size-3 rounded-full bg-red-600"></div>
                  </span>
                </div>
                <div className="space-x-2">
                  <Input
                    type="text"
                    className="ml-7 inline w-20 rounded-md text-center"
                    defaultValue={50}
                    disabled
                  />
                  <span>عدد</span>
                </div>
              </div>
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
