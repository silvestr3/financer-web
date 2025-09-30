import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <nav className="bg-sidebar h-12 display flex items-center justify-end p-2 border-b">
      <ThemeToggle />
    </nav>
  )
}
