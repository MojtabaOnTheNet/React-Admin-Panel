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
import { useNavigate, useParams } from "react-router"
import { dateToPersian } from "@/lib/utils"

const Categories = () => {
  const params = useParams()
  const navigate = useNavigate()
  type categoryDataType = {
    id: number
    parent_id: number
    created_at: string
    title: string
    is_active: number
    show_in_menu: number
  }

  const [data, setData] = useState([])

  const handleGetCategories = async (categoryId?: string) => {
    try {
      const response = await getCategoriesService(categoryId)
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
          {category.show_in_menu ? "فعال" : "غیرفعال"}
        </span>
      ),
      showInMenu: (
        <span
          className={category.show_in_menu ? "text-green-400" : "text-red-400"}
        >
          {category.show_in_menu ? "هست" : "نیست"}
        </span>
      ),
      date: dateToPersian(category.created_at),
      options: (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus:border-0">
              ...
            </Button>
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
              {category.parent_id ? null : (
                <DropdownMenuItem
                  onClick={() => {
                    navigate(category.id.toString())
                    handleGetCategories(category.id.toString())
                  }}
                >
                  <ShareIcon />
                  زیر مجموعه‌ها
                </DropdownMenuItem>
              )}
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
    { field: "date", title: "ساخته شده در" },
    { field: "options", title: "عملیات" },
  ]

  useEffect(() => {
    handleGetCategories(params.categoryId || undefined)
  }, [])

  return (
    <TableCard
      tableData={tableData}
      tableDataHeader={tableDataHeader}
      searchTarget="title"
    >
      {params.categoryId ? (
        <Button
          onClick={() => {
            // If the windows was refreshed than it should behave correctly
            if (window.history.length > 1) {
              navigate(-1)
            } else {
              navigate("/shop/categories")
            }
            handleGetCategories()
          }}
        >
          بازگشت
        </Button>
      ) : null}
      <ChangeForm />
    </TableCard>
  )
}

export default Categories
