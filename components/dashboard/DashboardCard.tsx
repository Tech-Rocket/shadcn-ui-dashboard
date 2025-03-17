import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

export default function DashboardCard(props: DashboardCardProps) {
  return (
    <>
      <Card className="bg-slate-100 dark:bg-slate-800 p-5 rounded-sm">
        <CardContent>
          <h3 className="text-2xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
            {props.title}
          </h3>

          <div className="text-slate-500 flex gap-5 justify-center items-center">
            {props.icon}
            <h3 className="text-3xl font-semibold dark:text-slate-200">
              {props.count}
            </h3>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
