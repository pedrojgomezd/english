"use client"

import { useState } from "react";
import { RecordAudio } from "../components/record";

export default function Detail() {
  const [url, setUrl] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full p-2 bg-slate-400">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Youtube Link" onChange={t => setUrl(t.target.value)} />
      </div>
      <iframe
        className="w-full aspect-video pb-4"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <hr />
      <RecordAudio />
    </main>
  );
}
