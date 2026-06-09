import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

import type { tableDataHeaderType, tableDataType } from "@/lib/types"

const TableCard = ({
  tableData,
  tableDataHeader,
}: {
  tableData: tableDataType
  tableDataHeader: tableDataHeaderType
}) => {
  return (
    <Card className="w-full">
      <Table className="overflow-hidden text-lg">
        <TableHeader>
          <TableRow>
            {tableDataHeader.map((header) => (
              <TableHead key={header.field} className="w-10 text-center">
                {header.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              {tableDataHeader.map((header, i) => (
                <TableCell
                  key={header.field + "_" + data.id}
                  className={
                    i == 0 ? "w-10 text-center font-medium" : "w-30 text-center"
                  }
                >
                  {data[header.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableCard
