import HeaderBox from "@/components/HeaderBox";
import AppLayout from "@/components/layouts/AppLayout";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { useBanks } from "@/hooks/useBanks";

const PaymentTransfer = () => {
  const { bankAccounts } = useBanks();
  return (
    <AppLayout>
      <section className="no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12">
        <HeaderBox
          title="Payment Transfer"
          subtext="Please provide any specific details or notes related to the payment transfer"
        />

        <section className="size-full pt-5">
          <PaymentTransferForm
            accounts={bankAccounts?.bankAccountsFromPlaid || []}
          />
        </section>
      </section>
    </AppLayout>
  );
};

export default PaymentTransfer;
