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
import { Switch } from "@/components/ui/switch"

const RolesTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableCell className="w-30 text-center">عنوان </TableCell>
            <TableCell className="w-30 text-center">توضیحات</TableCell>
            <TableCell className="w-30 text-center">وضعیت</TableCell>
            <TableCell className="w-30 text-center">عملیات</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center"> نقش شماره 1</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات در مورد این نقش
            </TableCell>
            <TableCell className="w-30 space-x-2 text-center">
              <span>فعال</span>
              <Switch defaultChecked />
            </TableCell>
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

export default RolesTableCard
