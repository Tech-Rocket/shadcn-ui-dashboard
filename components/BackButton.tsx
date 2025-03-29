import { Button } from "./ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

export default function BackButton(props: BackButtonProps) {
  return (
    <Link
      href={props.link}
      className="transition-all duration-150 text-sm text-gray-500 hover:underline flex items-center gap-1.5 font-bold mb-5"
    >
      <ArrowLeftCircle size={25} /> {props.text}
    </Link>
  );
}
