import React, { useState } from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import WebDevAnimationData from "../Animations/webdevelopment.json";
import { VscChromeClose } from "react-icons/vsc";
import ContactButton from "../components/minicomponents/ContactButton";
import ScrollDownAnimationData from "../Animations/scrolldown.json";
import ContactUsAnimationData from "../Animations/contactus.json";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";
const Index = () => {
  const webDevAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: WebDevAnimationData,
  };
  const scrollDownAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ScrollDownAnimationData,
  };
  const contactUsAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactUsAnimationData,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>I Am Eziz</title>
        <meta
          name="google-site-verification"
          content="_7XyZx-FbC2VG29NayjjKLrQph_IRF4dYh1LuqvPi6E"
        />
        <meta
          name="description"
          content="Bura Eziz Imranzadenin Web Sehifesdir"
        />
        <meta name="keywords" content="Eziz Imranzade " />
        <meta
          property="og:title"
          content="Aziz Imranzade Full-Stack Developer Website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:url" content="https://www.colbyfayock.com" />
      </Head>
      <div className="index-section sm:px-20 p-4 overflow-hidden relative bg-themeBlack h-[calc(100vh-80px)] grid place-items-center sm:grid-cols-2 sm:grid-rows-1">
        <div className=" sm:block flex flex-col items-center gap-y-2">
          <div className="text-themeCyan font-bold sm:text-2xl sm:mb-4 mb-2 sm:mx-0 ">
            <Typewriter
              options={{
                strings: ["Front End Developer", "Pen Spinner", "NextJs Lover"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="sm:text-4xl text-white text-2xl  font-pacifico tracking-wider sm:mb-4 mb-2 ">
            Aziz Imranzade
          </div>
          <div className="text-gray-400 sm:text-lg mb-6 sm:text-left text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, aspernatur tempora excepturi, recusandae labore non
            provident animi quae dolor deleniti maxime quod at quia! Quae eaque
            pariatur corporis omnis saepe?
          </div>
          <ContactButton
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          >
            Contact With Me
          </ContactButton>
        </div>
        <div className="sm:w-[30rem]">
          <Lottie
            options={webDevAnimationOptions}
            isClickToPauseDisabled={true}
          />
        </div>
        <div className="absolute bottom-0 w-20">
          <Lottie
            options={scrollDownAnimationOptions}
            isClickToPauseDisabled={true}
          />
        </div>
        <div
          className={` ${
            isModalOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-full"
          } absolute p-24 transition-all bg-themeBlack/90 z-50 flex duration-500 items-center justify-center w-full h-[calc(100vh-4rem)]`}
        >
          <div className="flex items-center relative  w-full  rounded justify-between">
            <VscChromeClose
              onClick={() => setIsModalOpen(false)}
              className=" text-white -right-16 -top-14 text-3xl absolute cursor-pointer hover:text-themeCyan"
            />
            <div className=" w-1/2 ">
              <h1 className="text-white text-4xl font-semibold mb-6">
                Contact With Me
              </h1>
              <div className="w-full">
                <form
                  action="https://formsubmit.co/i.am.hacker.eziz@gmail.com"
                  method="POST"
                  className="flex flex-col gap-y-10 text-white"
                >
                  <input type="hidden" name="_template" value="box" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Your Name"
                    className=" outline-none valid:border-themeCyan bg-transparent border-2 rounded w-[30rem] h-12 text-center"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className=" outline-none valid:border-themeCyan bg-transparent border-2 rounded w-[30rem] h-12 text-center"
                  />
                  <textarea
                    type="text"
                    name="Message"
                    placeholder="Enter Your Message"
                    required
                    className=" outline-none resize-none valid:border-themeCyan bg-transparent border-2 rounded w-[30rem] h-52 break-all whitespace-pre-wrap p-4 flex flex-wrap"
                  />
                  <button
                    type="submit"
                    className="bg-transparent w-72 border-2 rounded h-12 border-themeCyan text-themeCyan font-semibold hover:bg-themeCyan hover:text-themeBlack transition-all tracking-wider text-lg"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="w-1/2 -translate-y-12">
              <Lottie
                options={contactUsAnimationOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen index-section justify-center bg-themeBlack flex sm:flex-row flex-col gap-x-32 items-center sm:px-20 px-4 ">
        <div className="flex flex-col items-center">
          <div className="border-themeCyan border-8 cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 border-double sm:mb-8 mb-4 rounded-full overflow-hidden  w-40 h-40 sm:w-60 sm:h-60 object-cover">
            <Image
              src="/avatar.png"
              width="400px"
              height="400px"
              alt="Aziz Imranzade Profile picture"
            />
          </div>
          <h1 className="text-gray-300 font-semibold sm:text-3xl mb-6 text-xl ">
            Social Media
          </h1>
          <ul className="flex sm:gap-x-10 gap-x-6 sm:mb-0 mb-6">
            <li>
              <a
                href="https://www.instagram.com/pintidevaziz/"
                className="text-themeCyan sm:text-3xl  text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram className="hover:scale-125 hover:text-[#46e8fa] transition-all" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PintiDevAziz"
                className="text-themeCyan sm:text-3xl  text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="hover:scale-125 hover:text-[#46e8fa] transition-all" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw"
                className="text-themeCyan sm:text-3xl  text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <FiYoutube className="hover:scale-125 hover:text-[#46e8fa] transition-all" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-gray-300 sm:text-lg">
          <h1 className="text-white font-pacifico sm:text-3xl sm:mb-14 mb-6 relative after:block after:w-[40%] after:absolute after:bg-themeCyan after:h-1 after:-bottom-2">
            Who Is I Am ?
          </h1>
          <div className="sm:w-[40rem]">
            <p className="mb-2">
              {" "}
              I am Eziz and I am Web Developer Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Officia sint magni sit minima,
              numquam tenetur atque veniam impedit totam magnam? Tenetur in iure
              ipsum
            </p>
            <p>
              placeat quidem laboriosam doloribus ipsam totam. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Praesentium
              architecto fugit, totam culpa similique aspernatur iure?
              Distinctio sit mollitia libero, asperiores modi tenetur non
              excepturi quo animi ducimus nobis blanditiis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
