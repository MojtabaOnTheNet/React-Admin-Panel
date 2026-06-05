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

const DiscountsTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableHead className="w-30 text-center">عنوان</TableHead>
            <TableHead className="w-30 text-center">کد</TableHead>
            <TableHead className="w-30 text-center">درصد تخفیف</TableHead>
            <TableHead className="w-30 text-center">تا تاریخ</TableHead>
            <TableHead className="w-30 text-center">برای</TableHead>
            <TableHead className="w-30 text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">تخفیف شماره 1</TableCell>
            <TableCell className="w-30 text-center">takhfifWOW</TableCell>
            <TableCell className="w-30 text-center">39%</TableCell>
            <TableCell className="w-30 text-center">1400/10/12</TableCell>
            <TableCell className="w-30 text-center">همه</TableCell>
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

export default DiscountsTableCard
