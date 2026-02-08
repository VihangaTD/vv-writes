import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useConvexAuth } from "convex/react";
import {
  BookOpen,
  House,
  LogIn,
  LogOutIcon,
  Menu,
  PenTool,
  UserRoundPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function MobileDropMenu() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {isOpen ? <X /> : <Menu />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="pr-10 pl-4 py-4">
        <DropdownMenuItem
          asChild
          onClick={() => setOpen(false)}
          className="text-lg "
        >
          <Link href="/" className="flex gap-4 items-center">
            <House />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          onClick={() => setOpen(false)}
          className="text-lg "
        >
          <Link href="/blog" className="flex gap-4 items-center">
            <BookOpen />
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          onClick={() => setOpen(false)}
          className="text-lg "
        >
          <Link href="/create" className="flex gap-4 items-center">
            <PenTool />
            Create
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {isLoading ? null : isAuthenticated ? (
          <DropdownMenuItem
            className="text-lg flex gap-4 items-center"
            variant="destructive"
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
            <LogOutIcon />
            Log out
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              <Link href="/auth/signup" className="flex gap-4 items-center">
                <UserRoundPlus />
                Sign up
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              <Link href="/auth/login" className="flex gap-4 items-center">
                <LogIn />
                Log in
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
