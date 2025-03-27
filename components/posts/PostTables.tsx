import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/post";
import { PostType } from "@/types/postType";
import { Button } from "../ui/button";

interface PostTableProps {
  limit?: number;
  title?: string;
}

export default function PostTable(props: PostTableProps) {
  //sort post in dec order based on the date
  const sortedPosts: PostType[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filter post to limit
  const filteredPosts = props.limit
    ? sortedPosts.slice(0, props.limit)
    : sortedPosts;

  return (
    <div className="mt-8">
      <h3 className="text-2xl mb-4 font-semibold">
        {props.title ? props.title : "Posts"}
      </h3>

      <Table>
        {/* <TableCaption>A list of recent post</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <Button className="bg-blue-500 hover:bg-blue-700 cursor-pointer py-2.5 px-6 rounded text-sm">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
