import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen md:grid md:grid-cols-[auto,1fr] w-full font-inter">
      <Sidebar className="w-full sm:max-w-[300px] border-r border-border/20 bg-secondary/30 pt-8 max-md:hidden sm:p-4" />

      <div className="flex flex-col md:grid md:grid-cols-[1fr,auto] size-full">
        <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
