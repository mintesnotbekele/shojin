// components/layout/Header.tsx
import Logo from "@/components/ui/Logo";
import MenuButton from "@/components/ui/MenuButton";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className=" bg-[#D6DDD5] flex items-center justify-between px-6 py-4 text-black shadow-md">
      <div className="flex items-center gap-4">
        <MenuButton />
        <GiHamburgerMenu size={50} />
        <Logo />
      </div>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#search">Search</a>
        <a href="#login">Log In</a>
        <a href="#shop">Shop</a>
      </nav>
    </header>
  );
}
