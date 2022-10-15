/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import BannerSlide from "../components/BannerSlide";

export default function Home({ movies }) {
  return (
    <div className="bg-black">
      <BannerSlide />
      <br />
      <br />
      <h1 className="text-white  w-10/12 py-5 mx-auto font-semibold text-xl">
        Trending Movies
      </h1>
      <Swiper
        modules={[Autoplay]}
        className="text-black popular-slide w-10/12"
        spaceBetween={10}
        slidesPerView="auto"
        grabCursor={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {movies.results.slice(0, 14).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <h1 className="text-white  w-10/12 py-5 mx-auto font-semibold text-xl">
        Top Rated
      </h1>
      <Swiper
        modules={[Autoplay]}
        className="text-black popular-slide w-10/12"
        spaceBetween={10}
        slidesPerView="auto"
        grabCursor={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {movies.results.slice(2, 18).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <h1 className="text-white  w-10/12 py-5 mx-auto font-semibold text-xl">
        Top Search
      </h1>
      <Swiper
        modules={[Autoplay]}
        className="text-black popular-slide w-10/12"
        spaceBetween={10}
        slidesPerView="auto"
        grabCursor={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {movies.results.slice(4, 20).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex py-5">
        <Link className="border" href="/movies">
          <div className="mx-auto text-white  border border-red-700 bg-red-700 py-2 cursor-pointer px-4 rounded-full">
            View More
          </div>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=1`
  );
  const movies = await res.json();

  return {
    props: { movies },
  };
}
