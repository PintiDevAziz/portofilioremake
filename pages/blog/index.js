import React, { useEffect, useState } from "react";
import sanityClient from "../../scleint";
import BlogPostBox from "../../components/BlogPostBox";
import Loading from "../../Animations/loading";
const Index = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
      body,
      title,
      excerpt,
      publishedAt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      _id,
      slug,
      "authorName":author->name,
      "authorImage":author->image
    }`
      )
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="h-[calc(100vh-5rem)] bg-themeBlack sm:px-20 px-10 pt-10 flex gap-6">
      {posts.length > 0 ? (
        <>
          {posts.map((post, key) => (
            <BlogPostBox post={post} key={key} />
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-[30rem] h-[30rem]">
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
