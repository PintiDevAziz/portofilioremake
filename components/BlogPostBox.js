import React from "react";
import Link from "next/link";
import imgUrl from '../components/imgBuilder'
const BlogPostBox = ({ post }) => {

  return (
    <div className="bg-themeGray group h-[22rem] overflow-hidden relative rounded w-80 border-t-8 p-4 border-t-themeCyan2 border-2 border-themeCyan">
      <div className="absolute inset-0 w-full h-full bg-themeGray/95 backdrop-blur-sm transition-all group-hover:translate-y-0 translate-y-full">
        <div className="relative w-full h-full flex flex-col items-center gap-y-10 justify-center">
          <div className="text-themeCyan font-pacifico absolute bottom-2 right-2 bg-themeBlack text-lg w-auto px-4 py-2 rounded">
            {post?.publishedAt.slice(0, 10)}
          </div>
          <div className="text-themeCyan w-10 h-10 font-pacifico overflow-hidden absolute bottom-2 border-2 border-themeCyan left-3 bg-themeBlack text-lg rounded-full">
            <img
              src={imgUrl(post.authorImage)}
              alt={post.authorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center font-semibold text-themeCyan text-lg">
            <div className="mr-2 font-pacifico text-2xl text-white font-normal">
              Posted By
            </div>{" "}
            {post.authorName || "unknown writter"}
          </div>
          <h1 className="text-white font-semibold text-2xl subpixel-antialiased">
            {post.title || "unknown title"}
          </h1>
          <div className=" rounded bg-themeBlack transition-all hover:text-themeCyan text-themeCyan2 text-lg">
            <Link href={`/blog/${post.slug.current}`}>
              <a className="w-full h-full px-6 py-2 flex">View Full Post</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-44  mb-4 object-contain overflow-hidden rounded">
        <img
          src={post.mainImage?.asset.url || "/blog/noimage.png"}
          alt="avatar"
          className=" object-cover w-full h-full"
        />
      </div>
      <h1 className="text-white font-semibold text-lg subpixel-antialiased mb-3">
        {post.title || 'Bu postun Basliqi Yoxdur'} 
      </h1>
      <div className=" break-words text-gray-200 overflow-hidden h-[4.8rem]">
        {post.excerpt || 'Bu Postun Qisa aciqlamasi Yoxdur'}
      </div>
    </div>
  );
};

export default BlogPostBox;
