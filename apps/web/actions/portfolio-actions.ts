import { PortfolioItem } from '@/data/types'

const normalizeItem = (item: any): PortfolioItem => {
  const categoryMap: Record<string, string> = {
    development: "Development",
    photography: "Photography",
    vfx: "Vfx",
    marketing: "Marketing",
    design: "Design",
  }
  
  // Extract specific fields based on the item type relationship
  const typeRel = item[item.type] || {}

  return {
    ...item,
    itemCategory: categoryMap[item.type] || "Development",
    status: item.status == true || item.status == 1 ? "Completed" : "In Progress",
    timeTook: item.timeTook ? `${item.timeTook} Days` : "Unknown",
    image: item.images && item.images.length > 0 ? item.images[0].url : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    
    // Arrays fallback
    technologies: (item.technologies || []).map((t: any) => t.name || t),
    
    // Development specific
    features: (typeRel.features || []).map((f: any) => f.name || f),
    category: typeRel.category || "Unknown",
    url: typeRel.url || "#",
    
    // Design specific
    brandOverview: typeRel.brandOverview || "",
    brandGoals: (typeRel.brandGoals || []).map((bg: any) => bg.name || bg),
    
    // Marketing specific
    platforms: (typeRel.platforms || []).map((p: any) => p.name || p),
    results: (typeRel.results || []).map((r: any) => r.name || r),
    
    // Photography / VFX specific
    gallery: (typeRel.gallery || []).map((g: any) => g.url || g),
    result: typeRel.result || "",
    overview: typeRel.overview || "",
  }
}

export async function getItems(): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch('/api/items')
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Laravel's paginate() returns the items in the 'data' field
    const items = data.data || data.items || data
    return Array.isArray(items) ? items.map(normalizeItem) : []
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
      method: 'PUT', // Using PUT for updates
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

// Search items by title
export async function searchByTitle(title: string): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch(`/api/search/searchByTitle/${title}`)
    if (!response.ok) return null
    const result = await response.json()
    const items = result.data?.items || result.data || []
    return Array.isArray(items) ? items.map(normalizeItem) : []
  } catch (error) {
    console.error(error)
    return null
  }
}

// Search items by type/category
export async function searchByType(type: string): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch(`/api/search/searchByType/${type}`)
    if (!response.ok) return null
    const result = await response.json()
    const items = result.data?.items || result.data || []
    return Array.isArray(items) ? items.map(normalizeItem) : []
  } catch (error) {
    console.error(error)
    return null
  }
}

// Search items by slug
export async function searchBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`/api/search/searchBySlug/${slug}`)
    if (!response.ok) return null
    const result = await response.json()
    const item = result.data?.item || result.data || null
    return item ? normalizeItem(item) : null
  } catch (error) {
    console.error(error)
    return null
  }
}