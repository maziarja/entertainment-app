"use client";

import { redirect } from "next/navigation";

function Error({ error, reset }) {
  return (
    <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-6">
      <p className="text-2xl">{error.message}</p>
      <button
        className="bg-greyishBlue inline-block cursor-pointer rounded-[8px] px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
