const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col items-center justify-between  p-2 md:px-10">
        {children}
      </main>

      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default AuthLayout;
