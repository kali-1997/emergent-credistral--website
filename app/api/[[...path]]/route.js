import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  return NextResponse.json({ status: 'ok', service: 'Credistral AI' })
}

export async function POST(request, { params }) {
  try {
    const body = await request.json().catch(() => ({}))
    return NextResponse.json({ status: 'ok', received: body })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: e.message }, { status: 500 })
  }
}
