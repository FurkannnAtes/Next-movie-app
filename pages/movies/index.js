import React from "react";
import MovieCard from "../../components/MovieCard";

const AllMovies = ({ movies, movies2, movies3 }) => {
  return (
    <div className="bg-black text-white pt-[80px]">
      <h1 className="text-center text-4xl font-semibold py-5">ALL MOVIES</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 px-5">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {movies2.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {movies3.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=1`
  );
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=2`
  );
  const res3 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=3`
  );
  const movies = await res.json();
  const movies2 = await res2.json();
  const movies3 = await res3.json();

  return {
    props: { movies, movies2, movies3 },
  };
}
