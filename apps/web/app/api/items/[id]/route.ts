import { NextRequest, NextResponse } from "next/server"

const baseUrl = process.env.LARAVEL_BASE_URL

//* GET /api/item/:id ---> Fetch item by id
async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const {id} = await params
    const response = await fetch(`${baseUrl}/api/items/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json "
      }
    })
    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
        additional: "There has been an error"
      })
    }
    const data = await response.json()
    console.log(data)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  } catch (error) {
    return NextResponse.json({
      message: "There has been an error"
    })
  }
}

// * PUT /api/items/:id ---> Update an item
async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = params.id
    const body = await request.json()
    
    const formData = new FormData()
    const searchParams = new URLSearchParams()
    
    Object.keys(body).forEach(key => {
      formData.append(key, String(body[key]))
      searchParams.append(key, String(body[key]))
    })
    
    const queryString = searchParams.toString()

    const response = await fetch(`${baseUrl}/api/items/${itemId}?${queryString}`, {
      method: "PUT",
      body: formData,
      headers: {
        "Accept": "application/json",
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
      error,
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
    const response = await fetch(`${baseUrl}/api/items/${itemId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
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

export { GET, PUT, DELETE }
