'use client';

import Link from "next/link";
import { LuDownload, LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

export default function Home() {
  const handleDownload = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-200 via-gray-200 to-blue-200 flex flex-col justify-center items-center gap-10 p-5">
      <div className="flex flex-col gap-5 justify-end items-end">
        <label className="text-rose-600 font-bold text-8xl">
          Reel<span className="text-gray-900">rapter</span>{" "}
        </label>
        <label className="text-gray-500 text-sm">
          Download. Keep. Watch offline.
        </label>
      </div>
      <form
        className="flex flex-row bg-zinc-300 w-1/2 rounded-full justify-between p-2 gap-2"
        onSubmit={handleDownload}
      >
        <input
          className="w-full border-none focus:outline-none text-black"
          type="url"
          placeholder="Enter TikTok / YouTube / Facebook video link..." required
        />
        <button
          className="bg-rose-600 p-2 rounded-full flex flex-row justify-center items-center gap-2 font-bold"
          type="submit"
        >
          <LuDownload /> downalod
        </button>
      </form>
      <div className="bg-red-600/50 rounded-full w-1/2 flex flex-row justify-between items-center gap-2 fixed bottom-5">
        <Link href="/" className="flex flex-row gap-2 justify-center items-center text-gray-900 text-sm bg-zinc-300 p-5 rounded-full w-1/4"><LuHouse/> Home</Link>
        <Link href="/terms" className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out "><LuScale/> Terms</Link>
        <Link href="/how-to-use" className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"><MdQuiz/> How to use</Link>
        <Link href="/privacy-policy" className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"><LuShieldCheck/> Privacy policy</Link>
      </div>
    </div>
  );
}
