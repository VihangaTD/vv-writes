import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create",
  description: "Create a blog",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
