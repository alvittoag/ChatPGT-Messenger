import { ClientProvidet, Login, SideBar } from "@/components";
import { SessionProvider } from "@/components/SessionProvider";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import "./globals.css";
import Image from "next/image";
import Mobile from "@/components/Mobile";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <div className="flex flex-col justify-center items-center h-screen md:hidden bg-white">
                <Mobile />
              </div>
              <div className="hidden md:flex">
                <div className="bg-[#202123] max-w-xs h-screen md:overflow-y-auto md:min-w-[15rem] lg:min-w-[20rem]">
                  <SideBar />
                </div>

                <ClientProvidet />

                <div className="bg-[#343541] h-screen flex-1">{children}</div>
              </div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
