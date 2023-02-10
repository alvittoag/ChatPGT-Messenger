"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

const Mobile = () => {
  return (
    <>
      <Image
        src="https://spaceset.org/wp-content/uploads/2020/09/construction-concept-illustration.jpg"
        width={300}
        height={300}
        alt="page"
      />
      <div className="text-center">
        <h1 className="text-2xl max-w-xs  font-bold text-slate-700">
          Page For Mobile is Under Construction
        </h1>
        <p className="text-slate-500 mt-3">
          * page available in desktop/pc version
        </p>
      </div>
      <button
        onClick={() => signOut()}
        className="bg-green-500 px-8 py-3 font-bold text-white rounded-lg mt-20 text-lg"
      >
        Sign Out
      </button>
    </>
  );
};

export default Mobile;
