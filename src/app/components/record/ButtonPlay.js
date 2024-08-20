"use client";

import { useEffect, useRef, useState } from "react";
import {
  CiPlay1,
  CiStop1,
} from "react-icons/ci";

export const ButtonPlay = ({ isRecording = false, audioUrl }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <>
      <audio controls src={audioUrl} className="hidden" ref={audioRef} />
      <button
        className={`rounded-full text-white text-center flex justify-center w-14 h-14 items-center ${
          isPlaying ? "bg-gray-500" : "bg-blue-600"
        }`}
        onClick={() => setIsPlaying((prev) => !prev)}
      >
        {isPlaying ? <CiStop1 size={24} /> : <CiPlay1 size={24} />}
      </button>
    </>
  );
};
