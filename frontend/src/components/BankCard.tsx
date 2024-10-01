import { cn, formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copy from "./Copy";
import { BankAccount } from "@/gql/graphql";

type CreditCardProps = {
  account: BankAccount;
  userName: string;
  colors: string[];
  showBalance?: boolean;
  className?: string;
};

const BankCard = ({
  account,
  userName,
  colors,
  showBalance = true,
  className,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.bankId}`}
        className={cn(
          "relative flex h-[190px] overflow-hidden w-full max-w-[350px] justify-between rounded-[20px] border border-foreground shadow-2xl drop-shadow-2xl shadow-foreground/10 backdrop-blur-[6px]",
          colors[0],
          className
        )}
      >
        <div className="relative flex size-full flex-col justify-between p-4">
          <div>
            <h1 className="text-clampSm font-semibold">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black">
              {formatAmount(account?.currentBalance || 0)}
            </p>
          </div>

          <article className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h1 className="text-xs font-semibold">{userName}</h1>
              <h2 className="text-xs font-semibold">●● / ●●</h2>
            </div>
            <p className="text-sm font-semibold tracking-[1.1px]">
              ●●●● ●●●● ●●●● <span className="text-base">{account.mask}</span>
            </p>
          </article>
        </div>

        <div
          className={cn(
            "flex size-full flex-1 flex-col items-end justify-between p-4 relative",
            colors[1] || colors[0]
          )}
        >
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={45}
            alt="mastercard"
            className="ml-5"
          />
        </div>
        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {showBalance && <Copy title={account.shareableId} />}
    </div>
  );
};

export default BankCard;
