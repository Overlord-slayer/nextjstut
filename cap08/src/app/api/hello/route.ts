import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"

export async function GET(request: Request) {

  const origin = request.headers.get('origin')

  const remaining = await limiter.removeTokens(1)
  console.log('Sobrante:', remaining)

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Demasiadas peticiones al servidor",
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'text/plain',
      }
    })
  }
  return new Response('Hola!')
}