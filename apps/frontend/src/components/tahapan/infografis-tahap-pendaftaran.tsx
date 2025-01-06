import { auth } from "@/app/(auth)/auth";
import { Tahap } from "./tahap";

export const InfografisTahapPendaftaran = async () => {
  const session = await auth();
  const user = session?.user;

  const isLoggedIn = !!user;

  return (
    <div>
      <div className="flex flex-col lg:flex-row flex-grow h-auto items-stretch  justify-between py-2 gap-2">
        <Tahap
          className="lg:w-1/6 flex-grow"
          tahap={1}
          judul={"Membuat Akun"}
          isDone={isLoggedIn}
          enabled={!isLoggedIn}
          teks={
            "Klik Buat Akun Sekarang, kemudian isi dengan nama dan email anda. Anda juga bisa login menggunakan akun google anda. Anda akan mendapatkan email verifikasi untuk mengaktifkan akun anda."
          }
          buttonLabel="Buat Akun Sekarang"
        />
        <Tahap
          className="lg:w-1/6"
          tahap={2}
          judul={"Isi Formulir"}
          teks={
            "Isi Formulir data diri Calon Peserta Didik Baru, data Orang Tua dan unggah dokumen yang diperlukan."
          }
          enabled={isLoggedIn}
          linkTo="/peserta-didik/profile#formulir"
        />
        <Tahap
          className="lg:w-1/6"
          tahap={3}
          judul={"Pilih Sekolah"}
          teks={"Pilih Sekolah tujuan anda dan ajukan pendaftaran."}
          enabled={isLoggedIn}
        />
        <Tahap
          className="lg:w-1/6"
          tahap={4}
          judul={"Pembayaran"}
          teks={
            "Pembayaran Biaya registrasi melalui transfer bank atau Indomaret terdekat. cetak bukti pembayaran."
          }
          enabled={isLoggedIn}
        />
        <Tahap
          className="lg:w-1/6"
          tahap={5}
          judul={"Verifikasi & Seleksi"}
          teks={
            "Proses Verifikasi dan Seleksi untuk setiap sekolah bervariasi tergantung keperluan sekolah. Anda akan mendapatkan informasi lebih lengkap saat anda memilih sekolah."
          }
          enabled={isLoggedIn}
        />
        <Tahap
          className="lg:w-1/6"
          tahap={6}
          judul={"Lapor diri"}
          teks={
            "Pastikan Anda menyelesaikan pembayaran keuangan sesuai ketentuan masing-masing sekolah untuk mengamankan posisi Anda. Anda mungkin diminta untuk melengkapi dokumen yang diperlukan. Pastikan Anda telah membaca dengan seksama informasi yang diberikan oleh sekolah tujuan Anda."
          }
          enabled={isLoggedIn}
        />
      </div>
    </div>
  );
};

export default InfografisTahapPendaftaran;
