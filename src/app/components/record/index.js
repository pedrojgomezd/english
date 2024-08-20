"use client";
import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ButtonRecord } from "./ButtonRecord";
import { ButtonPlay } from "./ButtonPlay";

export const RecordAudio = () => {
  const [urlAudi, setUrlAudio] = useState();

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();

  useEffect(() => {
    if (recordingBlob) {
      const url = URL.createObjectURL(recordingBlob);
      setUrlAudio(url);
    }
  }, [recordingBlob]);

  return (
    <>
      <div className="gap-4  flex flex-col justify-center items-center">
        <ButtonRecord {...{ startRecording, stopRecording, isRecording }} />
        <ButtonPlay
          {...{ startRecording, stopRecording, isRecording }}
          audioUrl={urlAudi}
        />
      </div>
    </>
  );
};
