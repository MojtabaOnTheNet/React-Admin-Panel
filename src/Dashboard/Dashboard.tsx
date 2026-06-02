import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import MainSidebar from "./Sidebar/MainSidebar"
import { useEffect, useState } from "react"
import { TypingAnimation } from "@/components/ui/typing-animation"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { ScrollText, ShoppingBag, ShoppingBasket } from "lucide-react"
import { ChartCard } from "@/components/ChartCard"

const Dashboard = () => {
  const [clock, setClock] = useState<string>()
  const [weekDay, setWeekDay] = useState<string>()

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
              خوش اومدی مجتبی!
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
        <main>
          <div className="flex items-center justify-center gap-5">
            <Card className="mx-auto h-50 w-full max-w-sm">
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl">7</CardTitle>
                  <CardDescription>سبد خرید امروز</CardDescription>
                  <p>سبدهای خرید مانده امروز</p>
                </div>
                <ShoppingBasket className="h-10 w-10" />
              </CardContent>
              <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-mauve-800/50 p-3 px-5">
                <h1>13 در هفته گذشته</h1>
                <h1>18 در ماه گذشته</h1>
              </div>
            </Card>
            <Card className="mx-auto h-50 w-full max-w-sm">
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl">5</CardTitle>
                  <CardDescription>سفارشات مانده امروز</CardDescription>
                  <p>سفارشات معلق و فاقد پرداختی</p>
                </div>
                <ShoppingBag className="h-10 w-10" />
              </CardContent>
              <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-mauve-800/50 p-3 px-5">
                <h1>9 در هفته گذشته</h1>
                <h1>16 در ماه گذشته</h1>
              </div>
            </Card>
            <Card className="mx-auto h-50 w-full max-w-sm">
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl">45</CardTitle>
                  <CardDescription>سفارشات امروز</CardDescription>
                  <p>سفارشات کامل و دارای پرداختی</p>
                </div>
                <ScrollText className="h-10 w-10" />
              </CardContent>
              <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-mauve-800/50 p-3 px-5">
                <h1>263 در هفته گذشته</h1>
                <h1>1038 در ماه گذشته</h1>
              </div>
            </Card>
            <Card className="mx-auto h-50 w-full max-w-sm">
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl">1,500,000</CardTitle>
                  <CardDescription> درآمد امروز</CardDescription>
                  <p>جمع مبالغ پرداختی(تومان)</p>
                </div>
                <ShoppingBasket className="h-10 w-10" />
              </CardContent>
              <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-mauve-800/50 p-3 px-5">
                <h1>3,000,000 در هفته گذشته</h1>
                <h1>9,000,000 در ماه گذشته</h1>
              </div>
            </Card>
          </div>
          <div className="mt-10 flex w-full items-center justify-end">
            <ChartCard />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
