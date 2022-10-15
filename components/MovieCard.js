/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/details/${movie.id}`}>
      <div className="group cursor-pointer">
        <div className="relative ">
          <img
            className="rounded-2xl"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            alt=""
          />
          <img
            className="w-[50px] group-hover:opacity-100 opacity-0 duration-300 absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4"
            src="/youtube-icon.png"
            alt=""
          />
        </div>
        <h1 className="text-white font-semibold duration-300 py-2 group-hover:text-red-700">
          {movie.original_title}
        </h1>
      </div>
    </Link>
  );
};

export default MovieCard;
