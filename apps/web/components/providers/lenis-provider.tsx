"use client"
import Lenis from "lenis"
import { useEffect } from "react"
type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      touchMultiplier: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const animationFrame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
