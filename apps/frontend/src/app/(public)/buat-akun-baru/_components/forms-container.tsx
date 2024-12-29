"use client";

import { useState } from "react";
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
      <FormStep0 step={step} nextStep={nextStep} />
      <FormStep1SD step={step} prevStep={prevStep} nextStep={nextStep} />
    </>
  );
};

export default FormsContainer;
