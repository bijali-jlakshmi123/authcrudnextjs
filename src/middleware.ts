import { stackServerApp } from "@/stack";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Example: Protect /plants route
  if (request.nextUrl.pathname.startsWith("/plants")) {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.redirect(new URL("/handler/sign-in", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/plants/:path*"],
};
