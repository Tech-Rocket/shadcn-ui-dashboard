import Image from "next/image";
import Link from "next/link";
import logo from '../img'

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <Button variant="outline" size="lg" className="rounded-sm">Click me</Button>
    </>
  );
}
