import FormsContainer from "./_components/forms-container";

export const BuatAkunBaru = () => {
  return (
    <div className="flex min-h-svh w-full justify-center pt-[48px]">
      <div
        id="formulir"
        className="w-full max-w-lg border border-gray-200 p-4 rounded-lg shadow-md"
      >
        <FormsContainer />
      </div>
    </div>
  );
};

export default BuatAkunBaru;
