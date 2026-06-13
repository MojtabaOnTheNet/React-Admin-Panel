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
import { useEffect, useState } from "react"
import { getCategoriesService } from "@/services/category"

const Categories = () => {
  type categoryDataType = {
    id: number
    title: string
    is_active: number
    show_in_menu: number
  }

  const [data, setData] = useState([])

  const handleGetCategories = async () => {
    try {
      const response = await getCategoriesService()
      if (response.status == 200) {
        setData(response.data.data)
      } else {
        alert("Oh No! " + response.data.message)
      }
    } catch (error) {
      alert("Something went wrong! " + error)
    }
  }

  const tableData: tableDataType = data.map((category: categoryDataType) => {
    return {
      id: category.id,
      title: category.title,
      status: (
        <span
          className={category.show_in_menu ? "text-green-400" : "text-red-400"}
        >
          {category.show_in_menu ? "فعال" : "غبرفعال"}
        </span>
      ),
      showInMenu: (
        <span
          className={category.show_in_menu ? "text-green-400" : "text-red-400"}
        >
          {category.show_in_menu ? "هست" : "نیست"}
        </span>
      ),
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
                زیر مجموعه‌ها
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
    }
  })

  const tableDataHeader: tableDataHeaderType = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "status", title: "وضعیت" },
    { field: "showInMenu", title: "نمایش در منو" },
    { field: "options", title: "عملیات" },
  ]

  useEffect(() => {
    handleGetCategories()
  }, [])

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
