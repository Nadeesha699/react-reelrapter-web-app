"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";

const Download = () => {
  const [videoUrl, setVideUrl] = useState<string | null>(null);
  const [urlTxt, setUrlTxt] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setValue = () => {
      setVideUrl(sessionStorage.getItem("videoUrl"));
      setThumbnail(sessionStorage.getItem("thumbnail"));
      setTitle(sessionStorage.getItem("title"));
      const duration = sessionStorage.getItem("duration");
      setDuration(formatDuration(Number(duration)));
      setUrlTxt(sessionStorage.getItem("urlTxt"));
    };
    setValue();
  }, []);

  const handleDirectDownload = async () => {
  if (!videoUrl) return toast.error("No video found.");

  const backendUrl = `http://localhost:5000/api/direct_download?url=${encodeURIComponent(videoUrl)}&title=${encodeURIComponent(title || "video")}`;

  const a = document.createElement("a");
  a.href = backendUrl;
  a.download = `${setSafeFileName(title) || "video"}.mp4`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


  const formatDuration = (seconds: number | null): string => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    if (h > 0) {
      return [
        h,
        m.toString().padStart(2, "0"),
        s.toString().padStart(2, "0"),
      ].join(":");
    }
    return [m.toString().padStart(2, "0"), s.toString().padStart(2, "0")].join(
      ":"
    );
  };

  const setSafeFileName = (title: any) => {
    const safeFilename = (title || "video")
      .replace(/[^\p{L}\p{N}\s_-]/gu, "") // remove emojis, hashtags, etc.
      .trim()
      .replace(/\s+/g, "_");
    return safeFilename;
  };

  return (
    <div className="w-full h-1/2 bg-gradient-to-tr from-rose-300 via-gray-300 to-blue-300 flex flex-col justify-center items-center gap-10 p-5">
      <Link href="/">
        <LuArrowLeft size={30} className="fixed left-10 top-10 text-black" />
      </Link>
      <div className="w-full lg:w-1/2 bg-white/50 rounded-lg text-gray-900 flex flex-col justify-end items-end gap-2 p-5 relative">
        {thumbnail && (
          <img src={thumbnail} alt={title || "image"} className="rounded-lg w-full h-auto" />
        )}
        <label className="w-full truncate">{title}</label>
        <label className="bg-rose-600 text-white font-bold w-fit p-2 rounded-lg text-sm absolute top-10 left-10">
          {duration}
        </label>
        <button
          onClick={() => {
            handleDirectDownload();
          }}
          className="bg-green-700 p-2 rounded-full text-white font-bold"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Download;
