"use client";
import { createContext, useContext, useEffect, useState } from "react";
import data from "@/data.json";
const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataPersist = localStorage.getItem("movies");
    if (dataPersist) {
      setMovies(JSON.parse(dataPersist));
    } else {
      localStorage.setItem("movies", JSON.stringify(data));
      setMovies(data);
    }
  }, []);

  function toggleBookmark(title) {
    setMovies((movies) => {
      const updatedMovies = movies.map((movie) => {
        if (movie.title === title) {
          return {
            ...movie,
            isBookmarked: !movie.isBookmarked,
          };
        }
        return movie;
      });
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  }
  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        toggleBookmark,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined)
    throw new Error("moviesContext was used outside the moviesProvider");
  return context;
}

export { MoviesProvider, useMovies };
