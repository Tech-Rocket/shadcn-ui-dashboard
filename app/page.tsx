import DashboardCard from "@/components/dashboard/DashboardCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 md-5 md:flex-row">
        <DashboardCard />
      </div>
    </>
  );
}
