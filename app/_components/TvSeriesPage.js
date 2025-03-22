"use client";
import Movie from "./Movie";
import { useQuery } from "../context/QueryContext";
import SearchQuery from "./SearchQuery";
import { useMovies } from "../context/MoviesContext";

function TvSeriesPage() {
  const { query } = useQuery();
  const { movies: allMovies } = useMovies();
  const movies = allMovies.filter((movie) => movie.category === "TV Series");
  const filterMovies = movies.filter((d) => {
    return d.title.toLowerCase()?.includes(query.toLowerCase());
  });

  return (
    <div>
      <SearchQuery>Search for TV series</SearchQuery>
      {!query && (
        <p className="mb-4 text-xl font-[300] tracking-[-.31px]">TV Series</p>
      )}
      <div className="grid grid-cols-2 gap-[15px] pb-15 md:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:gap-[40px]">
        {filterMovies.map((movie) => (
          <Movie movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default TvSeriesPage;
