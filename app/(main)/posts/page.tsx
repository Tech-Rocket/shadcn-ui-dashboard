import PostTable from "@/components/posts/PostTables";
import BackButton from "@/components/BackButton";

export default function PostsPage() {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
    </>
  );
}
