"use client";

import MapDomisili, { MarkerPosition } from "@/components/gmap/map-domisili";
import { buttonVariants } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FormRegister from "../../app/(auth)/buat-akun-baru/_components/form-register";
import FormStep0 from "./form-step-0";
import FormStep1SD from "./form-step-1-sd";

export const FormsContainer = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Membuat Akun Baru</h1>
        <p className="text-gray-500">
          Isi data-data berikut untuk membuat akun baru.
        </p>
      </div>
      <FormRegister step={step} nextStep={nextStep} />
      <div className=" mt-4">
        <Link
          href="/login"
          className={buttonVariants({
            variant: "link",
            className: "gap-1 w-full text-blue-500",
          })}
        >
          {`Sudah punya Akun? Login`}
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </>
  );
};

export default FormsContainer;
