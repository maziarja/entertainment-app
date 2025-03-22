"use client";
import { createContext, useContext, useState } from "react";

const QueryContext = createContext();

function QueryProvider({ children }) {
  const [query, setQuery] = useState("");
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}

function useQuery() {
  const context = useContext(QueryContext);
  if (context === undefined)
    throw new Error("context was used outside the provider");
  return context;
}

export { QueryProvider, useQuery };
