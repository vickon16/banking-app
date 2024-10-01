import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout>
      <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="sign-in" />
      </section>
    </AuthLayout>
  );
};

export default SignInPage;
