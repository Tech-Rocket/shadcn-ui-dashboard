import Image from "next/image";
import Link from "next/link";
import logo from '../img/logo.jpg'

export default function Navbar() {
  return (
   <header className="bg-primary dark:bg-slate-700 py-4 px-6 flex justify-between text-white">
    <Link href="/">
        <Image src={logo} alt='logo' className="h-10 w-10" />
    </Link>
   </header>
  )
}
