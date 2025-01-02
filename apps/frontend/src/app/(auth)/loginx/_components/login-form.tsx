"use client";
import { FormError } from "@/app/(auth)/_components/form-error";
import InputForm from "@/app/(auth)/_components/input-form";
import { login } from "@/app/(auth)/loginx/_actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, TLogin } from "@workspace/database/zod/schema/login";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { GoogleSignInButton } from "@workspace/ui/components/google-sign-in-button";
import { ArrowRight, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl") ?? "/";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: TLogin) => {
    startTransition(async () => {
      login(data).then((response) => {
        if (response?.error) {
          setError(response.error);
        }
      });
    });
  };

  return (
    <div className=" w-[300px] p-2 flex justify-center items-center ">
      <div className="flex flex-col items-center gap-2 mb-4 w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="mx-auto rounded-full border-8 border-blue-600/80 md:block m-4"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
          noValidate
        >
          <InputForm
            id="email"
            label="Email"
            type="text"
            register={register}
            error={errors.email}
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
          />
          <InputForm
            id="password"
            label="password"
            type="password"
            register={register}
            error={errors.password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />
          <FormError message={error} />
          <Button className=" w-full py-6" disabled={isPending} type="submit">
            LOGIN
            {isPending && (
              <Loader className="ml-2 spin-in" size={24} color="white" />
            )}
          </Button>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
              atau
            </p>
          </div>
          <GoogleSignInButton />
          <div>
            <Link
              href="/buat-akun"
              className={buttonVariants({
                variant: "link",
                className: "gap-1 w-full text-blue-500",
              })}
            >
              {`Belum punya Akun? Buat Akun`}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const checkEmailPattern = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const checkComplexity = (password: string): boolean => {
  // Password complexity requirements:
  // At least 8 characters
  // Contains at least one uppercase letter
  // Contains at least one lowercase letter
  // Contains at least one digit
  // Contains at least one special character

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

export default LoginForm;
