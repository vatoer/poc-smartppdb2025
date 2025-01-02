"use client";

import MapDomisili, { MarkerPosition } from "@/components/gmap/map-domisili";
import { useState } from "react";
import FormRegister from "./form-register";
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
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Membuat Akun Baru</h1>
        <p className="text-gray-500">
          Isi data-data berikut untuk membuat akun baru.
        </p>
      </div>
      <FormRegister step={step} nextStep={nextStep} />
    </>
  );
};

export default FormsContainer;
