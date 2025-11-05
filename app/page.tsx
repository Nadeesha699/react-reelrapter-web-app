"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { LuDownload, LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

export default function Home() {
  const [urlText, setUrlText] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const handleDownload = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://127.0.0.1:5000/api/download`, {
        url: urlText,
      })
      .then((e) => {
        const data = e.data;

        if (data.status === "success" && data.formats?.length > 0) {
          const best =
            data.formats.find((f: any) => f.ext === "mp4") || data.formats[0];
          const videoUrl = best.url;

          const a = document.createElement("a");
          a.href = videoUrl;
          a.target = "_blank";
          a.download = `${data.title || "video"}.${best.ext}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          alert("No downloadable formats found.");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-200 via-gray-200 to-blue-200 flex flex-col justify-center items-center gap-10 p-5">
      <div className="flex flex-col gap-5 justify-end items-end">
        <label className="text-rose-600 font-bold text-6xl lg:text-8xl">
          Reel<span className="text-gray-900">rapter</span>{" "}
        </label>
        <label className="text-gray-500 text-sm">
          Download. Keep. Watch offline.
        </label>
      </div>
      <form
        className="flex flex-row bg-zinc-300 w-full lg:w-1/2 rounded-full justify-between p-2 gap-2"
        onSubmit={handleDownload}
      >
        <input
          className="w-full border-none focus:outline-none text-black text-ellipsis"
          type="url"
          value={urlText}
          onChange={(e) => {
            setUrlText(e.target.value);
          }}
          placeholder="Enter TikTok / YouTube / Facebook video link..."
          required
        />
        <button
          className="bg-rose-600 p-2 rounded-full flex flex-row justify-center items-center gap-2 font-bold"
          type="submit"
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>{" "}
              downloading
            </>
          ) : (
            <>
              <LuDownload /> downalod
            </>
          )}
        </button>
      </form>
      {videoData && videoData.status === "success" && (
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 w-full lg:w-1/2 flex flex-col gap-5 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <img
              src={videoData.thumbnail}
              alt="thumbnail"
              className="w-48 rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg">{videoData.title}</h2>
              <p className="text-sm text-gray-700">
                By {videoData.uploader || "Unknown"}
              </p>
              <p className="text-sm text-gray-700">
                Duration: {videoData.duration}s
              </p>
              <p className="text-sm text-gray-700">
                Views: {videoData.view_count || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-gray-800">Available formats:</h3>
            {videoData.formats
              ?.filter((f: any) => f.ext === "mp4")
              .map((f: any) => (
                <button
                  key={f.format_id}
                  onClick={() => handleDownload(f)}
                  className="bg-rose-600 hover:bg-rose-700 transition text-white rounded-full px-4 py-2 text-sm font-semibold"
                >
                  Download {f.format_note || f.ext.toUpperCase()} (
                  {Math.round((f.filesize || 0) / 1024 / 1024)} MB)
                </button>
              ))}
          </div>
        </div>
      )}
      <div className="bg-red-600/50 rounded-full lg:w-1/2 flex flex-row justify-between items-center fixed bottom-5">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center items-center text-gray-900 text-sm bg-zinc-300 p-5 rounded-full w-1/4"
        >
          <LuHouse /> Home
        </Link>
        <Link
          href="/terms"
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-2 lg:p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out "
        >
          <LuScale /> Terms
        </Link>
        <Link
          href="/how-to-use"
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-2 lg:p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <MdQuiz /> How to use
        </Link>
        <Link
          href="/privacy-policy"
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-2 lg:p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <LuShieldCheck /> Privacy policy
        </Link>
      </div>
    </div>
  );
}
