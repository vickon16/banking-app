import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import {
  cn,
  formUrlQuery,
  formatAmount,
  getAccountTypeColors,
} from "@/lib/utils";
import { BankAccount } from "@/gql/graphql";
import { AccountTypes } from "@/types";

interface BankInfoProps {
  account: BankAccount;
  currentId?: string;
  type: "full" | "card";
}

const BankInfo = ({ account, currentId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = currentId === account?.bankId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.bankId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(
        `gap-[18px] flex p-4 cursor-pointer transition-all border bg-primary border-transparent ${colors.lightBg}`,
        {
          "shadow-sm border-primary": type === "card" && isActive,
          "rounded-xl": type === "card",
          "hover:shadow-sm cursor-pointer": type === "card",
        }
      )}
    >
      <figure className={`flex-center h-fit rounded-full border`}>
        <Image
          src="/icons/connect-bank.svg"
          width={20}
          height={20}
          alt={account?.subType || ""}
          className="m-2 min-w-5"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
          <h2
            className={`text-sm line-clamp-1 flex-1 font-bold ${colors.title}`}
          >
            {account.name}
          </h2>
          {type === "full" && (
            <p
              className={`text-xs rounded-full px-3 py-1 font-medium ${colors.subText} ${colors.lightBg}`}
            >
              {account?.subType}
            </p>
          )}
        </div>

        <p className={`text-sm font-medium ${colors.subText}`}>
          {formatAmount(account?.currentBalance || 0)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
