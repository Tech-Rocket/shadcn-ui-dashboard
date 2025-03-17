import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function DashboardCard() {
  return (
    <>
      <Card className="bg-slate-100 dark:bg-slate-800 p-5 rounded-sm">
        <CardContent>
          <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
            Posts
          </h3>

          <div className="text-slate-500 flex gap-5 justify-center items-center">
            <Newspaper size={59} />
            <h3 className="text-5xl font-semibold dark:text-slate-200">100</h3>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
