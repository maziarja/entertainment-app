"use client";

import { QueryProvider } from "../context/QueryContext";
import Home from "./Home";
import SearchQuery from "./SearchQuery";
import { useMovies } from "../context/MoviesContext";

function HomePage() {
  const { movies } = useMovies();
  return (
    <div>
      <QueryProvider>
        <div className="ml-4">
          <SearchQuery>Search for movies or TV series</SearchQuery>
        </div>
        <Home movies={movies} />
      </QueryProvider>
    </div>
  );
}

export default HomePage;
