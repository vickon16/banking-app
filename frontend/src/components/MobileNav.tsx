import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Sidebar from "./Sidebar";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="menu"
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full sm:max-w-[300px] border-r border-border/20 bg-secondary/80 pt-8 sm:p-4"
      >
        <Sidebar isMobile />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
