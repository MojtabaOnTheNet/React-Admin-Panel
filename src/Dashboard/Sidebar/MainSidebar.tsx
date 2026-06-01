import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Share2, ShoppingBag, ShoppingCart, User } from "lucide-react"
import type React from "react"
import MainSidebarNavigation from "./MainSidebarNavigation"

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
    link: "#",
  },
  {
    title: "فروشگاه",
    icon: <ShoppingBag className="size-4" />,
    subs: [
      {
        title: "مدیریت گروه محصول",
        link: "#",
      },
      {
        title: "مدیریت محصول",
        link: "#",
      },
      {
        title: "مدیریت برندها",
        link: "#",
      },
      {
        title: "مدیریت گارانتی‌ها",
        link: "#",
      },
      {
        title: "مدیریت رنگ‌ها",
        link: "#",
      },
      {
        title: "مدیریت تخفیف‌ها",
        link: "#",
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
  //   const { state } = useSidebar()
  //   const isCollapsed = state === "collapsed"
  return (
    <>
      <Sidebar
        /* variant="inset" */
        collapsible="icon"
        dir="rtl"
        side="right"
      >
        <SidebarContent className="gap-4 px-2 py-4">
          <MainSidebarNavigation routes={dashboardRoutes} />
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default MainSidebar
