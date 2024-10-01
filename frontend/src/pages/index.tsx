import HeaderBox from "@/components/HeaderBox";
import AppLayout from "@/components/layouts/AppLayout";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { useBanks } from "@/hooks/useBanks";
import { Loader2 } from "lucide-react";

export default function Home() {
  const {
    user,
    bankAccounts,
    bankAccount,
    loadingBankAccount,
    loadingBankAccounts,
    currentId,
  } = useBanks();
  const isShowBankAccounts = loadingBankAccounts || !bankAccounts;
  const isShowBankAccount =
    loadingBankAccounts || loadingBankAccount || !bankAccounts || !bankAccount;

  return (
    <AppLayout>
      <section className="no-scrollbar flex w-full flex-row overflow-y-scroll">
        <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
          <header className="flex flex-col justify-between gap-8">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={user?.firstName || "Guest"}
              subtext="Access and manage your account and transactions efficiently."
            />

            {isShowBankAccounts ? (
              <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px]">
                <Loader2 className="animate-spin" size={30} />
              </div>
            ) : (
              <TotalBalanceBox bankAccounts={bankAccounts} />
            )}
          </header>

          {isShowBankAccount ? (
            <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px]">
              <Loader2 className="animate-spin" size={30} />
            </div>
          ) : (
            <RecentTransactions
              bankAccounts={bankAccounts.bankAccountsFromPlaid}
              transactions={bankAccount.transactions || []}
              currentId={currentId}
            />
          )}
        </div>

        {isShowBankAccount ? (
          <aside className="no-scrollbar hidden h-screen max-h-screen items-center justify-center flex-col border-l border-border/20 xl:flex w-[355px] xl:overflow-y-scroll gap-4">
            <Loader2 className="animate-spin" size={30} />
          </aside>
        ) : (
          <RightSidebar
            bankAccounts={bankAccounts.bankAccountsFromPlaid.slice(0, 2)}
            transactions={bankAccount.transactions || []}
          />
        )}
      </section>
    </AppLayout>
  );
}
