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
import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react"
import TableCard from "@/components/ui/TableCard"
import type { tableDataHeaderType, tableDataType } from "@/lib/types"

const Products = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      category: "دسته شماره فلان",
      title: "محصول شماره فلان",
      price: "20,000 تومان",
      remaining: "کم",
      likes: "10",
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
    { field: "category", title: "دسته" },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "remaining", title: "موجودی" },
    { field: "likes", title: "تعداد لایک" },
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

export default Products
