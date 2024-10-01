import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const PlaidLinkPage = () => {
  return (
    <AuthLayout>
      <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="plaid-link" />
      </section>
    </AuthLayout>
  );
};

export default PlaidLinkPage;
