// import { logoutAccount } from '@/lib/actions/user.actions'
import { LogoutUserMutation } from "@/gql/graphql";
import { LOGOUT_USER } from "@/graphql/mutations/Logout";
import useAppStore from "@/hooks/useAppStore";
import { cn, handleErrors } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface FooterProps {
  type?: "mobile" | "desktop";
}

const Footer = ({ type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const { user, resetStore } = useAppStore();
  const [logout, { loading }] = useMutation<LogoutUserMutation>(LOGOUT_USER);

  const handleLogOut = async () => {
    await logout({
      onCompleted: () => {
        resetStore();
        router.push("/sign-in");
      },
      onError: (error) => {
        handleErrors(error);
      },
    });
  };

  return (
    <footer className="flex cursor-pointer items-center justify-between gap-2 py-6">
      <div
        className={cn(
          `flex size-10 items-center justify-center rounded-full bg-secondary `,
          {
            "max-xl:hidden": type !== "mobile",
          }
        )}
      >
        <p className="text-clampBase font-bold">{user?.firstName[0]}</p>
      </div>

      <div
        className={cn(`flex flex-1 flex-col justify-center`, {
          "max-xl:hidden": type !== "mobile",
        })}
      >
        <h1 className="text-clampXs truncate text-primary font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-xs truncate font-normal text-muted-foreground">
          {user?.email}
        </p>
      </div>

      <button
        className="relative size-6 cursor-pointer"
        onClick={handleLogOut}
        disabled={loading}
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Image src="icons/logout.svg" fill alt="logout" />
        )}
      </button>
    </footer>
  );
};

export default Footer;
