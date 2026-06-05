import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Pencil, Plus, Share2, X } from "lucide-react"

const CategoriesTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableHead className="w-30 text-center">عنوان</TableHead>
            <TableHead className="w-30 text-center">وضعیت</TableHead>
            <TableHead className="w-30 text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">دسته شماره فلان</TableCell>
            <TableCell className="w-30 text-center">فعال</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Plus className="" />
                <Pencil className="" />
                <Share2 className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">دسته شماره فلان</TableCell>
            <TableCell className="w-30 text-center">فعال</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Plus className="" />
                <Pencil className="" />
                <Share2 className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">دسته شماره فلان</TableCell>
            <TableCell className="w-30 text-center">فعال</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Plus className="" />
                <Pencil className="" />
                <Share2 className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">دسته شماره فلان</TableCell>
            <TableCell className="w-30 text-center">فعال</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Plus className="" />
                <Pencil className="" />
                <Share2 className="" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default CategoriesTableCard
