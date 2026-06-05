import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { ContactRound, Pencil, X } from "lucide-react"

const BrandsTableCard = () => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">#</TableHead>
            <TableHead className="w-30 text-center">عنوان</TableHead>
            <TableHead className="w-30 text-center">عنوان فارسی</TableHead>
            <TableHead className="w-30 text-center">توضیحات</TableHead>
            <TableHead className="w-30 text-center">لوگو</TableHead>
            <TableHead className="w-30 text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">Brand 1</TableCell>
            <TableCell className="w-30 text-center">برند شماره 1</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این برند
            </TableCell>
            <TableCell className="w-30 text-center">
              <ContactRound className="mx-auto" />
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Pencil className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">Brand 1</TableCell>
            <TableCell className="w-30 text-center">برند شماره 1</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این برند
            </TableCell>
            <TableCell className="w-30 text-center">
              <ContactRound className="mx-auto" />
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Pencil className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">Brand 1</TableCell>
            <TableCell className="w-30 text-center">برند شماره 1</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این برند
            </TableCell>
            <TableCell className="w-30 text-center">
              <ContactRound className="mx-auto" />
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Pencil className="" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-10 text-center font-medium">1</TableCell>
            <TableCell className="w-30 text-center">Brand 1</TableCell>
            <TableCell className="w-30 text-center">برند شماره 1</TableCell>
            <TableCell className="w-30 text-center">
              توضیحات اجمالی در مورد این برند
            </TableCell>
            <TableCell className="w-30 text-center">
              <ContactRound className="mx-auto" />
            </TableCell>
            <TableCell className="w-30">
              <div className="flex flex-row-reverse justify-center gap-1">
                <X className="" />
                <Pencil className="" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default BrandsTableCard
