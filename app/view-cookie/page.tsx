import React from "react"
import { cookies } from "next/headers"

export default function Page() {
  const cookieStore = cookies()
  const cookie1 = cookieStore.get("cookie1")
  const cookie2 = cookieStore.get("cookie2")

  return (
    <div>
      <div>{`Cookie 1: ${cookie1?.value}`}</div>
      <div>{`Cookie 2: ${cookie2?.value}`}</div>
    </div>
  )
}
