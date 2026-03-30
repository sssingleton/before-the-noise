import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.SITE_PASSWORD ?? "beforethenoise";

export function middleware(request: NextRequest) {
  // Allow the auth route through
  if (request.nextUrl.pathname === "/api/auth") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("btn_auth");
  if (cookie?.value === PASSWORD) {
    return NextResponse.next();
  }

  // Show password gate
  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|gate).*)"],
};
