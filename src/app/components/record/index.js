"use client";
import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ButtonRecord } from "./ButtonRecord";

export const RecordAudio = () => {
  const [urlAudi, setUrlAudio] = useState([]);

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
      setUrlAudio(old => ([
        ...old,
        url
      ]));
    }
  }, [recordingBlob]);

  return (
    <>
      {urlAudi.map((urlA) => {
        return <audio controls src={urlA} key={urlA} />;
      })}

      <ButtonRecord {...{ startRecording, stopRecording, isRecording }} />
    </>
  );
};
