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
          <h1 className="md:text-lg">Profile Peserta Didik</h1>
        </div>
        <div className="flex flex-row mt-2 w-full p-4 ">
          <div className="hidden sm:block sm:w-1/3 md:w-1/3">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="data-diri">Data Diri</a>
              </li>
              <li>
                <a href="data-orang-tua">Data Orang Tua</a>
              </li>
              <li>
                <a href="data-sekolah-asal">Data Sekolah Asal</a>
              </li>
              <li>
                <a href="#data-pendaftaran">Data Pendaftaran</a>
              </li>
            </ul>
          </div>
          <div className="flex w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
