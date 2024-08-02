export const GET = (request: Request) => {
  const c1 = "cookie1=cookieValue; Secure; HttpOnly; SameSite=Strict"
  const c2 = "cookie2=cookieValue2; Secure; HttpOnly; SameSite=Strict"
  const res = new Response("Hello Worker", {
    status: 302,
    headers: {
      Location: "/view-cookie",
      "Set-Cookie": [c1, c2].join(","),
    },
  })

  return res
}
