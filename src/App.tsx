import { BrowserRouter } from "react-router"
// import Dashboard from "./Dashboard/Dashboard"
import Auth from "./Auth/Auth"

export function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard /> */}
      <Auth />
    </BrowserRouter>
  )
}

export default App
