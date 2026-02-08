"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";
import MobileDropMenu from "./mobileDropMenu";

export function NavBar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            VV<span className="text-primary">Writes</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Home
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
          Blog
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/create">
          Create
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex">
          <div className="block mr-2">
            <SearchInput />
          </div>
          {isLoading ? null : isAuthenticated ? (
            <Button
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      toast.success("Logged out successfully");
                      router.push("/");
                    },
                    onError: (error) => {
                      toast.error(error.error.message);
                    },
                  },
                })
              }
            >
              Log out
            </Button>
          ) : (
            <div className="flex gap-2">
              <Link className={buttonVariants()} href="/auth/signup">
                Sign up
              </Link>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/auth/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <ThemeToggle />
        <div className="flex md:hidden">
         <MobileDropMenu/>
        </div>
      </div>
    </nav>
  );
}
