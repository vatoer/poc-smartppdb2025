"use client";

import { AkunBaruStep0, akunBaruStep0Schema } from "@/zod/schema/akun-baru";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { useForm } from "react-hook-form";

interface FormStep0Props {
  step: number;
  nextStep: () => void;
}

const FormStep0 = ({ step, nextStep }: FormStep0Props) => {
  const form = useForm<AkunBaruStep0>({
    resolver: zodResolver(akunBaruStep0Schema),
    defaultValues: {
      nama: "",
      nisn: "",
      nik: "",
      jenjang: "SD",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmit = (data: AkunBaruStep0) => {
    console.log(data);
    nextStep();
  };

  if (step !== 0) {
    return null;
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nisn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NISN</FormLabel>
                <FormControl>
                  <Input placeholder="10 digit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nik"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIK</FormLabel>
                <FormControl>
                  <Input placeholder="16 digit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div
            className={cn(
              "flex flex-col sm:flex-row  sm:justify-end gap-2 mt-6"
            )}
          >
            <Button type="submit">Selanjutnya</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormStep0;
