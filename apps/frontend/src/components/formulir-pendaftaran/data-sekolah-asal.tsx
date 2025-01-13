"use client";

import {
  DataSekolahAsal,
  dataSekolahAsalSchema,
  JenisKelamin,
  JenjangDikdasmen,
  JenjangPendidikan,
  Pekerjaan,
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
import dynamic from "next/dynamic";
// import { SelectProvinsi } from "@workspace/ui/components/select-provinsi";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormDataSekolahAsalProps {
  nextStep?: () => void;
}

const pekerjaanOptions = Object.entries(Pekerjaan).map(([value, label]) => ({
  value,
  label,
}));

// Sort the options by label
const sortedPekerjaanOptions = pekerjaanOptions.sort((a, b) =>
  a.label.localeCompare(b.label)
);

const jenjangPendidikanOptions = Object.entries(JenjangPendidikan).map(
  ([value, label]) => ({
    value,
    label,
  })
);

const FormDataSekolahAsal = ({
  nextStep = () => {},
}: FormDataSekolahAsalProps) => {
  const form = useForm<DataSekolahAsal>({
    resolver: zodResolver(dataSekolahAsalSchema),
    defaultValues: {
      ibu: {
        nama: "",
        nik: "",
        kk: "",
        tahunWafat: null,
        jenisKelamin: JenisKelamin.Perempuan,
        // pekerjaan: Pekerjaan.Lainnya,
        penghasilan: 0,
      },
      ayah: {
        nama: "",
        nik: "",
        kk: "",
        tahunWafat: null,
        jenisKelamin: JenisKelamin.LakiLaki,
        // pekerjaan: Pekerjaan.Lainnya,
        penghasilan: 0,
      },
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = form;

  const onSubmit = (data: DataSekolahAsal) => {
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
          <h1 className="text-lg">Data Ayah</h1>
          <FormField
            control={form.control}
            name="ayah.nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nama"
                    {...field}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ayah.nik"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIK</FormLabel>
                <FormControl>
                  <Input
                    placeholder="16 digit"
                    {...field}
                    value={field.value ?? ""}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ayah.kk"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Kartu Keluarga</FormLabel>
                <FormControl>
                  <Input
                    placeholder="16 digit"
                    {...field}
                    value={field.value ?? ""}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ayah.jenjangPendidikan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pendidikan</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    value={field.value ?? JenjangPendidikan.Lainnya}
                    className="custom-select w-full rounded p-2"
                  >
                    <option value="">Pilih Jenjang Pendidikan Ayah</option>
                    {jenjangPendidikanOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="custom-select-option"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full flex-col md:flex-row gap-2">
            <FormField
              control={form.control}
              name="ayah.pekerjaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pekerjaan</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      value={field.value ?? Pekerjaan.Lainnya}
                      className=" w-full custom-select rounded p-2"
                    >
                      <option value="">Pilih Pekerjaan Ayah</option>
                      {sortedPekerjaanOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="custom-select-option"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ayah.penghasilan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penghasilan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="16 digit"
                      {...field}
                      value={field.value ?? ""}
                      className="custom-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="h-0 py-4 border-b-2"></div>

          <h1 className="text-lg pt-4">Data Ibu</h1>

          <FormField
            control={form.control}
            name="ibu.nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nama"
                    {...field}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ibu.nik"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIK</FormLabel>
                <FormControl>
                  <Input
                    placeholder="16 digit"
                    {...field}
                    value={field.value ?? ""}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ibu.kk"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Kartu Keluarga</FormLabel>
                <FormControl>
                  <Input
                    placeholder="16 digit"
                    {...field}
                    value={field.value ?? ""}
                    className="custom-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ibu.jenjangPendidikan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pendidikan</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    value={field.value ?? JenjangPendidikan.Lainnya}
                    className="custom-select w-full rounded p-2"
                  >
                    <option value="">Pilih Jenjang Pendidikan Ayah</option>
                    {jenjangPendidikanOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="custom-select-option"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full flex-col md:flex-row gap-2">
            <FormField
              control={form.control}
              name="ibu.pekerjaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pekerjaan</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      value={field.value ?? Pekerjaan.Lainnya}
                      className=" w-full custom-select rounded p-2"
                    >
                      <option value="">Pilih Pekerjaan Ibu</option>
                      {sortedPekerjaanOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="custom-select-option"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ibu.penghasilan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penghasilan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="16 digit"
                      {...field}
                      value={field.value ?? ""}
                      className="custom-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

export default FormDataSekolahAsal;
