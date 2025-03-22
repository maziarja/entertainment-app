function PlayIcon() {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-around gap-4 rounded-full bg-black/25 px-3 py-2 opacity-0 duration-150 group-hover/movie:scale-70 group-hover/movie:opacity-100">
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
          fill="#FFF"
        />
      </svg>
      <span className="text-heading-xs">Play</span>
    </div>
  );
}

export default PlayIcon;
