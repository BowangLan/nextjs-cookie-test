export const GET = (request: Request) => {
  const res = new Response("Hello Worker", {
    status: 302,
    headers: {
      Location: "/view-cookie",
    },
  })

  res.headers.set(
    "Set-Cookie",
    "cookie1=cookieValue; Secure; HttpOnly; SameSite=Strict"
  )
  res.headers.append(
    "Set-Cookie",
    "cookie2=cookieValue2; Secure; HttpOnly; SameSite=Strict"
  )

  return res;
}
