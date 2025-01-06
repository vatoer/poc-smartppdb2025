import FormContainer from "./_components/form-container";

export const PesertaDidikProfile = () => {
  return (
    <div
      id="formulir"
      className="flex flex-col w-full sm:max-w-[1200px] items-center pb-[48px]"
    >
      <h1 className="text-lg">Formulir Data Diri</h1>
      <div className="flex flex-col w-full mt-4 border border-gray-200 p-4 rounded-lg shadow-md">
        <FormContainer />
      </div>
    </div>
  );
};

export default PesertaDidikProfile;
