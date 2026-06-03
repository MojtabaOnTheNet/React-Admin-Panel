import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { Route } from "./MainSidebar"
import { useState } from "react"
import { NavLink } from "react-router"
import { cn } from "@/lib/utils"
import { Collapsible } from "radix-ui"
import { ChevronUp } from "lucide-react"

const MainSidebarNavigation = ({ routes }: { routes: Route[] }) => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const [openCollapsible, setOpenCollapsible] = useState<number | null>(null)
  return (
    <SidebarMenu>
      {routes.map((route, index) => {
        const isOpen = !isCollapsed && openCollapsible === index
        const hasSubRoutes = route.subs?.length
        return (
          <SidebarMenuItem key={index}>
            {hasSubRoutes ? (
              <Collapsible.Collapsible
                open={isOpen}
                onOpenChange={(open) => setOpenCollapsible(open ? index : null)}
                className="w-full"
              >
                <Collapsible.CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={cn(
                      "flex w-full items-center rounded-lg px-2 transition-colors",
                      isOpen
                        ? "bg-sidebar-muted text-foreground"
                        : "hover:bg-sidebar-muted text-muted-foreground hover:text-foreground",
                      isCollapsed && "justify-center"
                    )}
                  >
                    {route.icon}
                    {!isCollapsed && (
                      <span className="ml-2 flex-1 text-sm font-medium">
                        {route.title}
                      </span>
                    )}
                    {!isCollapsed && hasSubRoutes && (
                      <span className="ml-auto">
                        <ChevronUp
                          className={cn(
                            "size-4 transition-all duration-200",
                            isOpen ? "" : "rotate-180"
                          )}
                        />
                      </span>
                    )}
                  </SidebarMenuButton>
                </Collapsible.CollapsibleTrigger>
                {!isCollapsed && (
                  <Collapsible.CollapsibleContent>
                    <SidebarMenuSub className="my-1 ml-3.5">
                      {route.subs?.map((subRoute) => (
                        <SidebarMenuSubItem
                          key={`${index}-${subRoute.title}`}
                          className="h-auto"
                        >
                          <SidebarMenuSubButton asChild>
                            <NavLink to={`${subRoute.link}`}>
                              {subRoute.title}
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </Collapsible.CollapsibleContent>
                )}
              </Collapsible.Collapsible>
            ) : (
              <SidebarMenuButton asChild>
                <NavLink
                  to={`${route.link}`}
                  className={cn(
                    "hover:bg-sidebar-muted flex w-full items-center rounded-lg pr-2 text-muted-foreground transition-colors hover:text-foreground",
                    isCollapsed && "justify-center"
                  )}
                >
                  {route.icon}
                  {!isCollapsed && (
                    <span className="ml-1 text-sm font-medium">
                      {route.title}
                    </span>
                  )}
                </NavLink>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}

export default MainSidebarNavigation
