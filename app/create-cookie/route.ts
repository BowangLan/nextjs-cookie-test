import { NextRequest, NextResponse } from "next/server"

export const GET = () => {
  const res = new NextResponse(null, {
    status: 302,
    headers: {
      Location: "/view-cookie",
    },
  })
  res.cookies.set("cookie1", "cookieValue1")
  res.cookies.set("cookie2", "cookieValue2")

  return res
}
