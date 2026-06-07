import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Pencil, X } from "lucide-react"

const DeliveryTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableCell className="w-30 text-center">عنوان</TableCell>
            <TableCell className="w-30 text-center">هزینه</TableCell>
            <TableCell className="w-30 text-center">زمان ارسال</TableCell>
            <TableCell className="w-30 text-center">واحد زمان</TableCell>
            <TableCell className="w-30 text-center">عملیات</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">پست پیشتاز</TableCell>
            <TableCell className="w-30 text-center">25,000 تومان</TableCell>
            <TableCell className="w-30 text-center">10</TableCell>
            <TableCell className="w-30 text-center">روز</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X />
                <Pencil />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default DeliveryTableCard
