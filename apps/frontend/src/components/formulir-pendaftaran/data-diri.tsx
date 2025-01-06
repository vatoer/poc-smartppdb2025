"use client";

import { AkunBaruStep0, akunBaruStep0Schema } from "@/zod/schema/akun-baru";
import {
  DataDiri,
  dataDiriSchema,
  JenjangDikdasmen,
} from "@/zod/schema/peserta-didik";
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

interface FormDataDiriProps {
  nextStep?: () => void;
}

const FormDataDiri = ({ nextStep = () => {} }: FormDataDiriProps) => {
  const form = useForm<DataDiri>({
    resolver: zodResolver(dataDiriSchema),
    defaultValues: {
      nama: "",
      nisn: "",
      nik: "",
      jenjangDikdasmen: JenjangDikdasmen.SD,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmit = (data: DataDiri) => {
    console.log(data);
    nextStep();
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-2 pb-24"
        >
          <FormField
            control={form.control}
            name="nisn"
            render={({ field }) => (
              <FormItem className="w-full">
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
          <FormField
            control={form.control}
            name="jenjangDikdasmen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenjang</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="bg-background w-full border border-gray-300 rounded p-2"
                  >
                    <option value="">Pilih Jenjang</option>
                    <option value="SD">SD/MI Sederajat</option>
                    <option value="SMP">SMP/MTs Sederajat</option>
                    <option value="SMA">SMA/MA Sederajat </option>
                  </select>
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
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormDataDiri;
