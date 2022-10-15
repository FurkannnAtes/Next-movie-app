import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-[url('/footer-.bg.jpg')] bg-center relative py-10">
      <div className="w-full h-full absolute left-0 top-0 bg-zinc-900 opacity-90 z-20"></div>
      <div className="text-white text-center relative z-40 text-4xl font-semibold ">
        {" "}
        Ofenos
      </div>
      <div className="flex flex-col md:flex-row justify-center  gap-16  text-white relative z-40 ">
        <div className="flex flex-col gap-5 text-center md:text-start text-xl font-semibold">
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Home</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Contact us</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Term of services</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> About us</a>
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-center md:text-start text-xl font-semibold">
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Live</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> FAQ</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Premium</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Privacy policy</a>
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-center md:text-start text-xl font-semibold">
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> You must watch</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Recent release</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-700 duration-300"> Top IMDB</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
