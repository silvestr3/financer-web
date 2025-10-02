import { CustomTabs } from "@/components/global/custom-tabs";
import { DataTable } from "@/components/global/data-table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Income } from "@/types/income";
import type { ColumnDef } from "@tanstack/react-table";
import { CalendarCheck, Plus, Repeat } from "lucide-react";

const recurringIncomeList: Income[] = [
  {
    id: "1",
    description: "Salário",
    amount: 5000,
    date: "2024-06-01",
  },
];

const oneTimeIncomeList: Income[] = [
  {
    id: "2",
    description: "Freelance Projeto X",
    amount: 1500,
    date: "2024-06-10",
  },
  {
    id: "3",
    description: "Venda de Produto Y",
    amount: 300,
    date: "2024-06-15",
  },
];

export function IncomePage() {
  const columns: ColumnDef<Income>[] = [
    {
      accessorKey: "description",
      header: "Descrição",
    },
    {
      accessorKey: "amount",
      header: "Valor",
    },
    {
      accessorKey: "date",
      header: "Data",
      cell: ({ row }) => {
        const date = new Date(row.original.date);
        return Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(date);
      },
    },
  ];

  const tabsContent = [
    {
      value: "recurring",
      label: "Recorrentes",
      icon: (
        <Repeat
          className="-ms-0.5 me-1.5 opacity-60"
          size={16}
          aria-hidden="true"
        />
      ),
      content: <DataTable columns={columns} data={recurringIncomeList} />,
    },
    {
      value: "one-time",
      label: "Pontuais",
      icon: (
        <CalendarCheck
          className="-ms-0.5 me-1.5 opacity-60"
          size={16}
          aria-hidden="true"
        />
      ),
      content: <DataTable columns={columns} data={oneTimeIncomeList} />,
    },
  ];

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl">Receitas</h2>
        <Button variant="outline">
          <Plus />
          Nova receita
        </Button>
      </div>

      <CustomTabs tabs={tabsContent} />
    </div>
  );
}
