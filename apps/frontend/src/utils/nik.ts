function getDateOfBirthFromNIK(nik: string): Date | null {
  // Validate NIK length (should be 16 characters)
  if (nik.length !== 16) {
    console.error("Invalid NIK length. It must be 16 characters.");
    return null;
  }

  // Extract date components
  const dayRaw = parseInt(nik.slice(6, 8), 10);
  const month = parseInt(nik.slice(8, 10), 10);
  const year = parseInt(nik.slice(10, 12), 10);

  // Validate month
  if (month < 1 || month > 12) {
    console.error("Invalid month in NIK.");
    return null;
  }

  // Determine century for the year (assuming 1900-1999 or 2000-2099)
  const currentYear = new Date().getFullYear();
  const century =
    year > parseInt(currentYear.toString().slice(-2)) ? 1900 : 2000;
  const fullYear = century + year;

  // Adjust day for female NIKs (subtract 40 if dayRaw >= 40)
  const day = dayRaw >= 40 ? dayRaw - 40 : dayRaw;

  // Validate day
  if (day < 1 || day > 31) {
    console.error("Invalid day in NIK.");
    return null;
  }

  // Construct and return the date
  try {
    return new Date(fullYear, month - 1, day); // Month is zero-based in JavaScript Date
  } catch (error) {
    console.error("Error constructing date:", error);
    return null;
  }
}

// Example usage
// const nik = "3201044907010001";
// const dateOfBirth = getDateOfBirthFromNIK(nik);
// if (dateOfBirth) {
//   console.log("Date of Birth:", dateOfBirth.toISOString().split("T")[0]);
// } else {
//   console.log("Failed to parse date of birth.");
// }
