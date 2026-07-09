import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="relative min-h-screen w-full scrollbar-none color overflow-x-hidden z-0 bg-background">
      <div className="absolute -top-100 -left-150 w-250 h-200 rounded-full z-0 blur-[150px] bg-linear-to-br to-100% from-accent/20 to-primary/80"></div>
      <div className="absolute -bottom-160 -right-100 w-200 h-250 rounded-full z-0 blur-[100px] bg-linear-to-br to-100% from-primary/70 to-accent/20"></div>
      <div className="flex min-h-svh relative items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  )
}