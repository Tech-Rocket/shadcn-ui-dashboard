import PostTable from "@/components/posts/PostTables";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

export default function PostsPage() {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostsPagination />
    </>
  );
}
