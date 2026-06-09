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

const Colors = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      title: "قرمز",
      hexCode: "F44336#",
      color: <div className="mx-auto h-10 w-1/2 rounded-full bg-red-500"></div>,
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
    { field: "title", title: "نام رنگ" },
    { field: "hexCode", title: "کد رنگ" },
    { field: "color", title: "رنگ" },
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

export default Colors
