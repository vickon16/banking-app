import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

interface SideBarProps {
  isMobile?: boolean;
  className?: string;
}

const Sidebar = ({ className, isMobile }: SideBarProps) => {
  const pathname = usePathname();

  return (
    <section
      className={cn("h-screen flex flex-col w-full justify-between", className)}
    >
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <div className="relative size-[50px]">
            <Image src="/icons/logo.svg" fill alt="Banking App logo" />
          </div>
          <h1
            className={cn(
              "font-ibmPlexSerif text-clampBase font-bold max-xl:hidden",
              {
                "max-xl:block": isMobile,
              }
            )}
          >
            Banking App
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-3 items-center p-3 rounded-md transition-all",
                {
                  "bg-secondary": isActive,
                  "hover:brightness-[3] hover:invert-0": !isActive,
                }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn(
                  "font-semibold text-muted-foreground max-xl:hidden",
                  {
                    "text-primary": isActive,
                    "max-xl:block": isMobile,
                  }
                )}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      <PlaidLink
        className={cn("max-xl:hidden", {
          "max-xl:block": isMobile,
        })}
        size="sm"
      />
      <Footer />
    </section>
  );
};

export default Sidebar;
