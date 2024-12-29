export const JalurPendaftaranItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full ring-1 ring-gray-200 rounded-sm p-2">
      <div className="font-semibold">{children}</div>
    </div>
  );
};

export default JalurPendaftaranItem;
