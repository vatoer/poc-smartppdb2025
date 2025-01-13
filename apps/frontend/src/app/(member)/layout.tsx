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
      <header>
        <SessionProvider>
          <Navbar />
        </SessionProvider>
      </header>
      <main className="pt-[48px] h-min-[calc(100vh-48px)] justify-center items-center w-full">
        {children}
      </main>
      <footer>{/* Footer content goes here */}</footer>
    </section>
  );
}
