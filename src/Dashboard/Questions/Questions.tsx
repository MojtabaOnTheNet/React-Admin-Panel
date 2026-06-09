import ChangeForm from "./ChangeForm"
import SearchInput from "./SearchInput"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrashIcon } from "lucide-react"
import TableCard from "@/components/ui/TableCard"
import type { tableDataHeaderType, tableDataType } from "@/lib/types"
import { Switch } from "@/components/ui/switch"

const Questions = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      fullName: "مجتبی علیزاده",
      type: "پرسش",
      category: "محصولات",
      partOfQuestion: "قسمتی از متن سوال برای محصول",
      status: (
        <>
          <span className="ml-3">فعال</span>
          <Switch defaultChecked />
        </>
      ),
      date: "1404/04/10",
      options: (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                حذف
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]

  const tableDataHeader: tableDataHeaderType = [
    { field: "id", title: "#" },
    { field: "fullName", title: "نام و نام خانوادگی" },
    { field: "type", title: "نوع سوال" },
    { field: "category", title: "دسته" },
    { field: "partOfQuestion", title: "قسمتی از متن سوال" },
    { field: "status", title: "وضعیت" },
    { field: "date", title: "تاریخ" },
    { field: "options", title: "عملیات" },
  ]

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <TableCard tableData={tableData} tableDataHeader={tableDataHeader} />
    </div>
  )
}

export default Questions
