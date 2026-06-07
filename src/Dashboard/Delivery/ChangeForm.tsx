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
        <DialogContent className="p-7 sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>افزودن نحوه ارسال</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">عنوان</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="انتخاب عنوان نحوه ارسال"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="grid max-w-xl grid-cols-3">
            <Field>
              <Label htmlFor="username-1">هزینه</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب هزینه ارسال"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">زمان</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب زمان ارسال"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">واحد زمان</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="انتخاب واحد زمان"
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
