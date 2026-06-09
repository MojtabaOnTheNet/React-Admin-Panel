import * as React from "react"

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
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnFiltersState,
} from "@tanstack/react-table"

import type { tableDataHeaderType, tableDataType } from "@/lib/types"
import { useMemo, useState } from "react"
import SearchInput from "./SearchInput"

const TableCard = ({
  tableData,
  tableDataHeader,
  children,
  searchTarget,
}: {
  tableData: tableDataType
  tableDataHeader: tableDataHeaderType
  children?: React.ReactNode
  searchTarget: string
}) => {
  // Turn tableDataHeader into TabSatck compatible headers
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

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      pagination,
      columnFilters,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput
          value={
            (table.getColumn(searchTarget)?.getFilterValue() as string) ?? ""
          }
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn(searchTarget)?.setFilterValue(event.target.value)
          }
        />
        {children}
      </div>
      <Card className="w-full">
        <Table className="overflow-hidden text-lg">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="w-10 text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
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
    </div>
  )
}

export default TableCard
