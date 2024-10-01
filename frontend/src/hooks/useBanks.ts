import {
  GetBankAccountFromPlaidQuery,
  GetBankAccountsFromPlaidQuery,
} from "@/gql/graphql";
import { GET_BANK_ACCOUNTS_FROM_PLAID } from "@/graphql/queries/getBankAccountsFromPlaid";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import useAppStore from "./useAppStore";
import { GET_BANK_ACCOUNT_FROM_PLAID } from "@/graphql/queries/getBankAccountFromPlaid";

export const useBanks = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const user = useAppStore((state) => state.user);
  const router = useRouter();

  const { data: bankAccountsData, loading: loadingBankAccounts } =
    useQuery<GetBankAccountsFromPlaidQuery>(GET_BANK_ACCOUNTS_FROM_PLAID, {
      skip: !user,
      onCompleted: (data) => {
        if (
          !data.getBankAccountsFromPlaid ||
          !data.getBankAccountsFromPlaid?.bankAccountsFromPlaid?.length
        ) {
          return router.push("/plaid-link");
        }
      },
    });

  const bankAccounts = bankAccountsData?.getBankAccountsFromPlaid;
  const currentId = id || bankAccounts?.bankAccountsFromPlaid?.[0].bankId || "";

  const { data: bankAccountData, loading: loadingBankAccount } =
    useQuery<GetBankAccountFromPlaidQuery>(GET_BANK_ACCOUNT_FROM_PLAID, {
      skip: !bankAccountsData,
      variables: { bankId: currentId },
    });

  const bankAccount = bankAccountData?.getBankAccountFromPlaid;
  const isShowBankAccounts = loadingBankAccounts || !bankAccounts;
  const isShowBankAccount =
    loadingBankAccounts || loadingBankAccount || !bankAccounts || !bankAccount;

  return {
    user,
    bankAccounts,
    loadingBankAccounts,
    bankAccount,
    loadingBankAccount,
    currentId,
    currentPage,
    isShowBankAccounts,
    isShowBankAccount,
  };
};
