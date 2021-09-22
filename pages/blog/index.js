import React from "react";
import Link from "next/link";
const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post, key) => (
        <Link key={key} href={post.url}>
          <a>{post.frontMatter.title}</a>
        </Link>
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
