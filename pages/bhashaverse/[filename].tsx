import { Bhasha } from "../../components/bhashaverse/bhasha";
import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../../components/layout";

// Use the props returned by get static props
export default function BhashaversePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  if (data && data.bhashaverse) {
    // console.log(data);
    return (
      <Layout rawData={data} data={data.global as any}>
        <Bhasha {...data.bhashaverse} />;
      </Layout>
    );
  }
  return (
    <Layout>
      <div>No data</div>;
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.BhashaverseQuery({
    relativePath: `${params.filename}.mdx`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const bhashaverseListData = await client.bhashaverseConnection();
  return {
    paths: bhashaverseListData.data.bhashaverseConnection.edges.map(
      (bhashaverse) => ({
        params: { filename: bhashaverse.node._sys.filename },
      })
    ),
    fallback: "blocking",
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
