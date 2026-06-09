import ChangeForm from "./ChangeForm"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PencilIcon, TrashIcon } from "lucide-react"
import TableCard from "@/components/ui/TableCard"
import type { tableDataHeaderType, tableDataType } from "@/lib/types"

const Users = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      fullName: "مجتبی علیزاده",
      phoneNumber: "09106236231",
      email: "user@example.com",
      role: "کاربر",
      registerDate: "1404/12/01",
      options: (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PencilIcon />
                ویرایش
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
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
    { field: "phoneNumber", title: "موبایل" },
    { field: "email", title: "ایمیل" },
    { field: "role", title: "نقش" },
    { field: "registerDate", title: "تاریخ ثبت نام" },
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

export default Users
