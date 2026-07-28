import { NextRequest, NextResponse } from "next/server"

const baseUrl = process.env.LARAVEL_BASE_URL

//* GET /api/item/:id ---> Fetch item by id
async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = params.id
    const response = await fetch(`${baseUrl}/api/items/${itemId}`, {
      headers: {
        "Accept": "Application/json",
      }
    })
    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
      })
    }
    const data = await response.json()
    return NextResponse.json({
      status: 200,
      data,
    })
  } catch (error) {
    return NextResponse.json(error)
  }
}

// * POST /api/items/:id ---> Update an item
async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = params.id
    const body = await request.json()
    const response = await fetch(`${baseUrl}/api/items/${itemId}`, {
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
      })
    }
    const data = await response.json()
    return NextResponse.json({
      status: 201,
      message: "item updated successfully",
      data,
    })
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: "Error updating item",
      error, // this is for development stage and debugging TODO: remove the error object from the response object
    })
  }
}

// * DELETE /api/items/:id ---> Delete an item
async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = params.id
    const response = await fetch(`${baseUrl}/api/items/${itemId}`)
    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
      })
    }
    const data = await response.json()
    return NextResponse.json({
      status: 201,
      message: "item updated successfully",
      data,
    })
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: "Error updating item",
      error, // this is for development stage and debugging TODO: remove the error object from the response object
    })
  }
}

export { GET, POST, DELETE }
