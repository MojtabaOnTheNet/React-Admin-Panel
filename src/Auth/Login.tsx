import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import axios from "axios"

const formSchema = z.object({
  phone: z.string().regex(/^\d{11}$/, {
    message: "شماره تلفن باید ده رقم باشد.",
  }),
  password: z.string().min(1, "رمز عبور را وارد کنید"),
  remember: z.boolean().optional(),
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      phone: "",
      password: "",
      remember: false,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        "https://ecomadminapi.azhadev.ir/api/auth/login",
        {
          ...data,
          remember: data.remember ? 1 : 0,
        }
      )
      console.log(response.data)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>ورود به اکانت</CardTitle>
        <CardDescription>
          شماره تلفن و رمز عبور خود را وارد کنید
        </CardDescription>
        <CardAction>
          <Button variant="link">ثبت نام</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form id="form-rhf" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col gap-6">
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-phone">شماره تلفن</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-phone"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-password">رمز عبور</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-password"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="remember"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <FieldLabel htmlFor="form-rhf-confirm-remember">
                    مرا به خاطر بسپار
                  </FieldLabel>
                  <Switch
                    id="form-rhf-remember"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => form.reset()}>
          ریست
        </Button>
        <Button type="submit" className="w-full" form="form-rhf">
          ورود
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Login
