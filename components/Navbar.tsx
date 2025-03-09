import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="bg-primary dark:bg-slate-700 py-4 px-6 flex justify-between text-white">
      <Link href="/">
        <Image src={logo} alt="logo" className="h-10 w-10" />
      </Link>

      <Avatar className="cursor-pointer text-slate-800 font-semibold">
        <AvatarImage src="https://github.com/shadcn.pn" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
