import { getWebContent } from "@/lib/data";
import Hero from "@/components/landing/Hero";
import BentoGrid from "@/components/landing/BentoGrid";

export default async function Home() {
  const data = await getWebContent();

  return (
    <div className="flex flex-col gap-0">
      <Hero
        title={data.site_meta.title}
        description={data.site_meta.description}
      />
      <BentoGrid brands={data.brands} />
    </div>
  );
}
