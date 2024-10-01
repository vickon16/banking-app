import { GetBankAccountsFromPlaidResponse } from "@/gql/graphql";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

interface TotalBalanceBoxProps {
  bankAccounts: GetBankAccountsFromPlaidResponse;
}

const TotalBalanceBox = ({ bankAccounts }: TotalBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-border/30 p-4 drop-shadow-md shadow-md sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart accounts={bankAccounts?.bankAccountsFromPlaid || []} />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-clampMd font-semibold text-muted-foreground">
          Bank Accounts:{" "}
          <span className="text-primary">
            {bankAccounts?.totalBankAccounts}
          </span>
        </h2>
        <div className="flex flex-col">
          <p className="text-clampSm text-muted-foreground">
            Total Current Balance
          </p>

          <div className="text-clampLg flex-1 font-semibold flex-center gap-2">
            <AnimatedCounter amount={bankAccounts?.totalCurrentBalance || 0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
