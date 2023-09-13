"use client";

import { useEffect } from "react";

//has error, and reset as options
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className=" p-5">
      <h2 className=" text-4xl mb-5">Something went wrong!</h2>
      <button
        className=" bg-slate-100 hover:bg-slate-600 hover:text-white text-black font-bold py-2 px-4 border border-slate-400 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
