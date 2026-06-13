import { useLocation } from "react-router"
import Dashboard from "./Dashboard/Dashboard"
import Auth from "./Auth/Auth"

export function App() {
  const location = useLocation()
  return location.pathname.includes("/auth") ? <Auth /> : <Dashboard />
}

export default App
