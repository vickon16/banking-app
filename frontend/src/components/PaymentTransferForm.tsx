import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { BankAccount, CreateTransferTransactionMutation } from "@/gql/graphql";
import { CREATE_TRANSFER_TRANSACTION } from "@/graphql/mutations/createTransferTransaction";
import { transferFormSchema } from "@/lib/zodSchemas";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { BankDropdown } from "./BankDropdown";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Separator } from "./ui/separator";

declare interface PaymentTransferFormProps {
  accounts: BankAccount[];
}

const defaultValues = {
  name: "",
  email: "",
  amount: "",
  senderBankId: "",
  shareableId: "",
};

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  const form = useForm<z.infer<typeof transferFormSchema>>({
    resolver: zodResolver(transferFormSchema),
    defaultValues,
  });

  const [createTransferTransaction, { loading }] =
    useMutation<CreateTransferTransactionMutation>(CREATE_TRANSFER_TRANSACTION);

  const submit = async (data: z.infer<typeof transferFormSchema>) => {
    try {
      await createTransferTransaction({
        variables: {
          ...data,
          amount: Number(data.amount),
        },
        onCompleted: () => {
          console.log("Transfer transaction created");
          form.reset(defaultValues);
          window.location.assign("/");
        },
      });
    } catch (error: any) {
      if (error?.message) {
        return toast.error(error?.message);
      }
      toast.error("Couldn't create transfer transaction");
    }
  };

  const isLoading = form.formState.isSubmitting || loading;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="senderBankId"
          render={() => (
            <FormItem>
              <div className="flex items-center flex-col md:flex-row gap-4">
                <div className="space-y-1">
                  <FormLabel className="text-clampMd font-medium">
                    Select Source Bank
                  </FormLabel>
                  <FormDescription className="text-muted-foreground text-xs">
                    Select the bank account you want to transfer funds from
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <BankDropdown
                      accounts={accounts || []}
                      setValue={form.setValue}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <CustomInput
          form={form}
          name="name"
          type="textarea"
          formLabel="Transfer Name"
          placeholder="Write a short note here"
          formDescription="Please provide any additional information or instructions related to the transfer"
          formTargetClassName="max-w-[500px]"
        />

        <div className="!mt-6 !mb-2 space-y-2">
          <Separator className="bg-foreground/20" />
          <h2 className="text-clampBase font-semibold">Bank account details</h2>
          <p className="text-muted-foreground text-sm">
            Enter the bank account details of the recipient
          </p>
        </div>

        <CustomInput
          form={form}
          name="email"
          formLabel="Recipient's Email Address"
          placeholder="ex: johndoe@gmail.com"
          formTargetClassName="max-w-[500px]"
        />

        <CustomInput
          form={form}
          name="shareableId"
          formLabel="Receiver's Plaid Shareable Id"
          placeholder="Enter the public account number"
          formTargetClassName="max-w-[500px]"
        />

        <CustomInput
          form={form}
          name="amount"
          formLabel="Amount"
          placeholder="ex: 5.00"
          type="number"
          formTargetClassName="max-w-[500px]"
        />

        <div className="payment-transfer_btn-box">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
              </>
            ) : (
              "Transfer Funds"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PaymentTransferForm;
