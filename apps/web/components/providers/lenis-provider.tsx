"use client"
import Lenis from "lenis"
import { createContext, useContext, useEffect, useRef } from "react"

type LenisContextValue = {
  scrollTo: (target: string | number | HTMLElement) => void
}

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
})

export function useLenis() {
  return useContext(LenisContext)
}

type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      prevent: (node) => {
        return node.hasAttribute("data-lenis-prevent")
      },
      duration: 1.8,
      smoothWheel: true,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const animationFrame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo: LenisContextValue["scrollTo"] = (target) => {
    lenisRef.current?.scrollTo(target as string, { duration: 1.4 })
  }

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  )
}
