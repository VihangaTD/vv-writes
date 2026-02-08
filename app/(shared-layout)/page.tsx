import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpen, House, PenTool } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 sm:py-24">
      <div className="text-center pb-12">
        <h1 className="text-3xl font-extrabold tracking-tight  sm:text-6xl">
          Welcome to <span className="text-primary">VV</span>Writes
        </h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground mt-4">
          A place for ideas, trends, and knowledge shared by curious minds from our community who enjoy learning, sharing, and growing together.
        </p>
        <div className="flex flex-col sm:flex-row space-x-2 items-center justify-center pt-10">
          <Link
              className={buttonVariants({
                className: "mb-4 py-6 w-[200px]",
              })}
              href="/blog"
            >
              Start Reading
            </Link>
            <Link
              className={buttonVariants({
                variant: "outline",
                className: "mb-4 py-6 w-[200px]",
              })}
              href="/create"
            >
              Write a Post
            </Link>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent>
            <div className="relative flex w-[80px] bg-primary/20 items-center justify-center mb-6 mt-0 rounded-2xl">
              <House className="text-primary size-10 m-4" />
            </div>
            <h1 className="text-2xl font-bold ">Home</h1>
            <p className="text-muted-foreground line-clamp-3 mb-8">
              Return to the landing page
            </p>
            <p className="text-muted-foreground line-clamp-3">
              You are currently on the home page. This is the entry point our
              application
            </p>
          </CardContent>

          <CardFooter>
            <Link
              className={buttonVariants({
                variant: "outline",
                className: "mb-4 py-6 w-full",
              })}
              href="/"
            >
              Go Home
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <div className="relative flex w-[80px] bg-primary/20 items-center justify-center mb-6 mt-0 rounded-2xl">
              <BookOpen className="text-primary size-10 m-4" />
            </div>
            <h1 className="text-2xl font-bold ">Blog</h1>
            <p className="text-muted-foreground line-clamp-3 mb-8">
              Read our latest articles
            </p>
            <p className="text-muted-foreground line-clamp-3">
              Browse through a collection of interesting posts and tutorials.
            </p>
          </CardContent>

          <CardFooter>
            <Link
              className={buttonVariants({
                variant: "outline",
                className: "mb-4 py-6 w-full",
              })}
              href="/blog"
            >
              Visit Blog
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <div className="relative flex w-[80px] bg-primary/20 items-center justify-center mb-6 mt-0 rounded-2xl">
              <PenTool className="text-primary size-10 m-4" />
            </div>
            <h1 className="text-2xl font-bold ">Create Post</h1>
            <p className="text-muted-foreground line-clamp-3 mb-8">
              Share your thoughts
            </p>
            <p className="text-muted-foreground line-clamp-3">
              Have something to say? Create a new blog post and share it with
              the community.
            </p>
          </CardContent>

          <CardFooter >
            <Link
              className={buttonVariants({
                variant: "outline",
                className: "mb-4 py-6 w-full",
              })}
              href="/create"
            >
              Create Post
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
