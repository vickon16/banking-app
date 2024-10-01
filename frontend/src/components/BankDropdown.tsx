import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { BankAccount } from "@/gql/graphql";
import { formUrlQuery, formatAmount } from "@/lib/utils";
import { UseFormSetValue } from "react-hook-form";

declare interface BankDropdownProps {
  accounts: BankAccount[];
  setValue: UseFormSetValue<any>;
}

export const BankDropdown = ({
  accounts = [],
  setValue,
}: BankDropdownProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState(accounts[0]);

  const handleBankChange = (id: string) => {
    const account = accounts.find((account) => account.bankId === id);
    if (!account) return;

    setSelected(account);
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: id,
    });
    router.push(newUrl, { scroll: false });

    setValue("senderBankId", id, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <Select
      defaultValue={selected?.id}
      onValueChange={(value) => handleBankChange(value)}
    >
      <SelectTrigger className={`flex w-full gap-3 md:w-[300px]`}>
        <Image
          src="icons/credit-card.svg"
          width={20}
          height={20}
          alt="account"
        />
        <p className="line-clamp-1 w-full text-left">{selected?.name}</p>
      </SelectTrigger>
      <SelectContent className={`w-full md:w-[300px]`} align="end">
        <SelectGroup>
          <SelectLabel className="py-2 font-normal text-muted-foreground">
            Select a bank to display
          </SelectLabel>
          {accounts.map((account) => (
            <SelectItem
              key={account.id}
              value={account.bankId}
              className="cursor-pointer border-t"
            >
              <div className="flex flex-col ">
                <p className="text-sm font-medium">{account.name}</p>
                <p className="text-sm font-medium text-primary">
                  {formatAmount(account?.currentBalance || 0)}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
