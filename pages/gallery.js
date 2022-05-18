import React, { useEffect, useState } from "react";
import Head from "next/head";
import sanityClient from "../scleint";
import Loading from "../Animations/loading";
import imgUrl from "../components/imgBuilder";
const Gallery = () => {
  const [galeryImages, setGaleryImages] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="galery"]{
        publishedAt,
        image_title,
        image
      }`
      )
      .then((data) => setGaleryImages(data));
  }, []);
  console.log(galeryImages);
  return (
    <div className="min-h-[calc(100vh-5rem)]  bg-themeBlack [column-fill:_balance] sm:px-20 sm:py-12 py-4 px-6">
       <Head>
        <title>
          Gallery
        </title>
        <meta
          property="og:title"
          content={`PintiDevAziz's Gallery`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://pintidevaziz.vercel.app/gallery`}
        />
      </Head>
      {galeryImages.length > 0 ? (
        <>
          {galeryImages.length == 0 ? (
            "There is not any photos"
          ) : (
            <div className=" masonry sm:masonry-sm md:masonry-md space-y-4">
              {galeryImages.map((img, key) => (
                <div
                  key={key}
                  className=" break-inside-avoid relative line-clamp-2 rounded group"
                >
                  <img
                    src={imgUrl(img.image) || ""}
                    alt={img.image_title}
                    className=" object-cover "
                  />
                  <span className="absolute translate-y-full group-hover:translate-y-0 transition-all  text-2xl font-semibold flex items-center justify-center capitalize bg-black/80 text-white h-full w-full top-0 left-0 z-[99]">
                    {img.image_title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className=" w-full h-[calc(100vh-7rem)] flex items-center justify-center ">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Gallery;
