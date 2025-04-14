// components/ui/Logo.tsx
import Image from "next/image";
import logo from "@/assets/icons/shojin-logo.png" 

export default function Logo() {
  return (
    <div className="w-10 h-10 relative">
      <Image src={logo} alt="Shojin Logo" fill />
    </div>
  );
}