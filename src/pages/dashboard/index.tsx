import { Card } from "@/components/ui/card"
import { BalanceChart } from "./components/balance-chart"
import { SummaryCards } from "./components/summary-cards"

export function DashboardPage() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex-1">
        <BalanceChart />
      </div>
      <div className="flex-1 flex flex-col gap-4 h-full">
        <SummaryCards />
        <Card className="flex-1">a</Card>
      </div>
    </div>
  )
}
