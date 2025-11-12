"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

export const LoadingUI = () => {
  return (
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
    </svg>
  );
};

interface NavBarProps {
  textcolor01: string;
  textcolor02: string;
  textcolor03: string;
  textcolor04: string;
  bgcolor01: string;
  bgcolor02: string;
  bgcolor03: string;
  bgcolor04: string;
}

export const NavBar: React.FC<NavBarProps> = ({
  textcolor01,
  textcolor02,
  textcolor03,
  textcolor04,
  bgcolor01,
  bgcolor02,
  bgcolor03,
  bgcolor04,
}) => {
  return (
    <div className="bg-red-600/50 rounded-full md:w-1/2 w-3/4 flex flex-row justify-between items-center fixed bottom-5">
      <Link
        href="/"
        className={`flex flex-row gap-2 justify-center items-center ${textcolor01} text-sm ${bgcolor01} p-3 rounded-full w-1/4 hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out`}
      >
        <LuHouse /> <label className="truncate hidden sm:block">Home</label>
      </Link>
      <Link
        href="/terms"
        className={`flex flex-row gap-2 justify-center items-center ${textcolor02} text-sm ${bgcolor02} w-1/4 p-3 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out `}
      >
        <LuScale /> <label className="truncate hidden sm:block">Terms</label>
      </Link>
      <Link
        href="/how-to-use"
        className={`flex flex-row gap-2 justify-center items-center ${textcolor03} text-sm ${bgcolor03} w-1/4 p-3  rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out`}
      >
        <MdQuiz />{" "}
        <label className="truncate hidden sm:block">How to use</label>
      </Link>
      <Link
        href="/privacy-policy"
        className={`flex flex-row gap-2 justify-center items-center ${textcolor04} text-sm ${bgcolor04} w-1/4 p-3 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out`}
      >
        <LuShieldCheck />{" "}
        <label className="truncate hidden sm:block">Privacy policy</label>
      </Link>
    </div>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <LuArrowLeft size={30} className="fixed left-10 top-10 text-black" />
    </button>
  );
};
