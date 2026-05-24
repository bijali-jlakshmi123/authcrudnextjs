import { StackServerApp } from "@stackframe/stack";

const projectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;
const publishableClientKey = process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY;
const secretServerKey = process.env.STACK_SECRET_SERVER_KEY;

if (!projectId || !publishableClientKey || !secretServerKey) {
  // We throw a more descriptive error during development
  if (process.env.NODE_ENV === "development") {
    console.error("❌ Stack Auth Error: Missing environment variables.");
    console.error("Please ensure NEXT_PUBLIC_STACK_PROJECT_ID, NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY, and STACK_SECRET_SERVER_KEY are set in your .env.local file.");
    console.error("You can get these keys from https://stack-auth.com/");
  }
}

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: projectId || "00000000-0000-0000-0000-000000000000",
  publishableClientKey: publishableClientKey || "missing-key",
  secretServerKey: secretServerKey || "missing-key",
});
