import ChangeForm from "./ChangeForm"
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

const Guarantees = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      title: "گارانتی 1",
      duration: "12 ماه",
      description: "توضیحات اجمالی",
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
    { field: "title", title: "عنوان" },
    { field: "duration", title: "مدت گارانتی" },
    { field: "description", title: "توضیحات" },
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

export default Guarantees
