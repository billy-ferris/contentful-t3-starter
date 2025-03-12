import { type HeRdTestFieldsFragment } from "~/lib/__generated/sdk";

export const TestComponent = async ({ testField }: HeRdTestFieldsFragment) => {
  return <p>{testField}</p>;
};
