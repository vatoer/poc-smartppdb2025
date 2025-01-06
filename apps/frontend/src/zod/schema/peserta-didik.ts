import { z } from "zod";

export enum JenisKelamin {
  "Laki-laki" = "Laki-laki",
  "Perempuan" = "Perempuan",
}

export const jenisKelaminSchema = z.nativeEnum(JenisKelamin, {
  errorMap: (issue, ctx) => ({ message: "Pilih jenis kelamin" }),
});

export enum JenjangDikdasmen {
  "SD" = "SD",
  "SMP" = "SMP",
  "SMA" = "SMA",
}

export const jenjangDikdasmenSchema = z.nativeEnum(JenjangDikdasmen, {
  errorMap: (issue, ctx) => ({ message: "Pilih Jenjang" }),
});

export enum JenjangPendidikan {
  SD = "SD",
  SMP = "SMP",
  SMA = "SMA",
  D1 = "D1",
  D2 = "D2",
  D3 = "D3",
  S1 = "S1",
  S2 = "S2",
  S3 = "S3",
  Lainnya = "Lainnya",
}

export const jenjangPendidikanSchema = z.nativeEnum(JenjangPendidikan, {
  errorMap: (issue, ctx) => ({ message: "Pilih pendidikan" }),
});

export enum Pekerjaan {
  "Petani" = "Petani",
  "Pedagang" = "Pedagang",
  "Sopir" = "Sopir",
  "Nelayan" = "Nelayan",
  "Buruh" = "Buruh",
  "Wiraswasta" = "Wiraswasta",
  "Wirausaha" = "Wirausaha",
  "Pegawai Swasta" = "Pegawai Swasta",
  "PNS" = "PNS",
  "TNI" = "TNI",
  "POLRI" = "POLRI",
  "Ibu Rumah Tangga" = "Ibu Rumah Tangga",
  "Pelajar/Mahasiswa" = "Pelajar/Mahasiswa",
  "Pensiunan" = "Pensiunan",
  "Tidak Bekerja" = "Tidak Bekerja",
  "Lainnya" = "Lainnya",
}

export const pekerjaanSchema = z.nativeEnum(Pekerjaan, {
  errorMap: (issue, ctx) => ({ message: "Pilih Pekerjaan" }),
});

export const ortuSchema = z.object({
  nama: z.string().min(3).max(255),
  nik: z.string().min(16).max(16),
  kk: z.string().min(16).max(16),
  jenisKelamin: jenisKelaminSchema,
  tahunLahir: z.coerce.number().min(1900).max(2010),
  tahunWafat: z.coerce.number().optional(),
  jenjangPendidikan: jenjangPendidikanSchema,
  pekerjaan: pekerjaanSchema,
  penghasilan: z.coerce.number().default(0).optional(),
});

export type Ortu = z.infer<typeof ortuSchema>;

export const genericTanggalSchema = z.coerce
  .date()
  .min(new Date("1900-01-01"), { message: "Too old" });

export enum Agama {
  Islam = "Islam",
  Protestan = "Protestan",
  Katolik = "Katolik",
  Hindu = "Hindu",
  Buddha = "Buddha",
  Konghucu = "Konghucu",
  Lainnya = "Lainnya",
}

export const agamaSchema = z.nativeEnum(Agama, {
  errorMap: (issue, ctx) => ({ message: "Pilih Agama" }),
});

export enum GolonganDarah {
  "A" = "A",
  "B" = "B",
  "AB" = "AB",
  "O" = "O",
  "TIDAK_TAHU" = "Tidak tahu",
}

export const golonganDarahSchema = z.nativeEnum(GolonganDarah, {
  errorMap: (issue, ctx) => ({ message: "Pilih Golongan darah" }),
});

export const StatusDomisiliEnum = z.enum([
  "SESUAI_kk",
  "SURAT_PINDAH",
  "SESUAI_DOMISILI_PONDOK",
  "SESUAI_DOMISILI_PANTIASUHAN",
  "LAINNYA",
]);

export const domisiliSchema = z.object({
  statusDomisili: StatusDomisiliEnum,
  alamat: z.string().min(3).max(255),
  provinsi: z.string().min(3).max(255),
  kotaKabupaten: z.string().min(3).max(255),
  kecamatan: z.string().min(3).max(255),
  kelurahan: z.string().min(3).max(255),
  rt: z.string().min(1).max(3),
  rw: z.string().min(1).max(3),
});

export type Domisili = z.infer<typeof domisiliSchema>;

export const dataDiriSchema = z.object({
  nama: z.string().min(3).max(255),
  kk: z.string().min(16).max(16).optional(),
  nik: z.string().min(16).max(16).optional(),
  nisn: z.string().min(10).max(10).optional(),
  tempatLahir: z.string().min(3).max(255),
  tanggalLahir: genericTanggalSchema,
  jenisKelamin: jenisKelaminSchema,
  agama: agamaSchema,
  golonganDarah: golonganDarahSchema,
  jenjangDikdasmen: jenjangDikdasmenSchema,
});

export type DataDiri = z.infer<typeof dataDiriSchema>;

export const sekolahAsalSchema = z.object({
  NPSN: z
    .string()
    .min(1, {
      message:
        "nisn sekolah tidak boleh kosong, isi dengan tanda - jika tidak ada",
    })
    .max(8)
    .optional(),
  namaSekolah: z
    .string()
    .min(1, {
      message:
        "Nama sekolah tidak boleh kosong, isi dengan tanda - jika tidak ada",
    })
    .max(255),
  alamatSekolah: z
    .string()
    .min(1, {
      message: "Isi dengan tanda - jika tidak ada",
    })
    .max(255),
  tahunMasuk: z.coerce.number().optional(), // before we can use tahunMasuk: z.string().optional().transform(Number),
  tahunLulus: z.coerce.number().optional(),
});

export type SekolahAsal = z.infer<typeof sekolahAsalSchema>;
