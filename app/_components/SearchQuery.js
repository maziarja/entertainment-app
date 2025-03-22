"use client";
import searchIcon from "@/public/icon-search.svg";
import Image from "next/image";
import { useQuery } from "../context/QueryContext";

function SearchQuery({ children }) {
  const { query, setQuery } = useQuery();
  function handleQuery(e) {
    setQuery(e.target.value);
  }
  return (
    <form className="ml-auto flex items-start gap-4 py-6">
      <Image className="w-6" src={searchIcon} alt="icon-search" />
      <input
        value={query.slice(0, 100)}
        onChange={(e) => handleQuery(e)}
        className="caret-red border-b-greyishBlue w-[70%] cursor-pointer pb-[14px] text-[16px] outline-0 focus:border-b-1"
        type="text"
        placeholder={children}
      />
    </form>
  );
}

export default SearchQuery;
