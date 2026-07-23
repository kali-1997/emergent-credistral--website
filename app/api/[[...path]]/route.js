import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  return NextResponse.json({ status: 'ok', service: 'Credistral AI' })
}

export async function POST(request, { params }) {
  try {
    const body = await request.json().catch(() => ({}))
    const path = (params?.path || []).join('/')

    if (path === 'contact') {
      // Log inbound contact request (no DB write in MVP)
      console.log('[contact]', JSON.stringify(body))
      return NextResponse.json({ status: 'ok', message: 'Message received. We will get back to you shortly.' })
    }

    return NextResponse.json({ status: 'ok', received: body })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: e.message }, { status: 500 })
  }
}
