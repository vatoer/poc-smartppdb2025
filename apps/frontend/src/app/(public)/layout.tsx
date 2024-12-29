import { Navbar } from "@/components/navigations/navbar";
import NavbarMenuMobile from "@/components/navigations/navbar-menu-mobile";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>{/* Footer content goes here */}</footer>
    </section>
  );
}
