import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SummaryCards() {
  return (
    <div className="flex items-center gap-4 min-w-44">
      <Card className="flex-1 gap-4">
        <CardHeader>
          <CardTitle>Entradas</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl text-emerald-500">
          10,000.00
        </CardContent>
      </Card>
      <Card className="flex-1 gap-4">
        <CardHeader>
          <CardTitle>Saídas</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl text-rose-600">5,000.00</CardContent>
      </Card>
    </div>
  )
}
