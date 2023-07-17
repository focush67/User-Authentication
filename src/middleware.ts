import { NextRequest, NextResponse } from "next/server";

let token = '';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isPublic = path === "/login" || path === "/signup" || path === "/verifyEmail";

  const token = request.cookies.get("token")?.value || "";

  if(path === '/')
  {
    if(!token)
    {
        return NextResponse.redirect(new URL('/signup' , request.nextUrl));
    }

    else
    {
        return NextResponse.redirect(new URL('/profile' , request.nextUrl));
    }
  }

  else if(path === '/profile')
  {
    if(!token)
    {
        return NextResponse.redirect(new URL('/' , request.nextUrl));
    }

    else
    return undefined;
  }

  else if(path === '/login')
  {
    if(token)
    {
        return NextResponse.redirect(new URL('/' ,request.nextUrl));
    }
  }

  else if(path === '/signup')
  {
    if(token)
    {
        return NextResponse.redirect(new URL("/" , request.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/profile", "/profile/:path*", "/login", "/signup" , "/verifyEmail"],
};
