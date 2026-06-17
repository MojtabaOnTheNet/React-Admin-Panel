import { SidebarTrigger } from "@/components/ui/sidebar"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { usePathTitle } from "@/hooks/usePathTitle"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const Header = () => {
  const [clock, setClock] = useState<string>()
  const [weekDay, setWeekDay] = useState<string>()
  const [state, dispatch] = usePathTitle()
  const pathTitle = useLocation()

  useEffect(() => {
    dispatch({ type: pathTitle.pathname })
  }, [pathTitle])

  useEffect(() => {
    setInterval(() => {
      setClock(
        new Intl.DateTimeFormat("fa-IR", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      )
    }, 1000)
    setWeekDay(
      new Intl.DateTimeFormat("fa-IR", {
        weekday: "long",
      }).format(new Date())
    )
  }, [])

  return (
    <header className="flex items-center justify-between border-b-2 pb-2">
      <SidebarTrigger className="cursor-pointer" />
      <h1 className="text-xl font-black lg:text-5xl">
        <TypingAnimation
          className="leading-tight"
          blinkCursor={true}
          pauseDelay={2000}
        >
          {state}
        </TypingAnimation>
      </h1>
      <div className="w-55 text-center">
        <h1 className="text-lg font-bold text-blue-300 lg:text-3xl">
          {weekDay}
        </h1>
        <h1 className="lg:text-1xl text-sm font-semibold text-blue-200">
          {clock || (
            <div className="mx-auto h-4 w-50 animate-pulse rounded-2xl bg-mauve-700"></div>
          )}
        </h1>
      </div>
    </header>
  )
}

export default Header
