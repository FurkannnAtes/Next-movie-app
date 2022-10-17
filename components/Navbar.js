import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollNav();
    };
  }, []);
  function scrollNav() {
    const mainNavbar = document.querySelector("#mainNav");
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      mainNavbar.classList.add("lg:bg-black");
      mainNavbar.classList.remove("lg:bg-transparent");
    } else {
      mainNavbar.classList.add("lg:bg-transparent");
      mainNavbar.classList.remove("lg:bg-black");
    }
  }
  return (
    <div
      id="mainNav"
      className="flex bg-black justify-between items-center px-2 md:px-16 text-xl h-[80px]  fixed w-full lg:bg-transparent text-white z-50"
    >
      <div>
        <Link href="/">
          <a>Ofenos</a>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movies">
          <a>Movies</a>
        </Link>
        <Link href="/search">
          <a>
            <i className="bi bi-search"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
