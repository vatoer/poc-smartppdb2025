"use server";

import { DesaKelurahan, Kecamatan, KotaKabupaten } from "@prisma/client";
import { dbSmartppdb } from "@workspace/database/client";

export const getKotaKabupaten = async (
  provinsiId: string
): Promise<KotaKabupaten[]> => {
  try {
    const kotaKabupaten = await dbSmartppdb.kotaKabupaten.findMany({
      where: {
        provinsiId,
      },
    });
    return kotaKabupaten;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to get kota kabupaten`);
  }
};

export const getKecamatan = async (
  kotaKabupatenId: string
): Promise<Kecamatan[]> => {
  try {
    const kecamatan = await dbSmartppdb.kecamatan.findMany({
      where: {
        kotaKabupatenId,
      },
    });
    return kecamatan;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to get kecamatan`);
  }
};

export const getDesaKelurahan = async (
  kecamatanId: string
): Promise<DesaKelurahan[]> => {
  try {
    const desaKelurahan = await dbSmartppdb.desaKelurahan.findMany({
      where: {
        kecamatanId,
      },
    });
    return desaKelurahan;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to get desa kelurahan`);
  }
};
