import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/signup", request.nextUrl));
  }

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  
}

export const config = {
  matcher: ["/profile", "/profile/:path*", "/login", "/signup"],
};
