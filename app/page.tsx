"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LuClipboard, LuDownload } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import { LoadingUI, NavBar, PageLoadingScreen, PageTitile } from "./components/UiComponents";
import { getDownloadUrl } from "./api/DownloadApi";

export default function Home() {
  const [urlText, setUrlText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const handleDownload = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await getDownloadUrl({ urlText });
      if (data.status === "success" && data.formats?.length > 0) {
        const best =
          data.formats.find((f: any) => f.ext === "mp4") || data.formats[0];

        sessionStorage.setItem("videoUrl", best.url);
        sessionStorage.setItem("thumbnail", data.thumbnail);
        sessionStorage.setItem("title", data.title);
        sessionStorage.setItem("duration", data.duration);

        window.location.href = "/download";
      } else {
        toast.error("No downloadable formats found.");
      }
    } catch (error) {
      toast.error("Server connection issue. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPaste = async () => {
    const copyText = await navigator.clipboard.readText();
    setUrlText(copyText);
  };

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
  });

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-300 via-gray-300 to-blue-300 flex flex-col justify-center gap-5 items-center p-5">
      {pageLoading ? (
       <PageLoadingScreen/>
      ) : (
        <>
          <PageTitile />
          <form
            className="flex flex-row bg-white w-full md:w-1/2 rounded-full justify-between items-center p-2 gap-2"
            onSubmit={handleDownload}
          >
            <LuClipboard
              className="text-rose-600"
              size={20}
              onClick={handleCopyPaste}
            />
            <input
              className="w-full border-none focus:outline-none text-black text-ellipsis"
              type="url"
              value={urlText}
              onChange={(e) => {
                setUrlText(e.target.value);
              }}
              placeholder="Paste a TikTok, YouTube, or Facebook video link here..."
              required
            />
            <button
              className="bg-gradient-to-r from-rose-900 to-rose-600 p-2 rounded-full flex flex-row justify-center items-center gap-2 font-bold"
              type="submit"
            >
              {loading ? (
                <>
                  <LoadingUI /> downloading
                </>
              ) : (
                <>
                  <LuDownload /> downalod
                </>
              )}
            </button>
          </form>
          <NavBar
            textcolor01="text-gray-900"
            textcolor02="text-white"
            textcolor03="text-white"
            textcolor04="text-white"
            bgcolor01="bg-zinc-200"
            bgcolor02="bg-transparent"
            bgcolor03="bg-transparent"
            bgcolor04="bg-transparent"
          />
          <ToastContainer />
        </>
      )}
    </div>
  );
}
