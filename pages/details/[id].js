/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import MovieCard from "../../components/MovieCard";

const MovieDetails = ({ movies, movieVideo, movieSimilar }) => {
  return (
    <div className="bg-black">
      <div
        className="min-h-[100vh] w-full bg-center flex justify-center items-center relative"
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movies.backdrop_path}')`,
        }}
      >
        <div className=" bg-gradient-to-t from-transparent md:from-black absolute z-20 w-full h-full"></div>
        <div className="flex gap-5 z-40 text-white">
          <img
            className="max-h-[500px] hidden lg:block rounded-3xl"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`}
            alt=""
          />
          <div className="max-w-[500px]  max-h-[450px] px-2 flex flex-col justify-between">
            <h1 className="text-6xl font-semibold">{movies.original_title}</h1>
            <div className="flex gap-5 py-2">
              {movies.genres.map((genre) => (
                <div
                  className="border-2 font-semibold border-white rounded-full py-1 px-3 "
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <p>{movies.overview}</p>
            <h1 className="text-2xl font-semibold">Release date</h1>
            <p>{movies.release_date}</p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <iframe
          className="w-full md:w-10/12 mx-auto"
          width="auto"
          height="500"
          src={`https://www.youtube.com/embed/${movieVideo.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="text-white  w-10/12 py-5 mx-auto font-semibold text-xl">
          Similar Movies
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
          {movieSimilar.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieDetails;

export async function getServerSideProps(context) {
  //MOVIES DETAİLS
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/
      ${context.params.id}?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US`
  );
  //MOVIES VIDEO
  const resVideo = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}/videos?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US`
  );

  //MOVIES SIMILAR
  const resSimilar = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}/similar?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=1`
  );

  const movies = await res.json();
  const movieVideo = await resVideo.json();
  const movieSimilar = await resSimilar.json();

  return {
    props: { movies, movieVideo, movieSimilar },
  };
}
