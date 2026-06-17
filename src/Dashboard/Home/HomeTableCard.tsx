import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

const HomeTableCard = () => {
  return (
    <Card className="h-80 w-full lg:h-138.5">
      <CardTitle className="px-6">محصولات رو به اتمام</CardTitle>
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">#</TableHead>
            <TableHead>دسته</TableHead>
            <TableHead>عنوان</TableHead>
            <TableHead>وضعیت</TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>دسته فلان</TableCell>
            <TableCell>محصول فلان</TableCell>
            <TableCell>پایان یافته</TableCell>
            <TableCell>
              <X className="mr-2" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>دسته فلان</TableCell>
            <TableCell>محصول فلان</TableCell>
            <TableCell>پایان یافته</TableCell>
            <TableCell>
              <X className="mr-2" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>دسته فلان</TableCell>
            <TableCell>محصول فلان</TableCell>
            <TableCell>پایان یافته</TableCell>
            <TableCell>
              <X className="mr-2" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>دسته فلان</TableCell>
            <TableCell>محصول فلان</TableCell>
            <TableCell>پایان یافته</TableCell>
            <TableCell>
              <X className="mr-2" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>دسته فلان</TableCell>
            <TableCell>محصول فلان</TableCell>
            <TableCell>پایان یافته</TableCell>
            <TableCell>
              <X className="mr-2" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default HomeTableCard
