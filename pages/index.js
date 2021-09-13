import React, { useState } from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import WebDevAnimationData from "../Animations/webdevelopment.json";
import Link from "next/link";
import ContactButton from "../components/minicomponents/ContactButton";
import ScrollDownAnimationData from "../Animations/scrolldown.json";
import ContactUsAnimationData from "../Animations/contactus.json";
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
      <div className=" px-20 overflow-hidden relative bg-themeBlack h-[calc(100vh-80px)] grid place-items-center grid-cols-2 grid-rows-1">
        <div>
          <div className="text-themeCyan font-bold text-2xl mb-4">
            <Typewriter
              options={{
                strings: ["Front End Developer", "Pen Spinner", "NextJs Lover"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="text-4xl text-white  font-pacifico tracking-wider mb-4">
            Aziz Imranzade
          </div>
          <div className="text-gray-400 text-lg mb-6">
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
        <div className="w-[30rem]">
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
          } absolute py-24 px-32 transition-all bg-themeBlack/90 z-50 flex duration-500 items-center justify-center w-full h-[calc(100vh-4rem)]`}
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex items-center  w-full rounded justify-between"
          >
            <div className=" w-1/2">
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
            <div className="w-1/2">
              <Lottie
                options={contactUsAnimationOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div>sa</div>
    </div>
  );
};

export default Index;
