import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { ShoppingCart, X } from "lucide-react"

const OrdersTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableCell className="w-30 text-center">آیدی مشتری</TableCell>
            <TableCell className="w-30 text-center">نام مشتری</TableCell>
            <TableCell className="w-30 text-center">وضعیت</TableCell>
            <TableCell className="w-30 text-center">تاریخ</TableCell>
            <TableCell className="w-30 text-center">مبلغ پرداختی</TableCell>
            <TableCell className="w-30 text-center">عملیات</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">50</TableCell>
            <TableCell className="w-30 text-center">مجتبی علیزاده</TableCell>
            <TableCell className="w-30 text-center">پرداخت شده</TableCell>
            <TableCell className="w-30 text-center">1404/07/15</TableCell>
            <TableCell className="w-30 text-center">100 هزار تومان</TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X />
                <ShoppingCart />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default OrdersTableCard
