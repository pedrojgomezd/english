"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { Spinner } from "flowbite-react";

export const PlayToSpech = ({ phrase_id }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef();
  const [loading, setLoading] = useState(true);

  const handleGenerateAudio = async () => {
    setLoading(true);
    try {
      const response = await fetch("/tospech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phrase_id }),
      });

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGenerateAudio();
  }, [phrase_id]);

  return (
    <div className="flex justify-end">
      {loading ? (
        <Spinner />
      ) : (
        <audio src={audioUrl} controls ref={audioRef} />
      )}
    </div>
  );
};
