import HeroHeader from "@/components/navigations/hero-header";
import { Navbar } from "@/components/navigations/navbar-fixed";
import { SessionProvider } from "next-auth/react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col w-full pb-[48px]">
        <div id="formulir" className="w-full h-full border p-4 ">
          <h1 className="text-2xl font-bold">Profile Peserta Didik</h1>
        </div>
        <div className="flex flex-row items-start justify-start mt-2 w-full p-4 ">
          <div className="hidden sm:block sm:w-1/4 md:w-1/5">
            profile nafbar
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
