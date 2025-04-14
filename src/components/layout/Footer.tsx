// components/layout/Footer.tsx
import Image from "next/image";
import logo from "@/assets/icons/shojin-logo2.png"
import jinium from "@/assets/icons/jinium.png"
export default function Footer() {
  return (
    <footer className="bg-[#D6DDD5] text-[#D9D9D9] px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Logo Section */}
        <div className="flex flex-col gap-2 items-start">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 relative">
              <Image src={logo} alt="Shojin Logo" fill />
            </div>
            <div className="w-28 h-6 relative">
              <Image src={jinium} alt="Jinnium Logo" fill />
            </div>
          </div>
          <p className="text-xs mt-3">© Jinnium 2025<br />All rights reserved</p>
        </div>

        {/* Info Links */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm">INFO</span>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Support</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm">SOCIALS</span>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Reddit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
