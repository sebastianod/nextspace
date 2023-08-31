//export const dynamic = "force-static"; //makes explicit the page doesn't fetch

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "This is a static About page with some metadata!",
};

export default function StaticAbout() {
  return (
    <div className="flex flex-col p-5 items-center">
      <h1 className=" mb-5 text-2xl">About</h1>
      <p>This is a static About page with some metadata!</p>
    </div>
  );
}
