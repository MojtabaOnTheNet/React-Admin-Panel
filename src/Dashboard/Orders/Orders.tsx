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
import { ShoppingCartIcon, TrashIcon } from "lucide-react"
import TableCard from "@/components/ui/TableCard"
import type { tableDataHeaderType, tableDataType } from "@/lib/types"

const Orders = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      costumerId: "55",
      costumerName: "مجتبی علیزاده",
      status: "پرداخت شده",
      date: "1400/10/12",
      totalAmount: "100 هزار تومان",
      options: (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ShoppingCartIcon />
                مشاهده
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
    { field: "status", title: "وضعیت" },
    { field: "date", title: "تاریخ" },
    { field: "totalAmount", title: "مبلغ مبلغ پراختی" },
    { field: "options", title: "عملیات" },
  ]

  return (
    <TableCard
      tableData={tableData}
      tableDataHeader={tableDataHeader}
      searchTarget="costumerName"
    >
      <ChangeForm />
    </TableCard>
  )
}

export default Orders
