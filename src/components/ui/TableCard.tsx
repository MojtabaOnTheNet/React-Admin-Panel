import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type { tableDataHeaderType, tableDataType } from "@/lib/types"
import { useMemo, useState } from "react"

const TableCard = ({
  tableData,
  tableDataHeader,
}: {
  tableData: tableDataType
  tableDataHeader: tableDataHeaderType
}) => {
  const columns = useMemo(
    () =>
      tableDataHeader.map((header) => ({
        accessorKey: header.field,
        header: header.title,
      })),
    [tableDataHeader]
  )

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 2,
  })

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
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
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell, i) => (
                  <TableCell
                    key={cell.id}
                    className={
                      i == 0
                        ? "w-10 text-center font-medium"
                        : "w-30 text-center"
                    }
                  >
                    {cell.getValue() as React.ReactNode}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              className={
                !table.getCanPreviousPage()
                  ? "pointer-events-none opacity-50"
                  : ""
              }
              href="#"
              text="قبلی"
            />
          </PaginationItem>
          {Array.from({ length: table.getPageCount() }).map((_, index) => {
            const pageNumber = index + 1
            const isActive = table.getState().pagination.pageIndex === index

            return (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={isActive}
                  key={index}
                  onClick={() => table.setPageIndex(index)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationItem>
            <PaginationNext
              onClick={() => table.nextPage()}
              className={
                !table.getCanNextPage() ? "pointer-events-none opacity-50" : ""
              }
              href="#"
              text="بعدی"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default TableCard
