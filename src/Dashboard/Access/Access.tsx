import SearchInput from "./SearchInput"
import TableCard from "@/components/ui/TableCard"
import type { tableDataHeaderType, tableDataType } from "@/lib/types"
import { Switch } from "@/components/ui/switch"

const Access = () => {
  const tableData: tableDataType = [
    {
      id: "1",
      title: "مجوز شماره یک ",
      description: "توضیحات راجب این مجوز",
      status: (
        <>
          <span className="ml-3">فعال</span>
          <Switch defaultChecked />
        </>
      ),
    },
  ]

  const tableDataHeader: tableDataHeaderType = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "description", title: "توضیحات" },
    { field: "status", title: "وضعیت" },
  ]

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
      </div>
      <TableCard tableData={tableData} tableDataHeader={tableDataHeader} />
    </div>
  )
}

export default Access
