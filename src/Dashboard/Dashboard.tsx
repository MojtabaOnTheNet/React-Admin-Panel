import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import MainSidebar from "./Sidebar/MainSidebar"

const Dashboard = () => {
  return (
    <SidebarProvider className="bg-muted p-4">
      <MainSidebar />
      <div className="flex w-full flex-col gap-4">
        <header className="">
          <SidebarTrigger className="cursor-pointer" />
        </header>
        <main className="flex-1 rounded-xl bg-mauve-500"></main>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard
