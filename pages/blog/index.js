import React from "react";
import Link from "next/link";
import BlogPostBox from "../../components/BlogPostBox";
const Blog = ({ posts }) => {
  return (
    <div className="min-h-[calc(100vh-80px)] h-auto bg-themeBlack p-24 flex flex-wrap gap-10">
      {posts.map((post, key) => (
        <BlogPostBox {...post} key={key} />
      ))}
    </div>
  );
};
import { getAllNodes } from "next-mdx/server";

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}
export default Blog;
