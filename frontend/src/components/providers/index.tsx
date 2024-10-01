import { Toaster } from "@/components/ui/sonner";
import { GetLoggedInUserQuery } from "@/gql/graphql";
import { GET_LOGGED_IN_USER } from "@/graphql/queries/getLoggedInUser";
import useAppStore from "@/hooks/useAppStore";
import { useQuery } from "@apollo/client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { setUser } = useAppStore();
  const { loading: loadingUser } = useQuery<GetLoggedInUserQuery>(
    GET_LOGGED_IN_USER,
    {
      onCompleted: (data) => {
        if (!data.getLoggedInUser) {
          setUser(null);
          return router.push("/sign-in");
        }
        return setUser(data.getLoggedInUser);
      },
    }
  );

  return (
    <>
      <Toaster />
      {loadingUser ? (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
          <Loader2 className="animate-spin" size={50} />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Providers;
