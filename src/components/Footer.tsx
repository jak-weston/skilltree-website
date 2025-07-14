import { HomeCopy as copy } from "@/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] w-full rounded-t-lg">
      <div className="container mx-auto px-4 md:px-4 flex flex-col items-center justify-center py-6 bg-secondary">
        <Link href="Privacy Policy" className="hover:underline text-primary">
          Privacy Policy
        </Link>

        {copy.footer.copyright}
      </div>
    </footer>
  );
}
