import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-5 h-screen overflow-hidden">
      <div className="w-full lg:col-span-2 p-3 h-full overflow-auto">
        {children}
      </div>
      <div className="hidden relative lg:col-span-3 w-full p-3 lg:flex items-center justify-center h-full">
        <Image
          src="/icons/auth-image.svg"
          alt="Auth image"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
