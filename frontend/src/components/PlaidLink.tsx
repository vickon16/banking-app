import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, usePlaidLink } from "react-plaid-link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useAppStore from "@/hooks/useAppStore";
import { useMutation } from "@apollo/client";
import {
  CreateLinkTokenMutation,
  ExchangePublicTokenDto,
  ExchangePublicTokenMutation,
} from "@/gql/graphql";
import { CREATE_LINK_TOKEN } from "@/graphql/mutations/createLinkToken";
import { EXCHANGE_PUBLIC_TOKEN } from "@/graphql/mutations/exchangePublicToken";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaidLinkProps {
  className?: string;
  size?: "sm" | "lg";
  variant?: "primary" | "ghost";
}

const PlaidLink = ({ className, size = "lg", variant }: PlaidLinkProps) => {
  const user = useAppStore((state) => state.user);
  const router = useRouter();
  const [token, setToken] = useState("");
  const [createLinkToken] =
    useMutation<CreateLinkTokenMutation>(CREATE_LINK_TOKEN);
  const [exchangePublicToken, { loading }] = useMutation<
    ExchangePublicTokenMutation,
    ExchangePublicTokenDto
  >(EXCHANGE_PUBLIC_TOKEN);

  useEffect(() => {
    const getLinkToken = async () => {
      await createLinkToken({
        onCompleted: (data) => {
          setToken(data.createLinkToken.linkToken);
        },
      });
    };

    if (user && !token) getLinkToken();
  }, [user, token, createLinkToken]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      if (!user || !user.dwollaCustomerId) return;
      console.log({ public_token });
      await exchangePublicToken({
        variables: {
          dwollaCustomerId: user.dwollaCustomerId,
          publicToken: public_token,
          userId: user.id,
        },
        onCompleted: (data) => {
          console.log(data);
          router.push("/");
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  const { open, ready } = usePlaidLink({ token, onSuccess });

  return (
    <div className={cn("space-y-2 w-full", className)}>
      <h2
        className={cn("font-bold text-xl", {
          "text-md": size === "sm",
        })}
      >
        Connect bank
      </h2>
      <p className="text-sm font-normal text-muted-foreground">
        Link your bank account to get started. We are going to proctect your
        data.
      </p>

      {loading ? (
        <div className="w-full min-h-[300px] flex items-center justify-center">
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <div className="w-full !mt-6">
          {variant === "primary" ? (
            <Button
              onClick={() => open()}
              disabled={!ready}
              size={size}
              className="w-full flex items-center gap-2"
            >
              Connect bank
            </Button>
          ) : variant === "ghost" ? (
            <Button
              onClick={() => open()}
              variant="ghost"
              size={size}
              className="w-full flex items-center gap-2"
            >
              <Image
                src="/icons/connect-bank.svg"
                alt="connect bank"
                width={24}
                height={24}
              />
              <p className="hidden text-sm font-semibold xl:block">
                Connect bank
              </p>
            </Button>
          ) : (
            <Button
              onClick={() => open()}
              size={size}
              variant="secondary"
              className="w-full flex items-center gap-2"
            >
              <Image
                src="/icons/connect-bank.svg"
                alt="connect bank"
                width={24}
                height={24}
              />
              <p className="text-sm font-semibold">Connect bank</p>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PlaidLink;
