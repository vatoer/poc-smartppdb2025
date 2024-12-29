import { z } from "zod";

// Define the enum for jenjang
export const JenjangEnum = z.enum(["SD", "SMP", "SMA"]);
export const StatusDomisiliEnum = z.enum([
  "SESUAI_KK",
  "SURAT_PINDAH",
  "SESUAI_DOMISILI_PONDOK",
  "SESUAI_DOMISILI_PANTIASUHAN",
  "LAINNYA",
]);

export const akunBaruSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirmation: z.string(),
});

export type AkunBaru = z.infer<typeof akunBaruSchema>;

export const akunBaruStep0Schema = z.object({
  nama: z.string().min(3).max(255),
  nisn: z.string().length(10).optional(),
  nik: z.string().length(16),
  jenjang: JenjangEnum,
});

export type AkunBaruStep0 = z.infer<typeof akunBaruStep0Schema>;

export const akunBaruStep1Schema = z.object({
  statusDomisili: StatusDomisiliEnum,
  alamat: z.string().min(3).max(255),
  provinsi: z.string().min(3).max(255),
  kotaKabupaten: z.string().min(3).max(255),
  kecamatan: z.string().min(3).max(255),
  kelurahan: z.string().min(3).max(255),
  rt: z.string().min(1).max(3),
  rw: z.string().min(1).max(3),
});

export const akunBaruJenjangSDStep1Schema = z.object({
  npsn: z.string().length(8),
  sekolahAsal: z.string().min(3).max(255),
  tahunLulus: z.number().int().min(2000).max(2025),
});

export type AkunBaruJenjangSDStep1 = z.infer<
  typeof akunBaruJenjangSDStep1Schema
>;
