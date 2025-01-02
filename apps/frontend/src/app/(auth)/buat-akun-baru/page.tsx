import FormsContainer from "./_components/forms-container";

export const BuatAkunBaru = () => {
  return (
    <div className="flex w-full min-h-svh justify-center pt-[48px] pb-[48px] bg-background">
      <div
        id="formulir"
        className="w-full max-w-sm h-full border border-gray-200 p-4 mt-16 rounded-lg shadow-md"
      >
        <FormsContainer />
      </div>
    </div>
  );
};

export default BuatAkunBaru;
