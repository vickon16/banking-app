import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import AppLayout from "@/components/layouts/AppLayout";
import { useBanks } from "@/hooks/useBanks";
import { Loader2 } from "lucide-react";

const MyBanksPage = () => {
  const { user, bankAccounts, loadingBankAccounts } = useBanks();

  return (
    <AppLayout>
      <section className="flex h-screen max-h-screen w-full flex-col gap-8 bg-gray-25 p-8 xl:py-12">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="text-clampMd font-semibold">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {loadingBankAccounts ? (
              <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px]">
                <Loader2 className="animate-spin" size={30} />
              </div>
            ) : !user || !bankAccounts?.bankAccountsFromPlaid?.length ? (
              <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px]">
                <p className="text-center text-muted-foreground">
                  You don&apos;t have any bank accounts yet.
                </p>
              </div>
            ) : (
              bankAccounts.bankAccountsFromPlaid.map((account) => (
                <BankCard
                  key={account.id}
                  account={account}
                  userName={user?.firstName}
                  colors={["bg-purple-800"]}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default MyBanksPage;
