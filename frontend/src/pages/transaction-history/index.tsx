import HeaderBox from "@/components/HeaderBox";
import AppLayout from "@/components/layouts/AppLayout";
import { Pagination } from "@/components/Pagination";
import TransactionsTable from "@/components/TransactionsTable";
import { useBanks } from "@/hooks/useBanks";
import { formatAmount } from "@/lib/utils";

const TransactionHistoryPage = () => {
  const { currentPage, bankAccount } = useBanks();

  const rowsPerPage = 20;
  const totalPages = Math.ceil(
    (bankAccount?.transactions?.length || 0) / rowsPerPage
  );

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
  const currentTransactions =
    bankAccount?.transactions?.slice(
      indexOfFirstTransaction,
      indexOfLastTransaction
    ) || [];

  const account = bankAccount?.bankAccountFromPlaid;

  return (
    <AppLayout>
      <div className="flex max-h-screen w-full flex-col gap-8 overflow-y-scroll bg-gray-25 p-8 xl:py-12">
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row">
          <HeaderBox
            title="Transaction History"
            subtext="See your bank details and transactions."
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 rounded-lg border-y bg-primary/5 px-4 py-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-clampMd font-bold">{account?.name}</h2>
              <p className="text-sm text-primary/80">{account?.officialName}</p>
              <p className="text-sm font-semibold tracking-[1.1px]">
                ●●●● ●●●● ●●●● {account?.mask}
              </p>
            </div>

            <div className="flex items-center justify-center flex-col  gap-2 rounded-md bg-primary/40 px-4 py-2">
              <p className="text-sm">Current balance</p>
              <p className="text-clampMd text-center font-bold">
                {formatAmount(account?.currentBalance || 0)}
              </p>
            </div>
          </div>

          <section className="flex w-full flex-col gap-6">
            <TransactionsTable transactions={currentTransactions} />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={currentPage} />
              </div>
            )}
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default TransactionHistoryPage;
