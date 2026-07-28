import { NextResponse } from "next/server"

const baseUrl = process.env.LARAVEL_BASE_URL

//* /api/items ---> Fetch all items
async function GET() {
  try {
    const response = await fetch(`${baseUrl}/api/items`)
    if (!response.ok) {
      return NextResponse.json({
        message: "Error fetching items",
        status: response.status,
      })
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export { GET }