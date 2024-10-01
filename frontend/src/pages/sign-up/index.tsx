import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout>
      <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="sign-up" />
      </section>
    </AuthLayout>
  );
};

export default SignUpPage;
