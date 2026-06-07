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
import { X } from "lucide-react"

const ChangeForm = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100">
            اضافه
          </Button>
        </DialogTrigger>
        <DialogContent className="p-7 sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>افزودن سبد خرید</DialogTitle>
          </DialogHeader>
          <FieldGroup className="grid max-w-lg grid-cols-2">
            <Field>
              <Label htmlFor="name-1">نام مشتری</Label>
              <Input id="name-1" name="name" placeholder="انتخاب نام مشتری" />
            </Field>
            <Field>
              <Label htmlFor="username-1">عنوان محصول</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب عنوان محصول"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid max-w-lg grid-cols-3">
            <Field>
              <Label htmlFor="name-1">رنگ</Label>
              <Input id="name-1" name="name" placeholder="انتخاب رنگ" />
            </Field>
            <Field>
              <Label htmlFor="username-1">گارانتی</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب گارانتی"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">تعداد</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب تعداد"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="max-w-lg">
            <Field>
              <div className="flex items-center justify-between rounded-3xl bg-input/50 px-5 py-1">
                <div>
                  <span>
                    <X className="inline" />
                  </span>
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
                  />
                  <span>عدد</span>
                </div>
              </div>
            </Field>
          </FieldGroup>
          <FieldGroup className="max-w-lg">
            <Field>
              <div className="flex items-center justify-between rounded-3xl bg-input/50 px-5 py-1">
                <div>
                  <span>
                    <X className="inline" />
                  </span>
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
                  />
                  <span>عدد</span>
                </div>
              </div>
            </Field>
          </FieldGroup>
          <FieldGroup className="mx-auto max-w-md">
            <div className="rounded-3xl bg-input/50 px-5 py-2">
              <span className="border-l-2 px-5 text-lg font-bold">جمع کل</span>
              <span className="pr-20 text-lg font-light">200,000 تومان</span>
            </div>
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
