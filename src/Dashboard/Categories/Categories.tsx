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
import {
  deleteCategoryService,
  getCategoriesService,
} from "@/services/category"
import { useNavigate, useParams } from "react-router"
import { dateToPersian } from "@/lib/utils"
import { toast } from "sonner"
import DeleteAlertDialog from "@/components/ui/DeleteAlertDialog"

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
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [editId, setEditId] = useState<number | null>(null)

  const handleGetCategories = async (categoryId?: string) => {
    setLoading(true)
    try {
      const response = await getCategoriesService(categoryId)
      if (response.status == 200) {
        setData(response.data.data)
      }
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      const response = await deleteCategoryService(categoryId)
      if (response.status == 200) {
        handleGetCategories(params.categoryId || undefined)
        toast.success("دسته بندی با موفقیت حذف شد.", {
          duration: 2000,
          id: "success-toast",
        })
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const tableData: tableDataType = data.map((category: categoryDataType) => {
    return {
      id: category.id,
      title: category.title,
      status: (
        <span
          className={category.is_active ? "text-green-400" : "text-red-400"}
        >
          {category.is_active ? "فعال" : "غیرفعال"}
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
              <DropdownMenuItem
                onClick={() => {
                  setEditId(category.id)
                  setOpen(true)
                }}
              >
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
              <DropdownMenuItem
                variant="destructive"
                onClick={() => {
                  setDeleteOpen(true)
                  setDeleteId(String(category.id))
                }}
              >
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

  // Render not found if data array is empty
  if (!loading && !tableData.length) {
    return (
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
        <div className="flex w-full items-center justify-between gap-2">
          <Button
            className="mr-auto"
            onClick={() => {
              // If the windows was refreshed than it should behave correctly
              navigate("/shop/categories")
              handleGetCategories()
            }}
          >
            بازگشت
          </Button>
          <Button
            className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100"
            onClick={() => {
              setOpen(true)
              setEditId(null)
            }}
          >
            اضافه
          </Button>
          <ChangeForm
            handleGetCategories={handleGetCategories.bind(
              this,
              params.categoryId || undefined
            )}
            open={open}
            setOpen={setOpen}
          />
        </div>

        <div className="mt-60 animate-pulse text-center text-4xl font-bold text-red-600">
          هیج موردی یافت نشد!
        </div>
      </div>
    )
  }

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
      <Button
        className="text-md w-20 rounded-full bg-green-300 hover:bg-green-100"
        onClick={() => {
          setOpen(true)
          setEditId(null)
        }}
      >
        اضافه
      </Button>
      <ChangeForm
        handleGetCategories={handleGetCategories}
        open={open}
        setOpen={setOpen}
        editId={editId}
      />
      <DeleteAlertDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        title="حذف دسته‌بندی؟"
        description="این عملیات بازگشت پذیر نمی‌باشد."
        action={handleDeleteCategory.bind(this, deleteId!)}
      />
    </TableCard>
  )
}

export default Categories
