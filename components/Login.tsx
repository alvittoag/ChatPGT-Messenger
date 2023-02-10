"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

const Login = () => {
  return (
    <div className="bg-[#11A47F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatPGT
      </button>
      <div className="flex flex-col justify-center items-center mt-52 md:mt-36 text-gray-200 gap-3">
        <a href="https://www.instagram.com/alvittoag/">
          <div className=" flex items-center gap-1">
            <AiOutlineInstagram size={23} />
            <p className=" font-semibold ">alvitoag</p>
          </div>
        </a>

        <a href="https://github.com/alvittoag/ChatPGT-Messenger">
          <div className=" flex items-center gap-1 ring-2 ring-gray-300 px-3 py-2 rounded-lg ">
            <AiFillGithub size={23} />
            <p>This Repositories</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Login;
