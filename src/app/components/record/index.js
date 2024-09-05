"use client";
import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ButtonRecord } from "./ButtonRecord";

<<<<<<< HEAD
export const RecordAudio = ({ videoRef }) => {
  const [urlAudi, setUrlAudio] = useState();
=======
export const RecordAudio = () => {
  const [urlAudi, setUrlAudio] = useState([]);
>>>>>>> parent of c19b744 (Audi play)

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

  useEffect(() => {
    if (isRecording) {
      videoRef.current?.target?.pauseVideo();
    }
  }, [isRecording]);

  return (
    <>
<<<<<<< HEAD
      <div className="gap-4  flex flex-col justify-center items-center">
        <ButtonRecord {...{ startRecording, stopRecording, isRecording }} />
        <ButtonPlay
          {...{ startRecording, stopRecording, isRecording }}
          audioUrl={urlAudi}
          videoRef={videoRef}
        />
      </div>
=======
      {urlAudi.map((urlA) => {
        return <audio controls src={urlA} key={urlA} />;
      })}

      <ButtonRecord {...{ startRecording, stopRecording, isRecording }} />
>>>>>>> parent of c19b744 (Audi play)
    </>
  );
};
