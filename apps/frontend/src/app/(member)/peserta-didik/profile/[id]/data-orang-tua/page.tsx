import FormContainer from "./_components/form-container";

export const DataDiriPage = () => {
  return (
    <div id="formulir" className="flex flex-col w-full">
      <div
        className="w-full lg:max-w-[800px] lg:min-w-[600px] p-4 border border-gray-200 
      dark:border-gray-700 rounded-lg shadow-md"
      >
        <FormContainer />
      </div>
    </div>
  );
};

export default DataDiriPage;
