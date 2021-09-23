import React from "react";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdx-component";
const PostPage = ({ post }) => {
  const content = useHydrate(post, {
    components: mdxComponents,
  });
  console.log(content);

  return (
    <div className="h-auto  min-h-[calc(100vh-80px)] bg-themeBlack">
      <h1 className="font-pacifico text-3xl text-center  py-6 tracking-wider text-white">{post.frontMatter.title}</h1>
      <div className=" px-24 text-white text-lg font-roboto">{content}</div>
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
