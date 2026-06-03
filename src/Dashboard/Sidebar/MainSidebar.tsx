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
  Home,
  Share2,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react"
import type React from "react"
import MainSidebarNavigation from "./MainSidebarNavigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
        link: "/Categories",
      },
      {
        title: "مدیریت محصول",
        link: "/Products",
      },
      {
        title: "مدیریت برندها",
        link: "/Brands",
      },
      {
        title: "مدیریت گارانتی‌ها",
        link: "/Guarantees",
      },
      {
        title: "مدیریت رنگ‌ها",
        link: "Colors",
      },
      {
        title: "مدیریت تخفیف‌ها",
        link: "Discounts",
      },
    ],
  },
  {
    title: "سفارشات و سبد",
    icon: <ShoppingCart className="size-4" />,
    subs: [
      {
        title: "مدیریت سبدها",
        link: "#",
      },
      {
        title: "مدیریت سفارشات",
        link: "#",
      },
      {
        title: "مدیریت نحوه ارسال",
        link: "#",
      },
    ],
  },
  {
    title: "کاربران و همکاران",
    icon: <User className="size-4" />,
    subs: [
      {
        title: "مشاهده کاربران",
        link: "#",
      },
      {
        title: "نقش‌ها",
        link: "#",
      },
      {
        title: "مجوزها",
        link: "#",
      },
    ],
  },
  {
    title: "ارتباطات",
    icon: <Share2 className="size-4" />,
    subs: [
      {
        title: "سوال‌ها",
        link: "#",
      },
      {
        title: "نظرات",
        link: "#",
      },
    ],
  },
]

const MainSidebar = () => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
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
                  <div className="grid flex-1 text-sm leading-tight">
                    <span className="truncate font-medium">مجتبی علیزاده</span>
                    <span className="truncate text-xs text-muted-foreground">
                      09106234401
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
