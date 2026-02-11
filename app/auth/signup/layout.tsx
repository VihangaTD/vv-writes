import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create an account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}