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

const UsersTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableCell className="w-30 text-center">
              نام و نام خانوادگی
            </TableCell>
            <TableCell className="w-30 text-center">موبایل</TableCell>
            <TableCell className="w-30 text-center">ایمیل</TableCell>
            <TableCell className="w-30 text-center">نقش</TableCell>
            <TableCell className="w-30 text-center">تاریخ ثبت نام</TableCell>
            <TableCell className="w-30 text-center">عملیات</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">مجتبی علیزاده</TableCell>
            <TableCell className="w-30 text-center">09106236231</TableCell>
            <TableCell className="w-30 text-center">user@example.com</TableCell>
            <TableCell className="w-30 text-center">کاربر</TableCell>
            <TableCell className="w-30 text-center">1404/12/01</TableCell>
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

export default UsersTableCard
