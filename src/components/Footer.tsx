import { HomeCopy as copy } from "@/content";
import Link from "next/link";
import navItems from "@/content/nav/nav";
import SkLogo from "./SkLogo";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] w-full rounded-t-lg">
      <div className="container mx-auto px-4 md:px-4 flex flex-col items-center justify-center py-6 bg-secondary rounded-t-xl border border-border border-b-0">
        <SkLogo fill="#eee" className="h-8 w-auto mb-6" />
        <div className="flex flex-wrap gap-4 mb-2">
          {navItems.map((item) =>
            !item.children ? (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline text-primary/90"
              >
                {item.label}
              </Link>
            ) : (
              item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="hover:underline text-primary"
                >
                  {child.label}
                </Link>
              ))
            )
          )}
        </div>
        <div className="mt-2 text-sm text-primary/60">
          {copy.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
