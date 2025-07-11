import { policy } from "@/content/privacy/policy";
import Markdown from "react-markdown";

export default function PrivacyPolicy() {
  return (
    <div className="w-full h-full">
      <div className="w-full container mt-36 mx-auto">
        <div className="prose prose-invert prose-lg max-w-3xl mx-auto my prose-headings:font-sans prose-headings:font-semibold prose-headings:text-primary">
          <Markdown>{policy}</Markdown>
        </div>
      </div>
    </div>
  );
}
