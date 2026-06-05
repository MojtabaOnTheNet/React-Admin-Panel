import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import MainSidebar from "./Sidebar/MainSidebar"
import { useEffect, useState } from "react"
import { TypingAnimation } from "@/components/ui/typing-animation"
import Home from "./Home/Home"
import { Route, Routes, useLocation } from "react-router"
import Categories from "./Categories/Categories"
import { usePathTitle } from "@/hooks/usePathTitle"
import Products from "./Products/Products"
import Brands from "./Brands/Brands"
import Guarantees from "./Guarantees/Guarantees"
import Colors from "./Colors/Colors"
import Discounts from "./Discounts/Discounts"

const Dashboard = () => {
  const [clock, setClock] = useState<string>()
  const [weekDay, setWeekDay] = useState<string>()
  const [state, dispatch] = usePathTitle()
  const pathTitle = useLocation()

  useEffect(() => {
    console.log(pathTitle.pathname)
    dispatch({ type: pathTitle.pathname })
  }, [pathTitle])

  useEffect(() => {
    setInterval(() => {
      setClock(
        new Intl.DateTimeFormat("fa-IR", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      )
    }, 1000)
    setWeekDay(
      new Intl.DateTimeFormat("fa-IR", {
        weekday: "long",
      }).format(new Date())
    )
  }, [])

  return (
    <SidebarProvider className="bg-muted p-2">
      <MainSidebar />
      <SidebarInset className="flex w-full flex-col gap-4 rounded-xl bg-mauve-800 p-3 shadow-2xl">
        <header className="flex items-center justify-between border-b-2 pb-2">
          <SidebarTrigger className="cursor-pointer" />
          <h1 className="text-5xl font-black">
            <TypingAnimation blinkCursor={true} pauseDelay={2000}>
              {state}
            </TypingAnimation>
          </h1>
          <div className="w-55 text-center">
            <h1 className="text-3xl font-bold text-blue-300">{weekDay}</h1>
            <h1 className="text-1xl font-semibold text-blue-200">
              {clock || (
                <div className="mx-auto h-4 w-50 animate-pulse rounded-2xl bg-mauve-700"></div>
              )}
            </h1>
          </div>
        </header>
        <main className="mx-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop">
              <Route path="categories" element={<Categories />} />
              <Route path="products" element={<Products />} />
              <Route path="brands" element={<Brands />} />
              <Route path="guarantees" element={<Guarantees />} />
              <Route path="colors" element={<Colors />} />
              <Route path="discounts" element={<Discounts />} />
            </Route>
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
