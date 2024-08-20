"use client";
import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ButtonRecord } from "./ButtonRecord";
import { ButtonPlay } from "./ButtonPlay";

export const RecordAudio = ({ videoRef }) => {
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

  useEffect(() => {
    if (isRecording) {
      videoRef.current?.target?.pauseVideo();
    }
  }, [isRecording]);

  return (
    <>
      <div className="gap-4  flex flex-col justify-center items-center">
        <ButtonRecord {...{ startRecording, stopRecording, isRecording }} />
        <ButtonPlay
          {...{ startRecording, stopRecording, isRecording }}
          audioUrl={urlAudi}
          videoRef={videoRef}
        />
      </div>
    </>
  );
};
