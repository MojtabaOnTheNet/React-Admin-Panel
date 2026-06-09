import type { tableDataHeaderType, tableDataType } from "@/lib/types"
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
import { PencilIcon, PlusIcon, ShareIcon, TrashIcon } from "lucide-react"
import TableCard from "@/components/ui/TableCard"

const Categories = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      title: "دسته شماره فلان",
      status: "فعال",
      options: (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PlusIcon />
                اضافه
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PencilIcon />
                ویرایش
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShareIcon />
                اشتراک‌گذاری
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
    { field: "title", title: "عنوان" },
    { field: "status", title: "وضعیت" },
    { field: "options", title: "عملیات" },
  ]

  return (
    <TableCard
      tableData={tableData}
      tableDataHeader={tableDataHeader}
      searchTarget="title"
    >
      <ChangeForm />
    </TableCard>
  )
}

export default Categories
