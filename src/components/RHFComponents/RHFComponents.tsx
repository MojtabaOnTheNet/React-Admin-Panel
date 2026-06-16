import {
  type Control,
  type FieldValues,
  type Path,
  Controller,
} from "react-hook-form"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { File } from "lucide-react"

type RHFInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
}

export function RHFInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: RHFInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Input
            {...field}
            placeholder={placeholder}
            aria-invalid={fieldState.invalid}
          />

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

type RHFTextareaProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
}

export function RHFTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: RHFTextareaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Textarea
            {...field}
            placeholder={placeholder}
            aria-invalid={fieldState.invalid}
            className="field-sizing-fixed max-h-50 min-h-25 resize-y"
          />

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

type Option = {
  value: string
  label: string
}

type RHFSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  options: Option[]
  placeholder?: string
}

export function RHFSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder,
}: RHFSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Select value={field.value} onValueChange={field.onChange} dir="rtl">
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

type RHFSwitchProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
}

export function RHFSwitch<T extends FieldValues>({
  control,
  name,
  label,
}: RHFSwitchProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field orientation="horizontal">
          <Switch checked={field.value} onCheckedChange={field.onChange} />

          <Label>{label}</Label>
        </Field>
      )}
    />
  )
}

type RHFFileUploadProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  accept?: string
}

export function RHFFileUpload<T extends FieldValues>({
  control,
  name,
  label,
  accept = "image/*",
}: RHFFileUploadProps<T>) {
  const inputId = `file-upload-${String(name)}`

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

          <label
            htmlFor={inputId}
            className="flex min-h-40 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-input/50 p-6"
          >
            <File className="h-12 w-12 text-muted-foreground" />

            <p className="mt-4 font-medium">فایل خود را انتخاب کنید</p>

            <p className="mt-1 text-sm text-muted-foreground">PNG, JPG, WEBP</p>

            {field.value && (
              <p className="mt-3 text-sm text-primary">{field.value.name}</p>
            )}
          </label>

          <input
            id={inputId}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => field.onChange(e.target.files?.[0] ?? undefined)}
          />

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
