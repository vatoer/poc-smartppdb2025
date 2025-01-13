import { dbSmartppdb, Prisma } from "./client";

import csv from "csv-parser";
import fs from "fs";
import path from "path";

import {
  DesaKelurahan,
  Kecamatan,
  KotaKabupaten,
  Provinsi,
} from "@prisma/client";

// Helper function to read and parse CSV
const readCsvFile = <T>(filePath: string): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    fs.createReadStream(filePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (data: T) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
};

const seedProvinsi = async (): Promise<void> => {
  console.log("Seeding provinsi");
  const csvPath = "./csv/provinsi.csv";

  // Check if the file exists
  if (!fs.existsSync(csvPath)) {
    console.error("File not found");
    return;
  }

  const permissionDataPath = path.resolve(process.cwd(), csvPath);

  try {
    // Truncate the table
    console.log("Truncating existing data...");
    await dbSmartppdb.provinsi.deleteMany();
    console.log("Existing data truncated.");

    // Read csv file
    const results: Provinsi[] = await readCsvFile<Provinsi>(permissionDataPath);

    // Insert data into the table
    for (const row of results) {
      await dbSmartppdb.provinsi.create({
        data: row,
      });
    }

    console.log("Data Provinsi seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

const seedKotaKabupaten = async (): Promise<void> => {
  console.log("Seeding kota kabupaten");
  const csvPath = "./csv/kota_kabupaten.csv";

  // Check if the file exists
  if (!fs.existsSync(csvPath)) {
    console.error("File not found");
    return;
  }

  const permissionDataPath = path.resolve(process.cwd(), csvPath);

  try {
    // Truncate the table
    console.log("Truncating existing data...");
    await dbSmartppdb.kotaKabupaten.deleteMany();
    console.log("Existing data truncated.");

    // Read csv file
    const results: KotaKabupaten[] =
      await readCsvFile<KotaKabupaten>(permissionDataPath);

    // Insert data into the table
    for (const row of results) {
      await dbSmartppdb.kotaKabupaten.create({
        data: row,
      });
    }

    console.log("Data Kota Kabupaten seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

const seedKecamatan = async (): Promise<void> => {
  console.log("Seeding kecamatan");
  const csvPath = "./csv/kecamatan.csv";

  // Check if the file exists
  if (!fs.existsSync(csvPath)) {
    console.error("File not found");
    return;
  }

  const permissionDataPath = path.resolve(process.cwd(), csvPath);

  try {
    // Truncate the table
    console.log("Truncating existing data...");
    await dbSmartppdb.kecamatan.deleteMany();
    console.log("Existing data truncated.");

    // Read csv file
    const results: Kecamatan[] =
      await readCsvFile<Kecamatan>(permissionDataPath);

    // Insert data into the table
    for (const row of results) {
      await dbSmartppdb.kecamatan.create({
        data: row,
      });
    }

    console.log("Data Kecamatan seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

const seedDesaKelurahan = async (): Promise<void> => {
  console.log("Seeding desa kelurahan");
  const csvPath = "./csv/desa_kelurahan.csv";

  // Check if the file exists
  if (!fs.existsSync(csvPath)) {
    console.error("File not found");
    return;
  }

  const permissionDataPath = path.resolve(process.cwd(), csvPath);

  try {
    // Truncate the table
    console.log("Truncating existing data...");
    await dbSmartppdb.desaKelurahan.deleteMany();
    console.log("Existing data truncated.");

    // Read csv file
    const results: DesaKelurahan[] =
      await readCsvFile<DesaKelurahan>(permissionDataPath);

    // Insert data into the table
    for (const row of results) {
      await dbSmartppdb.desaKelurahan.create({
        data: row,
      });
    }

    console.log("Data Desa Kelurahan seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

async function main() {
  console.log("Seeding database");
  try {
    await seedProvinsi();
    await seedKotaKabupaten();
    await seedKecamatan();
    await seedDesaKelurahan();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await dbSmartppdb.$disconnect();
    console.log("Database seeded successfully");
  }
}

main();
