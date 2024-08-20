"use client";

import { useRef, useState } from "react";
import { RecordAudio } from "../components/record";
import YouTube from "react-youtube";

export default function Detail() {
  const [url, setUrl] = useState("wqILKzVFJTY");
  const videoRef = useRef();
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full p-2 bg-slate-400">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Youtube Link"
          onChange={(t) => setUrl(t.target.value)}
        />
      </div>

      <YouTube
        className="w-full aspect-video pb-4"
        videoId={url}
        iframeClassName="w-full aspect-video"
        onReady={(event) => videoRef.current = event}
        opts={{
          width: "100%"
        }}
      />
      <RecordAudio videoRef={videoRef} />

    </main>
  );
}
