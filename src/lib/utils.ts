import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToPersian(date: string) {
  return new Intl.DateTimeFormat("fa-IR").format(new Date(date))
}
