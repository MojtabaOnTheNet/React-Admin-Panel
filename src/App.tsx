import { BrowserRouter } from "react-router"
import { SidebarProvider } from "./components/ui/sidebar"
import Dashboard from "./Dashboard/Dashboard"

export function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  )
}

export default App
