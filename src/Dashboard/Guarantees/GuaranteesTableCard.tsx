import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

const GuaranteesTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableHead className="w-30 text-center">عنوان</TableHead>
            <TableHead className="w-30 text-center">مدت گارانتی</TableHead>
            <TableHead className="w-30 text-center">توضیحات</TableHead>
            <TableHead className="w-30 text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">گارانتی 1</TableCell>
            <TableCell className="w-30 text-center">12 ماه</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این گارانتی
            </TableCell>
            <TableCell className="w-30">
              <X className="mx-auto" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">گارانتی 1</TableCell>
            <TableCell className="w-30 text-center">12 ماه</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این گارانتی
            </TableCell>
            <TableCell className="w-30">
              <X className="mx-auto" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">گارانتی 1</TableCell>
            <TableCell className="w-30 text-center">12 ماه</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این گارانتی
            </TableCell>
            <TableCell className="w-30">
              <X className="mx-auto" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">گارانتی 1</TableCell>
            <TableCell className="w-30 text-center">12 ماه</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این گارانتی
            </TableCell>
            <TableCell className="w-30">
              <X className="mx-auto" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default GuaranteesTableCard
