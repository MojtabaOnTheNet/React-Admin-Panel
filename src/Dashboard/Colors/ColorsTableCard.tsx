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

const ColorsTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableHead className="w-30 text-center">نام رنگ</TableHead>
            <TableHead className="w-30 text-center">کد رنگ</TableHead>
            <TableHead className="w-30 text-center">رنگ</TableHead>
            <TableHead className="w-30 text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">قرمز</TableCell>
            <TableCell className="w-30 text-center">#F44336</TableCell>
            <TableCell className="w-30 text-center">
              <div className="mx-auto h-10 w-1/2 rounded-full bg-red-500"></div>
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">قرمز</TableCell>
            <TableCell className="w-30 text-center">#F44336</TableCell>
            <TableCell className="w-30 text-center">
              <div className="mx-auto h-10 w-1/2 rounded-full bg-red-500"></div>
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default ColorsTableCard
