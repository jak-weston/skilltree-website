import { HomeCopy as copy } from "@/content";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] w-full rounded-t-lg">
      <div className="container mx-auto px-4 md:px-4 flex items-center justify-center py-6 bg-secondary">
        {copy.footer.copyright}
      </div>
    </footer>
  );
}
