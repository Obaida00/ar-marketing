import React from "react"

export default function Milestone({
  active,
  children,
}: {
  active: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={
        "ease z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all " +
        (active
          ? "bg-primary shadow-xl shadow-accent"
          : "border border-muted-foreground")
      }
    >
      {children}
    </div>
  )
}
