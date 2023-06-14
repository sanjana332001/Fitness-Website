import { Component, useState } from "react";
import "./welcome.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./cart";
import Onecart from "../onecart";
import Footer from "./footer";
function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="isolate bg-white">
        <div className="relative h-[80vh]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
          >
            <source src="video.webm" type="video/mp4" />
          </video>
          <div className="mx-auto max-w-xl pt-10 pb-10 sm:pt-15 lg:pt-10 md:p-20 h-auto relative z-10">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h3 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                Welcome
              </h3>
              <h1 className="font-medium tracking-tight text-white font-sans text-8xl mt-4">
                NIRVANA <br /> LIVELINESS
              </h1>
              <h6 className="text-4xl font-light tracking-tight text-white sm:text-4xl mt-8">
                Retreats . Adventure . Spa
              </h6>
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  our story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <article className="rounded-xl p-0.5 shadow-xl border border-inherit hover:shadow-sm mx-auto sm:w-3/4 lg:w-2/3 pb-12 mt-14 ">
          <div className="rounded-[10px] bg-white p-4 pt-8 sm:p-6">
            <a href="#" className="block">
              <p className="mt-0.5 text-4xl font-bold text-gray-900 text-center sm:text-left">
                A sanctuary of escape <br /> to help people reset themselves
              </p>
            </a>
            <p className="mt-10 text-center sm:text-left">
              A luxury yoga, fitness & wellbeing holiday, focusing on your
              health in Mind, Body and Skin. Remember to take care of yourself,
              you cannot pour from an empty cup. Harmonize your body, mind &
              soul with yoga. Take yoga beyond the Mat Training. Do your
              practice and peace will come.
            </p>
          </div>
        </article>
      </div>
      <div className="text-center my-28">
        <h3 className="text-4xl font-bold">Retreats Coming</h3>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center mx-32 gap-8">
        <Cart
          img={"i-15.jpg"}
          title={"YOGA & FITNESS"}
          decription={
            "Always control what goes inside. Just balance your mind and body with Yoga. Create the healthy living for yourself."
          }
        />
        <Cart
          img={"i-13.jpg"}
          title={"HARBAL MEDICINE"}
          decription={
            "The practice of naturopathic medicine includes modern, traditional, scientific, and empirical methods. Come for a healthy life."
          }
        />
        <Cart
          img={"i-14.jpg"}
          title={"GUIRID SURFING TRIP"}
          decription={
            "Free your inner adventure with guided surfing trip. Enjoy the thrill, take the challange and refresh your mind in the sea."
          }
        />
      </div>
      <div className="bg-white sm:px-6 md:px-7 lg:px-8 mt-10">
        <div
          className="relative px-6 sm:px-8 lg:px-10 h-[80vh] bg-cover"
          style={{ backgroundImage: "url('ii.webp ')" }}
        >
          <div className="pt-10 pb-10 sm:pt-10 lg:pt-10 flex flex-col justify-end sm:flex-row">
            <div className="w-full sm:w-2/3 sm:mb-8">
              <div>
                <h1 className="font-medium tracking-tight text-white text-4xl md:text-6xl mt-4 sm:mt-0">
                  Spa & Bath
                </h1>
                <h6 className="text-lg md:text-2xl font-medium tracking-tight text-white mt-8">
                  We offer the ideal atmosphere for relaxation and personal
                  care. A real treat for the body and mind that will help you
                  balance the effects of work and stress.
                </h6>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Our Story
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/3 sm:mr-8"></div>
          </div>
        </div>
      </div>

      <div className="">
        <Onecart
          img={"rest-img.jpg"}
          title={"Rest & Relax"}
          decription={
            "Every now and then go away, have a little relaxation, for when you come back to your work your judgment will be surer. Go some distance away because then the work appears smaller and more of it can be taken in at a glance and a lack of harmony and proportion is more readily seen"
          }
        />
      </div>
      <div className="bg-white">
        <div
          className="relative px-6 sm:px-8 md:px-10 h-[80vh] bg-cover"
          style={{ backgroundImage: "url('nature.jpeg ')" }}
        >
          <div className="pt-10 pb-10 sm:pt-12 md:pt-16 lg:pt-20 flex flex-col sm:flex-row items-center justify-center">
            <div className="w-full sm:mb-0 sm:mr-16">
              <div className="text-center sm:text-left">
                <h1 className="font-medium tracking-tight text-white text-4xl sm:text-6xl lg:text-7xl mt-4">
                  Explore Nature
                </h1>
                <h6 className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-white mt-8">
                  When all the world appears to be in a tumult, and nature
                  itself is feeling the assault of climate change, the seasons
                  retain their essential rhythm.
                </h6>
              </div>
              <div className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <Onecart
          img={"food-img.jpg"}
          title={"Organic Cuisine"}
          decription={
            "Nature has always cared for us. So why not taking that care? Come to Nirvana and taste our organic cuisine today. Organic foods may have higher nutritional value than conventional food that help building your good health."
          }
        />
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-bold">Testimonials</h3>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <article className="rounded-xl p-0.5 shadow-xl border border-inherit hover:shadow-sm mx-auto sm:w-3/4 lg:w-2/3 pb-12 mt-14 ">
          <div className="rounded-[10px] bg-white p-4 pt-8 sm:p-6">
            <a href="#" className="block">
              <p className="mt-0.5 text-4xl font-bold text-gray-900 text-center sm:text-left">
                A sanctuary of escape <br /> to help people reset themselves
              </p>
            </a>
            <p className="mt-10 text-center sm:text-left">
              A luxury yoga, fitness & wellbeing holiday, focusing on your
              health in Mind, Body and Skin. Remember to take care of yourself,
              you cannot pour from an empty cup. Harmonize your body, mind &
              soul with yoga. Take yoga beyond the Mat Training. Do your
              practice and peace will come.
            </p>
          </div>
        </article>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
export default Welcome;
