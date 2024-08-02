import { NextRequest, NextResponse } from "next/server"

export const GET = () => {
  const headers = new Headers();
  headers.set("Set-Cookie", "cookie1=VALUE1; Path=/; HttpOnly");
  headers.append("Set-Cookie", "cookie2=VALUE2; Path=/; HttpOnly");
  headers.append("Location", "/view-cookie");

  const res = new NextResponse(null, {
    status: 302,
    headers,
  })

  return res
}
