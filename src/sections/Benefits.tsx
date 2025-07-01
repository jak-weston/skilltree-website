import { HomeCopy as copy } from "@/content";

export default function Benefits() {
  return (
    <section id="benefits" className="spacing-section">
      <h2>{copy.benefits.header}</h2>
      <div className="flex flex-row gap-2">
        {copy.benefits.taglines.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

      <ul className="flex-col gap-2">
        {copy.benefits.items.map((content) => (
          <li key={content}>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
