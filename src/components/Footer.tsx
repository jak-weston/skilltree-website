import { HomeCopy as copy } from "@/content";
import Link from "next/link";
import navItems from "@/content/nav/nav";
import SkLogo from "./SkLogo";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] w-full rounded-t-lg">
      <div className="container mx-auto px-4 md:px-4 flex flex-col items-center justify-center py-6 glass-nav rounded-t-xl">
        <div className="flex items-center gap-3 mb-6">
          <SkLogo fill="#ffffff" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white">Rep AI</span>
        </div>
        <div className="flex flex-wrap gap-4 mb-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-300 transition-colors text-white/90"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-2 text-sm text-white/60">
          {copy.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
