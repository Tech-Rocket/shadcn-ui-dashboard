import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <Command className="bg-secondary border border-gray-300 shadow-md rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="border-2 border-black">
            <LayoutDashboard className="mr-1.5" />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-1.5" />
            <Link href="/posts">Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="mr-1.5" />
            <Link href="#">Category</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-1.5" />
            <span>Profile</span>
            <CommandShortcut>ctrl P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-1.5" />
            <span>Billing</span>
            <CommandShortcut>ctrl B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-1.5" />
            <span>Settings</span>
            <CommandShortcut>ctrl S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
