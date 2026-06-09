import ChangeForm from "./ChangeForm"
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

const Comments = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      fullName: "مجتبی علیزاده",
      type: "نظر",
      for: "محصول فلان",
      partOfComment: "قسمتی از متن نظر برای محصول",
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
    { field: "type", title: "نوع نظر" },
    { field: "for", title: "برای" },
    { field: "partOfComment", title: "قسمتی از متن نظر" },
    { field: "status", title: "وضعیت" },
    { field: "date", title: "تاریخ" },
    { field: "options", title: "عملیات" },
  ]

  return (
    <TableCard
      tableData={tableData}
      tableDataHeader={tableDataHeader}
      searchTarget="fullName"
    >
      <ChangeForm />
    </TableCard>
  )
}

export default Comments
