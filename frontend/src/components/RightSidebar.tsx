import useAppStore from "@/hooks/useAppStore";
import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";
import { BankAccount, Transaction } from "@/gql/graphql";
import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";

interface RightSidebarProps {
  bankAccounts: BankAccount[];
  transactions: Transaction[];
}

const RightSidebar = ({ bankAccounts, transactions }: RightSidebarProps) => {
  const { user } = useAppStore();
  const categories = countTransactionCategories(transactions);

  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col border-l border-border/20 xl:flex w-[355px] xl:overflow-y-scroll gap-4">
      <section className="flex flex-col pb-4">
        <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat" />
        <div className="relative flex px-6">
          <div className="flex items-center justify-center absolute -top-8 size-20 rounded-full bg-foreground p-4 shadow-profile">
            <span className="text-clamp2Xl font-bold text-secondary">
              {user?.firstName[0]}
            </span>
          </div>

          <div className="flex flex-col pt-16">
            <h1 className="text-clampMd font-semibold text-primary">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-clampSm font-normal text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between gap-8 px-4">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-clampMd font-semibold">My Banks</h2>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-sm font-semibold text-muted-foreground">
              Add Bank
            </h2>
          </Link>
        </div>

        {bankAccounts?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center">
            <div className="relative z-10 w-[90%]">
              <BankCard
                key={bankAccounts[0].bankId}
                account={bankAccounts[0]}
                userName={`${user?.firstName} ${user?.lastName}`}
                showBalance={false}
                colors={["bg-purple-800", "bg-purple-900"]}
              />
            </div>
            {bankAccounts[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={bankAccounts[1].bankId}
                  account={bankAccounts[1]}
                  userName={`${user?.firstName} ${user?.lastName}`}
                  showBalance={false}
                  colors={["bg-cyan-800", "bg-cyan-900"]}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="text-clampMd font-semibold">Top categories</h2>

          <div className="space-y-5">
            {categories.map((category) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
