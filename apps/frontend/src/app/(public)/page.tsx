import { Button } from "@workspace/ui/components/button";

import { dbSmartppdb } from "@workspace/database/client";

import { getSiswa } from "@workspace/database/data/siswa";

const d = await getSiswa("1");

import JalurPendaftaranItem from "@/components/jalur-pendaftaran/item";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function Page() {
  return (
    <div className="flex p-10 pt-[48px] min-h-svh">
      <div className="flex flex-row gap-10 w-full">
        <div className="w-1/3">
          <Card className="w-full">
            <CardHeader className="w-full bg-red-500 text-red-50 min-h-36">
              <CardTitle className="text-2xl">Sekolah Dasar (SD)</CardTitle>
              <CardDescription className="text-red-50">
                Jalur Pendaftaran
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full p-2 gap-2 flex flex-col min-h-[550px]">
              <JalurPendaftaranItem>
                Penyandang Disabilitas
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Anak Panti dan Anak Nakes yang Meninggal Dunia dalam Penanganan
                Covid-19
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Mitra Trans Jakarta atau KPJ (yang terdaftar di DTKS)
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Zonasi</JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Jalur Perpindahan Tugas Orang Tua/Wali dan/atau Jalur Anak
                Guru/Tenaga Pendidikan
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Kedua</JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Ketiga</JalurPendaftaranItem>
            </CardContent>
            <CardFooter className="w-full flex flex-col gap-2 px-12">
              <Button size="lg" className="w-full bg-red-500">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant={"outline"} className="w-full">
                Cek Status Pendaftaran
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/3">
          <Card className="w-full">
            <CardHeader className="w-full bg-blue-700 text-blue-50 min-h-36">
              <CardTitle className="text-2xl">
                Sekolah Menengah Pertama (SMP)
              </CardTitle>
              <CardDescription className="text-red-50">
                Jalur Pendaftaran
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full p-2 gap-2 flex flex-col min-h-[550px]">
              <JalurPendaftaranItem>Prestasi Akademik</JalurPendaftaranItem>
              <JalurPendaftaranItem>Prestasi Non Akademik</JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Penyandang Disabilitas
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Anak Panti dan Anak Nakes yang Meninggal Dunia dalam Penanganan
                Covid-19
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                KJP plus / Mitra Trans Jakarta/ KPJ/ PIP (yang terdaftar di
                DTKS)
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Zonasi</JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Jalur Perpindahan Tugas Orang Tua/Wali dan/atau Jalur Anak
                Guru/Tenaga Pendidikan
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Kedua</JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Ketiga</JalurPendaftaranItem>
            </CardContent>
            <CardFooter className="w-full flex flex-col gap-2 px-12">
              <Button size="lg" className="w-full bg-blue-500">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant={"outline"} className="w-full">
                Cek Status Pendaftaran
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/3">
          <Card className="w-full">
            <CardHeader className="w-full bg-gray-400 text-gray-50 min-h-36">
              <CardTitle className="text-2xl">
                Sekolah Menengah Atas (SMA)
              </CardTitle>
              <CardDescription className="text-red-50">
                Jalur Pendaftaran
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full p-2 gap-2 flex flex-col min-h-[550px]">
              <JalurPendaftaranItem>Prestasi Akademik</JalurPendaftaranItem>
              <JalurPendaftaranItem>Prestasi Non Akademik</JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Penyandang Disabilitas
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Anak Panti dan Anak Nakes yang Meninggal Dunia dalam Penanganan
                Covid-19
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>
                KJP plus / Mitra Trans Jakarta/ KPJ/ PIP (yang terdaftar di
                DTKS)
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Zonasi</JalurPendaftaranItem>
              <JalurPendaftaranItem>
                Jalur Perpindahan Tugas Orang Tua/Wali dan/atau Jalur Anak
                Guru/Tenaga Pendidikan
              </JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Kedua</JalurPendaftaranItem>
              <JalurPendaftaranItem>Tahap Ketiga</JalurPendaftaranItem>
            </CardContent>
            <CardFooter className="w-full flex flex-col gap-2 px-12">
              <Button size="lg" className="w-full bg-gray-500">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant={"outline"} className="w-full">
                Cek Status Pendaftaran
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
