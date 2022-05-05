import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import sanityClient from "../../scleint";
import imgUrl from "../../components/imgBuilder";
import Moment from "react-moment";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import Pre from "../../components/Pre";
import Loading from "../../Animations/loading";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
const Slug = () => {
  const router = useRouter();
  const [singlePost, setSinglePost] = useState();
  const socialMediaItems = [
    {
      icon: <AiOutlineGithub />,
      link: "https://github.com/PintiDevAziz",
    },
    {
      icon: <AiOutlineInstagram />,
      link: "https://www.instagram.com/pintidevaziz/",
    },
    {
      icon: <AiOutlineYoutube />,
      link: "https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw",
    },
  ];
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${router.asPath.slice(6)}"]{
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
      .then((data) => setSinglePost(data[0]));
  }, [router.asPath]);
  console.log(singlePost);
  const serializers = {
    types: {
      code: (props) => <Pre lang={props.node.language}>{props.node.code}</Pre>,
    },
  };
  const blockRef = useRef(null);
  useEffect(() => {
    if (singlePost) {
      blockRef.current.querySelectorAll("a").forEach((item) => {
        item.setAttribute("target", "_blank");
      });
    }
  }, [singlePost]);
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-themeBlack sm:px-28 px-6  pt-10 flex flex-col  snap-none">
      {singlePost ? (
        <>
          <div className="border-b-2 px-8 border-themeGray pb-2 mb-4 flex items-center gap-x-4 justify-between  flex-col sm:gap-y-0 gap-y-6 sm:flex-row">
            <div className="flex gap-x-3 items-center ">
              <img
                src={imgUrl(singlePost.authorImage)}
                alt={singlePost.authorName}
                className="rounded-full w-14 h-14 border-themeCyan2 object-cover  flex-shrink-0 "
              />
              <div className="text-white">
                <div>{singlePost.authorName}</div>
                <Moment format="DD MMMM HH:mm">{singlePost.publishedAt}</Moment>
              </div>
            </div>
            <h1 className="text-3xl font-pacifico italic capitalize text-white tracking-wider mx-auto underline underline-offset-4 decoration-themeCyan">
              {singlePost.title}
            </h1>
            <div className="flex gap-x-4">
              {socialMediaItems &&
                socialMediaItems.map((mediaItem, key) => (
                  <Link href={mediaItem.link} key={key}>
                    <a
                      target={"_blank"}
                      className="text-themeCyan2 text-[1.7rem] transition-all hover:text-themeCyan"
                    >
                      {" "}
                      {mediaItem.icon}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
          <div
            ref={blockRef}
            className=" prose-lg overflow-hidden  hover:overflow-auto  prose-blockquote:border-l-4 prose-blockquote:rounded-sm prose-blockquote:border-themeCyan text-white/80 prose-a:text-themeCyan prose-li:list-disc  w-full"
          >
            <BlockContent
              serializers={serializers}
              blocks={singlePost && singlePost.body}
              projectId="9m6pnn5g"
              dataset="production"
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh] w-full">
          <div className="w-[30rem] h-[30rem]">
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slug;
