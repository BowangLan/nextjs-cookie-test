export const GET = (request: Request) => {
  const c1 = "cookie1=cookieValue; Secure; HttpOnly; SameSite=Strict"
  const c2 = "cookie2=cookieValue2; Secure; HttpOnly; SameSite=Strict"
  const headers = new Headers()
  headers.set("Set-Cookie", c1)
  headers.append("Set-Cookie", c2)
  headers.set("Location", "/view-cookie")
  const res = new Response("Hello Worker", {
    status: 302,
    headers,
  })

  return res
}
