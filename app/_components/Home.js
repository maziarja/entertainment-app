import Trending from "./Trending";
import Movie from "./Movie";
import { useQuery } from "../context/QueryContext";
import { useRef, useState } from "react";
function Home({ movies }) {
  const { query } = useQuery();

  const filterMovies = movies.filter((d) => {
    return d.title.toLowerCase()?.includes(query.toLowerCase());
  });

  return (
    <>
      <div>
        {!query ? (
          <>
            <h2 className="mb-4 ml-4 text-xl font-[300] tracking-[-.31px]">
              Trending
            </h2>
            <div className="scrollbar ml-4 flex snap-x snap-mandatory gap-4 overflow-x-auto">
              {movies.map(
                (movie) =>
                  movie.isTrending && (
                    <Trending key={movie.title} movie={movie} />
                  ),
              )}
            </div>
          </>
        ) : (
          <p className="mb-6 ml-4 text-xl font-[300] tracking-[-.31px]">
            Found {filterMovies.length} results for &apos;{query}&apos;
          </p>
        )}
        {!query && (
          <h2 className="my-6 ml-4 text-[20px] font-[300] tracking-[-.31px]">
            Recommended for you
          </h2>
        )}
        <div className="mx-4 grid grid-cols-2 gap-[15px] pb-15 md:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:gap-[40px]">
          {filterMovies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
