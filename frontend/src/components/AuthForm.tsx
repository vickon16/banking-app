import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  LoginDto,
  LoginUserMutation,
  RegisterDto,
  RegisterUserMutation,
} from "@/gql/graphql";
import { LOGIN_USER } from "@/graphql/mutations/login";
import { REGISTER_USER } from "@/graphql/mutations/register";
import useAppStore from "@/hooks/useAppStore";
import { handleErrors } from "@/lib/utils";
import { loginFormSchema, registerFormSchema } from "@/lib/zodSchemas";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomInput from "./CustomInput";
import PlaidLink from "./PlaidLink";

type AuthFormProps = {
  type: "sign-in" | "plaid-link" | "sign-up";
};

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const { setUser } = useAppStore();

  const [registerUser, { loading: registerLoading }] = useMutation<
    RegisterUserMutation,
    RegisterDto
  >(REGISTER_USER);

  const [loginUser, { loading: loginLoading }] = useMutation<
    LoginUserMutation,
    LoginDto
  >(LOGIN_USER);

  const formSchema =
    type === "sign-in"
      ? loginFormSchema
      : type === "sign-up"
      ? registerFormSchema
      : z.object({});

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading =
    form.formState.isSubmitting || registerLoading || loginLoading;

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const val = registerFormSchema.safeParse(data);
        if (!val.success) {
          return toast.error("Please fill out all the fields");
        }
        await registerUser({
          variables: {
            ...val.data,
            postalCode: Number(val.data.postalCode),
            ssn: Number(val.data.ssn),
          },
          onCompleted: (data) => {
            setUser(data.register);
            router.push("/plaid-link");
          },
        });
      }

      if (type === "sign-in") {
        const val = loginFormSchema.safeParse(data);
        if (!val.success) {
          return toast.error("Please fill out all the fields");
        }
        await loginUser({
          variables: val.data,
          onCompleted: (data) => {
            console.log(data.login);
            setUser(data.login);
            router.push("/");
          },
        });
      }
    } catch (error) {
      console.log(error);
      handleErrors(error);
    }
  };

  return (
    <section className="flex flex-1 flex-col justify-center w-full mx-auto gap-8 py-8 max-w-[600px]">
      <Link href="/" className="cursor-pointer flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="Bank App logo"
        />
        <h1 className="text-clampMd font-ibm-plex-serif font-bold">Bank App</h1>
      </Link>
      <h1 className="text-clampLg font-bold text-primary">
        {type === "sign-in"
          ? "Sign In"
          : type === "sign-up"
          ? "Sign Up"
          : "Link Account"}
        <p className="text-sm font-normal text-muted-foreground">
          {type === "plaid-link"
            ? "Link your account to get started"
            : "Please enter your details"}
        </p>
      </h1>

      {type === "plaid-link" ? (
        <PlaidLink variant="primary" />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-2 min-h-[500px] flex flex-col gap-y-6 justify-center"
          >
            <CustomInput
              form={form}
              name="email"
              type="email"
              formLabel="Email"
              placeholder="Enter your email"
            />

            <div className="flex gap-4">
              <CustomInput
                form={form}
                name="password"
                formLabel="Password"
                type="password"
                placeholder="Enter your password"
              />
              {type === "sign-up" && (
                <CustomInput
                  form={form}
                  name="confirmPassword"
                  formLabel="Confirm Password"
                  type="password"
                  placeholder="Retype your password"
                />
              )}
            </div>

            {type === "sign-up" && (
              <>
                <div className="flex gap-4 w-full">
                  <CustomInput
                    form={form}
                    name="firstName"
                    formLabel="First Name"
                    placeholder="Enter your first name"
                  />
                  <CustomInput
                    form={form}
                    name="lastName"
                    formLabel="Last Name"
                    placeholder="Enter your first name"
                  />
                </div>
                <CustomInput
                  form={form}
                  name="address1"
                  formLabel="Address"
                  placeholder="Enter your specific address"
                />
                <CustomInput
                  form={form}
                  name="city"
                  formLabel="City"
                  placeholder="Enter your city"
                />
                <div className="flex gap-4">
                  <CustomInput
                    form={form}
                    name="state"
                    formLabel="State"
                    placeholder="Example: NY"
                  />
                  <CustomInput
                    form={form}
                    name="postalCode"
                    formLabel="Postal Code"
                    placeholder="Example: 11101"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomInput
                    form={form}
                    name="dateOfBirth"
                    formLabel="Date of Birth"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomInput
                    form={form}
                    name="ssn"
                    formLabel="SSN"
                    placeholder="Example: 1234"
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>

            <p className="text-sm font-normal text-muted-foreground flex gap-1">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}

              <Link
                href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                className="text-sm cursor-pointer font-medium text-primary/80"
              >
                {type === "sign-in" ? "Sign up" : "Sign in"}
              </Link>
            </p>
          </form>
        </Form>
      )}
    </section>
  );
};

export default AuthForm;
