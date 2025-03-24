"use client";
import { createContext, useContext, useEffect, useState } from "react";

import data from "@/data.json";
const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [movies, setMovies] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  async function getSession() {
    const res = await fetch("api/auth/session");
    const session = await res.json();
    setUserId(session?.user?.email || null);
  }

  useEffect(
    function () {
      getSession();
    },
    [refreshKey],
  );

  useEffect(() => {
    if (userId) {
      const key = `bookmarks_${userId}`;
      const dataPersist = localStorage.getItem(key);
      if (dataPersist) {
        setMovies(JSON.parse(dataPersist));
      } else {
        if (key) {
          localStorage.setItem(key, JSON.stringify(data));
          setMovies(data);
        }
      }
    }
  }, [userId]);

  function toggleBookmark(title) {
    const key = `bookmarks_${userId}`;
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
      if (userId) localStorage.setItem(key, JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  }

  function refreshSession() {
    setRefreshKey((k) => k + 1);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        toggleBookmark,
        refreshSession,
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
