import { NextRequest, NextResponse } from "next/server"

export const GET = (request: NextRequest) => {
  const c1 = "cookie1=cookieValue; Secure; HttpOnly; SameSite=Strict"
  const c2 = "cookie2=cookieValue2; Secure; HttpOnly; SameSite=Strict"
  const headers = new Headers()
  headers.set("Set-Cookie", c1)
  headers.append("Set-Cookie", c2)
  headers.set("Location", "/view-cookie")

  const url = request.nextUrl.clone()
  url.pathname = "/view-cookie"

  return NextResponse.redirect(url, {
    headers,
  })
}
