import { client } from "~/lib/gql-client";
import { ComponentHeroBanner } from "~/components/features/contentful/hero-banner/hero-banner";

interface HeroBannerProps {
  id: string;
}

export const HeroBanner = async ({ id }: HeroBannerProps) => {
  const { componentHeroBanner } = await client.heroBanner({ id });

  if (!componentHeroBanner) {
    return null;
  }

  return <ComponentHeroBanner {...componentHeroBanner} />;
};
