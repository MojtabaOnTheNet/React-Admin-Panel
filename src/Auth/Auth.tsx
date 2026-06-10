import { Route, Routes } from "react-router"
import Login from "./Login"
import LightRays from "@/components/LightRays"

const Auth = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="fixed inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#319adc"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="h-full w-full"
          pulsating
          fadeDistance={1.5}
          saturation={1.4}
        />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Auth
