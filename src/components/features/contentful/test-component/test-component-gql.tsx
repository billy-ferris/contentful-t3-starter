import { client } from "~/lib/gql-client";
import { TestComponent } from "~/components/features/contentful/test-component/test-component";

interface HeroBannerProps extends React.ComponentProps<"div"> {
  id: string;
}

export const TestComponentGql: React.FC<HeroBannerProps> = async ({ id }) => {
  const { heRdTestTestingToBeDeleted } = await client.heRdTest({ id });

  if (!heRdTestTestingToBeDeleted) {
    return null;
  }

  return <TestComponent {...heRdTestTestingToBeDeleted} />;
};
