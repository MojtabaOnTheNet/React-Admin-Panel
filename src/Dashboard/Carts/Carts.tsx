import ChangeForm from "./ChangeForm"
import SearchInput from "./SearchInput"
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

const Carts = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      costumerId: "55",
      costumerName: "مجتبی علیزاده",
      date: "1400/10/12",
      totalAmount: "100 هزار تومان",
      status: "فعال",
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
    { field: "costumerId", title: "آیدی مشتری" },
    { field: "costumerName", title: "نام مشتری" },
    { field: "date", title: "تاریخ" },
    { field: "totalAmount", title: "مبلغ کل سبد" },
    { field: "status", title: "وضعیت" },
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

export default Carts
