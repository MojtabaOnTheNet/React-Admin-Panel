import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { ScrollText, ShoppingBag, ShoppingBasket } from "lucide-react"

const TrendCards = () => {
  return (
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
        <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-secondary/50 p-3 px-5">
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
        <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-secondary/50 p-3 px-5">
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
        <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-secondary/50 p-3 px-5">
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
        <div className="flex flex-col items-start justify-center gap-1 border-t-2 bg-secondary/50 p-3 px-5">
          <h1>3,000,000 در هفته گذشته</h1>
          <h1>9,000,000 در ماه گذشته</h1>
        </div>
      </Card>
    </div>
  )
}

export default TrendCards
