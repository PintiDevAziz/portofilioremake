import React from "react";
import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import { mdxComponents } from "../../components/mdx-component";
const PostPage = ({ post }) => {
  const content = useHydrate(post, {
    components: mdxComponents,
  });
  console.log(content);

  return (
    <div className="prose">
      <h1>{post.frontMatter.title}</h1>
      <div>{content}</div>
    </div>
  );
};
export default PostPage;
export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
