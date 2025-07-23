import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("shop.")) {
    return NextResponse.redirect("https://shopify.com", 301);
  }

  if (host.startsWith("app.")) {
    return NextResponse.redirect("https://myapp.com", 301);
  }

  return NextResponse.next();
}
