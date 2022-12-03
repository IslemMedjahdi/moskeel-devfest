import Image from "next/image";
import React from "react";
import { IMAGES } from "../constants/images";
import { BsFillLightningFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex text-gray-900 justify-center">
      <div>
        <header className="py-4 px-8 flex items-center justify-between shadow flex-wrap gap-2">
          <Image
            src={IMAGES.LOGO_CIRCLE}
            alt="logo"
            height={200}
            width={200}
            className="h-12 w-12 cursor-pointer"
          />
          <nav>
            <ul className="flex gap-x-8">
              <li className="font-medium cursor-pointer hover:underline underline-offset-2">
                Home
              </li>
              <li className="font-medium text-center cursor-pointer hover:underline underline-offset-2">
                <a href="#about">About us</a>
              </li>
              <li className="font-medium cursor-pointer hover:underline underline-offset-2">
                Services
              </li>
              <li className="font-medium cursor-pointer hover:underline underline-offset-2">
                Pricing
              </li>
            </ul>
          </nav>
          <button className="px-10 py-2 hidden md:flex bg-primary text-white font-medium rounded-xl text-sm active:scale-95 transition">
            Discover more
          </button>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 mt-10">
          <div className="flex justify-center gap-4 flex-col p-10">
            <h1 className="text-primary font-semibold md:text-start text-center text-6xl">
              MOSKEEL
            </h1>
            <p className="font-medium md:text-start text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-800 md:text-start text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="px-14 flex  mt-6 py-3 w-fit bg-primary text-white font-medium rounded-xl text-sm active:scale-95 transition">
                Discover more
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src={"/background.png"}
              alt="background"
              width={1500}
              height={600}
              className="w-5/6"
            />
          </div>
        </main>
        <section
          id="about"
          className="flex flex-col items-center mt-12 gap-2 py-4 px-8"
        >
          <p className="font-semibold text-3xl">About Us</p>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-center max-w-screen-sm mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem.
          </p>
        </section>
        <section
          id="services"
          className="flex flex-col items-center gap-2 mt-12 py-4 px-8"
        >
          <p className="font-semibold text-3xl">Our services</p>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "lorem ipsum",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              },
              {
                title: "lorem ipsum",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              },
              {
                title: "lorem ipsum",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              },
            ].map(({ title, description }, index) => (
              <div
                key={index}
                className="flex flex-col items-center  gap-2 text-center px-8 py-8 border rounded"
              >
                <BsFillLightningFill className="text-primary text-3xl" />
                <p className="font-bold">{title}</p>
                <p className="text-sm mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 text-center py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Our Pricing
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              <span className="text-center">Ready to get started?</span>
            </h2>
            <p className="text-base text-center text-gray-700 md:text-lg">
              Choose a plan that is good htmlFor you
            </p>
          </div>
          <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold">Start</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">20$</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">10 deploys per day</div>
                  <div className="text-gray-700">10 GB of storage</div>
                  <div className="text-gray-700">20 domains</div>
                </div>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Buy Start
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-primary">
              <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-primary">
                  Most Popular
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Pro</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">$38</div>
                  <div className="text-gray-700">/ mo</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">200 deploys per day</div>
                  <div className="text-gray-700">80 GB of storage</div>
                  <div className="text-gray-700">Global CDN</div>
                </div>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary focus:shadow-outline focus:outline-none"
                >
                  Buy Pro
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold">Business</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">$78</div>
                  <div className="text-gray-700">/ mo</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">500 GB of storage</div>
                  <div className="text-gray-700">Unlimited domains</div>
                  <div className="text-gray-700">24/7 Support</div>
                </div>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Buy Business
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-primary leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none  rounded">
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <a
                  href="/"
                  aria-label="Go home"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <Image
                    src={IMAGES.LOGO_CIRCLE}
                    alt="logo"
                    height={200}
                    width={200}
                    className="h-12 w-12 cursor-pointer"
                  />
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    Moskeel
                  </span>
                </a>
                <div className="mt-6 lg:max-w-sm">
                  <p className="text-sm text-gray-800">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <p className="mt-4 text-sm text-gray-800">
                    Eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide text-gray-900">
                  Contacts
                </p>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Phone:</p>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-primary hover:text-primary"
                  >
                    850-123-5021
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Email:</p>
                  <a
                    href="mailto:info@lorem.mail"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-primary hover:text-primary"
                  >
                    info@lorem.mail
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Address:</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="transition-colors duration-300 text-primary hover:text-primary"
                  >
                    312 Lovely Street, NY
                  </a>
                </div>
              </div>
              <div>
                <span className="text-base font-bold tracking-wide text-gray-900">
                  Social
                </span>
                <div className="flex items-center mt-1 space-x-3">
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Bacon ipsum dolor amet short ribs pig sausage prosciutto
                  chicken spare ribs salami.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
              <p className="text-sm text-gray-600">
                © Copyright 2020 Lorem Inc. All rights reserved.
              </p>
              <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary"
                  >
                    F.A.Q
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
