import { PortfolioItem } from '@/data/types'

export async function getItems(): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch('/api/items')
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    const items = data.items // ! Change this according to the response structure.
    return items
  } catch (error) {
    console.log(error)
    return null
  }
}

// Get a single item by ID
export async function getItem(id: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`/api/items/${id}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Assuming the response structure is { item: ... }
    return data.item
  } catch (error) {
    console.log(error)
    return null
  }
}

// Create a new item
export async function createItem(item: Omit<PortfolioItem, 'id'>): Promise<PortfolioItem | null> {
  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Assuming the response structure is { item: ... }
    return data.item
  } catch (error) {
    console.log(error)
    return null
  }
}

// Update an existing item (partial update)
export async function updateItem(id: string, updates: Partial<PortfolioItem>): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'POST', // Using POST for partial updates
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    })
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Assuming the response structure is { item: ... }
    return data.item
  } catch (error) {
    console.log(error)
    return null
  }
}

// Delete an item by ID
export async function deleteItem(id: string): Promise<boolean | null> {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      return null
    }
    // Assuming the deletion was successful
    return true
  } catch (error) {
    console.log(error)
    return null
  }
}