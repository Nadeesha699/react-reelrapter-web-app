"use client";

import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";
import {
  BackButton,
  PageLoadingScreen,
  PageTitile,
} from "../components/UiComponents";
import { formatDuration, setSafeFileName } from "../utils/Utils";

const Download = () => {
  const [videoUrl, setVideUrl] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
    const setValue = () => {
      setVideUrl(sessionStorage.getItem("videoUrl"));
      setThumbnail(sessionStorage.getItem("thumbnail"));
      setTitle(sessionStorage.getItem("title"));
      const duration = sessionStorage.getItem("duration");
      setDuration(formatDuration(Number(duration)));
    };
    setValue();
  }, []);

  const handleDirectDownload = async () => {
    if (!videoUrl) return toast.error("No video found.");

    const backendUrl = `http://localhost:5000/api/direct_download?url=${encodeURIComponent(
      videoUrl
    )}&title=${encodeURIComponent(title || "video")}`;

    const a = document.createElement("a");
    a.href = backendUrl;
    a.download = `${setSafeFileName(title) || "video"}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-300 via-gray-300 to-blue-300 flex flex-col justify-center items-center gap-10 p-5">
      {pageLoading ? (
        <PageLoadingScreen />
      ) : (
        <>
          <BackButton />
          <PageTitile />
          <div className="w-full lg:w-1/3 h-auto bg-white/50 rounded-lg text-gray-900 flex flex-col justify-end items-end gap-2 p-5 relative">
            {thumbnail && (
              <img
                src={thumbnail}
                alt={title || "image"}
                className="w-full h-64 object-cover"
              />
            )}
            <label className="w-full truncate">{title}</label>
            <label className="bg-rose-600 text-white font-bold w-fit p-2 rounded-lg text-sm absolute top-10 left-10">
              {duration}
            </label>
            <button
              onClick={() => {
                handleDirectDownload();
              }}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-600 p-2 rounded-lg text-white font-bold flex flex-row gap-2 justify-center items-center"
            >
              <LuDownload />
              download as hd
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Download;
