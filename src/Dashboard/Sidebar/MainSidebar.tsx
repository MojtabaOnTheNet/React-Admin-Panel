import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Command,
  EllipsisVertical,
  Home,
  LogOutIcon,
  Share2,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react"
import type React from "react"
import MainSidebarNavigation from "./MainSidebarNavigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useNavigate } from "react-router"

export type Route = {
  title: string
  icon: React.ReactNode
  link?: String
  subs?: {
    title: string
    link: string
  }[]
}

const dashboardRoutes: Route[] = [
  {
    title: "خانه",
    icon: <Home className="size-4" />,
    link: "/",
  },
  {
    title: "فروشگاه",
    icon: <ShoppingBag className="size-4" />,
    subs: [
      {
        title: "مدیریت گروه محصول",
        link: "shop/categories",
      },
      {
        title: "مدیریت محصول",
        link: "shop/products",
      },
      {
        title: "مدیریت برندها",
        link: "shop/brands",
      },
      {
        title: "مدیریت گارانتی‌ها",
        link: "shop/guarantees",
      },
      {
        title: "مدیریت رنگ‌ها",
        link: "shop/colors",
      },
      {
        title: "مدیریت تخفیف‌ها",
        link: "shop/discounts",
      },
    ],
  },
  {
    title: "سفارشات و سبد",
    icon: <ShoppingCart className="size-4" />,
    subs: [
      {
        title: "مدیریت سبدها",
        link: "carts",
      },
      {
        title: "مدیریت سفارشات",
        link: "orders",
      },
      {
        title: "مدیریت نحوه ارسال",
        link: "delivery",
      },
    ],
  },
  {
    title: "کاربران و همکاران",
    icon: <User className="size-4" />,
    subs: [
      {
        title: "مشاهده کاربران",
        link: "users",
      },
      {
        title: "نقش‌ها",
        link: "roles",
      },
      {
        title: "مجوزها",
        link: "access",
      },
    ],
  },
  {
    title: "ارتباطات",
    icon: <Share2 className="size-4" />,
    subs: [
      {
        title: "سوال‌ها",
        link: "questions",
      },
      {
        title: "نظرات",
        link: "comments",
      },
    ],
  },
]

const MainSidebar = () => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const navigate = useNavigate()

  const handleLogOut = async () => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken")!)
    try {
      const response = await axios.get(
        "https://ecomadminapi.azhadev.ir/api/auth/logout",
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      )
      console.log(response.data)

      if (response.status == 200) {
        localStorage.removeItem("loginToken")
        navigate("/auth/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Sidebar
        variant="inset"
        collapsible="icon"
        dir="rtl"
        side="right"
        className="pt-3"
      >
        <SidebarHeader
          className={cn(
            "flex md:pt-3.5",
            isCollapsed
              ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
              : "flex-row items-center justify-start"
          )}
        >
          <Command className="h-8 w-8" />
          {!isCollapsed && <span className="font-extrabold">پنل ادمین</span>}
        </SidebarHeader>
        <SidebarContent className="gap-4 px-2 py-4">
          <MainSidebarNavigation routes={dashboardRoutes} />
        </SidebarContent>
        <SidebarFooter
          className={cn(
            "flex md:pt-3.5",
            isCollapsed
              ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
              : "flex-row items-center justify-start"
          )}
        >
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <Avatar className="graysacel h-8 w-8 rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div className="relative grid flex-1 text-sm leading-tight">
                    <span className="truncate font-medium">مجتبی علیزاده</span>
                    <span className="truncate text-xs text-muted-foreground">
                      09106234401
                    </span>
                    <span className="absolute -left-3">
                      <DropdownMenu dir="rtl">
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost">
                            <EllipsisVertical />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            <DropdownMenuItem
                              variant="destructive"
                              onClick={handleLogOut}
                            >
                              <LogOutIcon />
                              خروج از حساب کاربری
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </span>
                  </div>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

export default MainSidebar
