import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/gql/graphql";
import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
}

const tableHeadStyles = "px-2 text-foreground font-semibold";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  console.log(category);
  return (
    <div
      className={cn(
        "flex items-center justify-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2"
      )}
    >
      <div className={cn("size-2 rounded-full bg-primary")} />
      <p className={cn("text-[12px] capitalize font-medium")}>{category}</p>
    </div>
  );
};

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table className="w-full overflow-auto">
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead className={tableHeadStyles}>Transaction</TableHead>
          <TableHead className={tableHeadStyles}>Amount</TableHead>
          <TableHead className={tableHeadStyles}>Status</TableHead>
          <TableHead className={tableHeadStyles}>Date</TableHead>
          <TableHead className={tableHeadStyles}>Channel</TableHead>
          <TableHead className={tableHeadStyles}>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t) => {
          const status = getTransactionStatus(new Date(t.createdAt));
          const amount = formatAmount(t.amount);

          const isDebit = t.type === "debit";
          const isCredit = t.type === "credit";

          return (
            <TableRow key={t.id} className={"bg-secondary/30"}>
              <TableCell className="max-w-[250px] pl-2 pr-10">
                <h1 className="text-sm truncate flex items-center gap-3">
                  {removeSpecialCharacters(t.name)}
                </h1>
              </TableCell>

              <TableCell
                className={`pl-2 pr-10 ${
                  isDebit || amount[0] === "-"
                    ? "text-rose-400"
                    : "text-emerald-400"
                }`}
              >
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              <TableCell className="pl-2 pr-10">
                <CategoryBadge category={status} />
              </TableCell>

              <TableCell className="min-w-32 text-sm pl-2 pr-10">
                {formatDateTime(new Date(t.createdAt)).dateTime}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24">
                {t.paymentChannel}
              </TableCell>

              <TableCell className="pl-2 pr-10 max-md:hidden">
                <CategoryBadge category={t?.category || ""} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
