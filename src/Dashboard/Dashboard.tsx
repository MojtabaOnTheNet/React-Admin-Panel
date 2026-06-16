import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import MainSidebar from "./Sidebar/MainSidebar"
import Home from "./Home/Home"
import { Navigate, Route, Routes } from "react-router"
import Categories from "./Categories/Categories"
import Products from "./Products/Products"
import Brands from "./Brands/Brands"
import Guarantees from "./Guarantees/Guarantees"
import Colors from "./Colors/Colors"
import Discounts from "./Discounts/Discounts"
import Carts from "./Carts/Carts"
import Orders from "./Orders/Orders"
import Delivery from "./Delivery/Delivery"
import Roles from "./Roles/Roles"
import Access from "./Access/Access"
import Comments from "./Comments/Comments"
import Questions from "./Questions/Questions"
import Users from "./Users/Users"
import Header from "./Header/Header"
import { Spinner } from "@/components/ui/spinner"
import { useAuth } from "@/hooks/useAuth"

const Dashboard = () => {
  const [isLoading, isLogin] = useAuth()
  return (
    <>
      {isLoading ? (
        <div className="flex h-dvh w-full items-center justify-center">
          <Spinner className="size-8" />
        </div>
      ) : isLogin ? (
        <SidebarProvider className="bg-muted p-2">
          <MainSidebar />
          <SidebarInset className="flex w-full flex-col gap-4 rounded-xl bg-secondary p-3 shadow-2xl">
            <Header />
            <main className="mx-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop">
                  <Route path="categories" element={<Categories />}>
                    <Route path=":categoryId" />
                  </Route>
                  <Route path="products" element={<Products />} />
                  <Route path="brands" element={<Brands />} />
                  <Route path="guarantees" element={<Guarantees />} />
                  <Route path="colors" element={<Colors />} />
                  <Route path="discounts" element={<Discounts />} />
                </Route>
                <Route path="/carts" element={<Carts />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/users" element={<Users />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/access" element={<Access />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
          </SidebarInset>
        </SidebarProvider>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </>
  )
}

export default Dashboard
