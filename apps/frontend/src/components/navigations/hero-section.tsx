import { Button } from "@workspace/ui/components/button";
import { User } from "next-auth";
import Link from "next/link";

interface HeroSectionProps {
  user?: User;
}

const HeroSection = ({ user }: HeroSectionProps) => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-900 to-red-900 h-[267px] "
      // style={{ backgroundImage: "url('/banner-small.png')" }}
    >
      <img
        src="/banner-small.png"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover" // Image placed on top of the gradient
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-green-100 bg-opacity-10"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white gap-2">
        <h1 className="md:text-3xl font-bold drop-shadow-lg bg-white text-gray-900 p-4 rounded-md">
          Penerimaan Peserta Didik Baru
        </h1>

        <h1 className="md:text-lg font-bold drop-shadow-lg bg-white text-gray-900 p-2 rounded-md">
          Tahun Pelajaran 2025 / 2026
        </h1>
        <CallToAction user={user} />
      </div>
    </div>
  );
};

interface CallToActionProps {
  user?: User;
}

const CallToAction = ({ user }: CallToActionProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      {!user && (
        <>
          <Link href="/buat-akun-baru#formulir">
            <Button
              size={"lg"}
              className="md:text-4xl font-bold md:p-6 bg-blue-700"
            >
              Buat Akun Sekarang
            </Button>
          </Link>
          <Button
            size={"lg"}
            className="md:text-4xl font-bold md:p-6 bg-blue-600"
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default HeroSection;
