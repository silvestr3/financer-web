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

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl">Receitas</h2>
        <Button variant="outline">
          <Plus />
          Nova receita
        </Button>
      </div>

      <Tabs defaultValue="tab-1">
        <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1">
          <TabsTrigger
            value="tab-1"
            className="border-none cursor-pointer hover:bg-accent dark:data-[state=active]:border-none dark:data-[state=active]:bg-transparent bg-transparent hover:text-foreground data-[state=active]:after:bg-primary relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5"
          >
            <Repeat
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Recorrentes
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="border-none cursor-pointer hover:bg-accent dark:data-[state=active]:border-none dark:data-[state=active]:bg-transparent bg-transparent hover:text-foreground data-[state=active]:after:bg-primary relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5"
          >
            <CalendarCheck
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Pontuais
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <DataTable columns={columns} data={recurringIncomeList} />
        </TabsContent>
        <TabsContent value="tab-2">
          <DataTable columns={columns} data={oneTimeIncomeList} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
