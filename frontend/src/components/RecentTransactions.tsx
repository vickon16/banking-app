import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankAccount, Transaction } from "@/gql/graphql";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BankInfo from "./BankInfo";
import { BankTabItem } from "./BankTabItem";
import { Pagination } from "./Pagination";
import TransactionsTable from "./TransactionsTable";

interface RecentTransactionsProps {
  bankAccounts: BankAccount[];
  transactions: Transaction[];
  currentId: string;
}

const RecentTransactions = ({
  bankAccounts,
  transactions,
  currentId,
}: RecentTransactionsProps) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex items-center justify-between">
        <h2 className="text-clampBase font-semibold">Recent transactions</h2>
        <Link
          href={`/transaction-history/?id=${currentId}`}
          className="text-sm rounded-lg border px-4 py-2.5 font-semibold "
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={currentId} className="w-full">
        <TabsList className="custom-scrollbar mb-8 flex w-full flex-nowrap justify-start px-0 bg-secondary/40">
          {bankAccounts.map((account) => (
            <TabsTrigger key={account.id} value={account.bankId}>
              <BankTabItem
                key={account.id}
                account={account}
                currentId={currentId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {bankAccounts.map((account) => (
          <TabsContent
            value={account.bankId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo account={account} currentId={currentId} type="full" />

            <TransactionsTable transactions={currentTransactions} />

            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
