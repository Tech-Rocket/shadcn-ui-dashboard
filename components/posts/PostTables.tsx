import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/post";
import { PostType } from "@/types/postType";

interface PostTableProps {
  limit?: number;
  title?: string;
}

export default function PostTable(props: PostTableProps) {
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
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
