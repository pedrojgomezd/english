"use client";

import { CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";

export const ButtonRecord = ({
  isRecording = false,
  startRecording,
  stopRecording,
}) => {
  return (
    <button
      className={`rounded-full text-white p-4 ${
        isRecording ? "bg-gray-500" : "bg-red-600"
      }`}
      onClick={isRecording ? stopRecording : startRecording}
    >
      {isRecording ? (
        <CiMicrophoneOff size={48} />
      ) : (
        <CiMicrophoneOn size={48} />
      )}
    </button>
  );
};
