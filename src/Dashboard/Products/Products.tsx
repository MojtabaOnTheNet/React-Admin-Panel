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
      remaining: "موجودی",
      likes: "تعداد لایک",
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
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <TableCard tableData={tableData} tableDataHeader={tableDataHeader} />
      {/* <ProductsTableCard /> */}
    </div>
  )
}

export default Products
