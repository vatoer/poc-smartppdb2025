import FormContainer from "./_components/form-container";

export const DataDiriPage = () => {
  return (
    <div
      id="formulir"
      className="flex flex-col w-full justify-center pb-[48px]"
    >
      <div className="mt-4 w-full lg:max-w-[800px] lg:min-w-[600px] border border-gray-200 p-4 rounded-lg shadow-md">
        <FormContainer />
      </div>
    </div>
  );
};

export default DataDiriPage;
