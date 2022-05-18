import React, { useEffect, useState } from "react";
import Head from "next/head";
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
       <Head>
        <title>PintiBlog</title>
        <meta
          name="google-site-verification"
          content="bMk_eZ5tdYPCsR7m8Jvs5_eYmecvxclpwXLolYK1f2U"
        />
        <meta name="description" content="PintiDevAziz Official Blog" />
        <meta
          name="keywords"
          content="PintiDev, PintiDevAziz ,Aziz Imranzade ,Aziz Imranzade Developer,Aziz,Kodlama Blog, Pintidevaziz blog"
        />
        <meta property="og:title" content="PintiDevAziz Official Web Page" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/blogging.png" />
        <meta property="og:url" content="https://pintidevaziz.vercel.app/blog" />
      </Head>
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
