import { NextResponse } from "next/server"

const allowOrigins = process.env.NODE_ENV === 'production'
  ? ['https://www.yoursite.com', 'https://yoursite.com']
  : ['http://localhost:3000']

export function middleware (request: Request) {

  const regex = new RegExp('/api/*')

  //if (request.url.includes('/api/'))
  //if (regex.test(request.url))
  const origin = request.headers.get('origin')
  console.log(origin)
  if (origin && !allowOrigins.includes(origin)) {
    return new NextResponse(null, {
      status:400,
      statusText: 'Mala solicitud',
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  }

  console.log('Middleware!')

  console.log(request.method)
  console.log(request.url)

  

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}