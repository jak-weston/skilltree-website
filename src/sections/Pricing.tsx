import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";

export default function Pricing() {
  const { header, plans, cta, note } = copy.pricing;

  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center justify-center spacing-section"
    >
      <span className="chip">Pricing</span>
      <h2>{header}</h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mt-6">
        <div className="border p-4 rounded w-full">
          <h3 className="text-lg font-semibold">Free</h3>
          <ul className="mt-2 list-disc list-inside">
            {plans.free.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="border p-4 rounded w-full">
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="mt-1">{plans.pro.monthly}</p>
          <p className="mb-2">{plans.pro.yearly}</p>
          <ul className="mt-2 list-disc list-inside">
            {plans.pro.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <Button className="mt-3">{cta}</Button>
      <p className="mt-2 text-sm">{note}</p>
    </section>
  );
}
