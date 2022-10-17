import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const Search = ({ defaultMovies }) => {
  const [showMovie, setShowMovie] = useState([]);

  const searchValue = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setShowMovie(data.results));
  };

  return (
    <div className="bg-black pt-[80px]">
      <div className="flex ">
        <input
          id="search"
          className="w-11/12 h-[40px] mx-auto outline-none px-2"
          type="text"
          onChange={searchValue}
          placeholder="Search movie"
        />
      </div>
      <div className="grid grid-cols-2 w-11/12 mx-auto sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 mt-5">
        {showMovie &&
          showMovie.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {showMovie == undefined || showMovie.length == 0
          ? defaultMovies.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US&page=1&include_adult=false&query=spider`
  );
  const defaultMovies = await res.json();

  return {
    props: { defaultMovies },
  };
}
