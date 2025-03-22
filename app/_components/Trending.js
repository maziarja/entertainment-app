import Bookmark from "./Bookmark";
import PlayIcon from "./PlayIcon";
import TrendingDetails from "./TrendingDetails";

function Trending({ movie }) {
  return (
    <div
      className="group/movie relative grid h-40 w-60 flex-shrink-0 cursor-pointer snap-start grid-cols-5 grid-rows-5 items-center rounded-[8px] bg-cover bg-center bg-no-repeat md:h-45 md:w-80 lg:h-50 lg:w-100"
      style={{
        backgroundImage: `url(${movie.thumbnail.trending.small})`,
      }}
    >
      <div className="col-start-5 mt-2">
        <Bookmark movie={movie} />
      </div>
      <PlayIcon />
      <div className="col-span-full col-start-1 row-span-2 row-start-4 mb-2 self-end rounded-b-[8px] bg-linear-to-b from-black/0 to-black/75 pt-3 pb-5 pl-4 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <TrendingDetails movie={movie} />
      </div>
    </div>
  );
}

export default Trending;
