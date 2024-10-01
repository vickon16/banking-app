import { useSearchParams, useRouter } from "next/navigation";

import { cn, formUrlQuery } from "@/lib/utils";
import { BankAccount } from "@/gql/graphql";

interface BankTabItemProps {
  account: BankAccount;
  currentId: string;
}

export const BankTabItem = ({ account, currentId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const isActive = currentId === account?.bankId;
  const router = useRouter();

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.bankId,
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(
        `gap-[18px] border-b-2 flex px-2 sm:px-4 py-2 transition-all`,
        {
          "border-primary": isActive,
        }
      )}
    >
      <p
        className={cn(
          `text-clampSm line-clamp-1 flex-1 font-medium text-muted-foreground`,
          {
            " text-primary": isActive,
          }
        )}
      >
        {account.name}
      </p>
    </div>
  );
};
