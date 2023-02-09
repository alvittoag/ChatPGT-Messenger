"use client";

import { NewChat } from "@/components";
import { useSession, signOut } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* New Chat */}
        <NewChat />
        <div>{/* ModelSelection */}</div>

        {/* Map */}
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile pict"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
