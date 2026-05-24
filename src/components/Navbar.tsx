import Link from "next/link";
import { HomeIcon, Sprout } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./modeToggle";
import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";

async function Navbar() {
  const user = await stackServerApp.getUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/*logo*/}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Plantory
            </Link>
          </div>
          {/*nav components*/}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link href="/plants">
                  <Sprout className="w-4 h-4" />
                  <span className="hidden lg:inline">Plants</span>
                </Link>
              </Button>

              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link href="/">
                  <HomeIcon className="w-4 h-4" />
                  <span className="hidden lg:inline">Home</span>
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <ModeToggle />
              {user ? (
                <UserButton />
              ) : (
                <Button variant="default" asChild>
                  <Link href="/handler/sign-in">Sign In</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
