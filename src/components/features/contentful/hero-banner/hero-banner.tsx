import { type HeroBannerFieldsFragment } from "~/lib/__generated/sdk";

export const ComponentHeroBanner = async ({
  headline,
}: HeroBannerFieldsFragment) => {
  return (
    <>
      <h1>{headline}</h1>
    </>
  );
};
