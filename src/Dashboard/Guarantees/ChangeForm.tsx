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
            <DialogTitle>افزودن گارانتی</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">عنوان گارانتی</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="عنوان گارانتی را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="name-1">مدت زمان گارانتی</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="مدت زمان گارانتی(ماه)"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">توضیحات گارانتی</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="توضیحات گارانتی"
                className="field-sizing-fixed max-h-50 min-h-25 resize-y"
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
