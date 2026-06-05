"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="search-input">جستجو</Label>
    <div className="relative">
      <Search className="absolute inset-s-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        className="bg-background ps-9"
        id="search-input"
        placeholder="جستجو..."
        type="search"
      />
    </div>
  </div>
)

export default Example
