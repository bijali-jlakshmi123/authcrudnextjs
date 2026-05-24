import { Button } from "@/components/ui/button";
import { stackServerApp } from "@/stack";
import Link from "next/link";

export default async function Home() {
  const user = await stackServerApp.getUser();

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center p-4">
      <div className="max-w-2xl w-full space-y-8 p-8 rounded-3xl bg-card border shadow-xl backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {user ? `Welcome back, ${user.primaryEmail}` : "Modern Auth & CRUD"}
        </h1>
        
        <p className="text-xl text-muted-foreground">
          {user 
            ? "You are successfully authenticated. Explore the plant directory or manage your account."
            : "A premium boilerplate with Stack Auth, Shadcn UI, and Next.js 15."}
        </p>

        <div className="flex items-center justify-center gap-4">
          {user ? (
            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="/plants">Get Started</Link>
            </Button>
          ) : (
            <>
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="/handler/sign-up">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                <Link href="/handler/sign-in">Sign In</Link>
              </Button>
            </>
          )}
        </div>

        <div className="pt-8 grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="font-bold text-primary">Stack Auth</p>
            <p>Secure & Modern</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="font-bold text-primary">Next.js 15</p>
            <p>App Router</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50">
            <p className="font-bold text-primary">Tailwind 4</p>
            <p>Premium UI</p>
          </div>
        </div>
      </div>
    </main>
  );
}
