import { BalanceChart } from "./components/balance-chart"
import { SummaryCards } from "./components/summary-cards"
import { CategoriesChart } from "./components/categories-chart"

export function DashboardPage() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex-1">
        <BalanceChart />
      </div>
      <div className="flex-1 flex flex-col gap-4 h-full">
        <SummaryCards />
        <CategoriesChart />
      </div>
    </div>
  )
}
