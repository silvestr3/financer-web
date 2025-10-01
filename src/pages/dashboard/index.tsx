import { BalanceChart } from "./components/balance-chart"
import { CategoriesChart } from "./components/categories-chart"
import { SummaryCards } from "./components/summary-cards"

export function DashboardPage() {
  return (
    <div className="grid grid-cols-12 grid-rows-4 gap-4">
      <BalanceChart className="col-span-12 lg:col-span-7 row-span-4" />
      <SummaryCards className="col-span-12 lg:col-span-5 row-span-1" />
      <CategoriesChart className="col-span-12 lg:col-span-5 row-span-3" />
    </div>
  )
}
