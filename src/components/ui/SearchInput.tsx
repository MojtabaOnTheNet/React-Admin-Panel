"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SearchInput = ({
  value,
  handleChange,
}: {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
}) => (
  <div className="w-full max-w-sm space-y-2">
    <Label className="absolute -translate-y-8 text-lg" htmlFor="search-input">
      جستجو
    </Label>
    <div className="relative">
      <Search className="absolute inset-s-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        className="h-9 bg-background/40 ps-9"
        id="search-input"
        placeholder="جستجو..."
        type="search"
        value={value}
        onChange={handleChange}
      />
    </div>
  </div>
)

export default SearchInput
