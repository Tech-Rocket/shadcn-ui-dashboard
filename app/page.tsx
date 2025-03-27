import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";
import PostTable from "@/components/posts/PostTables";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 md-5 md:flex-row">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper size={35} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder size={35} />}
        />
        <DashboardCard
          title="Users"
          count={2000000}
          icon={<Users size={35} />}
        />
        <DashboardCard
          title="Comments"
          count={120000}
          icon={<MessageCircle size={35} />}
        />
      </div>

      <PostTable title="Latest Posts" />
    </>
  );
}
