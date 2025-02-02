"use client"

import { useState } from "react"
import ProductCard from "@/Components/ProductCard"
import ProductFilters from "@/Components/ProductFilter"

// This is a placeholder for the product data. You'll need to fetch this from Sanity.
const allProducts = [
  { _id: "1", name: "Product 1", price: 29.99, image: "/placeholder.svg", slug: "product-1", category: "Category 1" },
  { _id: "2", name: "Product 2", price: 39.99, image: "/placeholder.svg", slug: "product-2", category: "Category 2" },
  { _id: "3", name: "Product 3", price: 49.99, image: "/placeholder.svg", slug: "product-3", category: "Category 1" },
  { _id: "4", name: "Product 4", price: 59.99, image: "/placeholder.svg", slug: "product-4", category: "Category 3" },
]

const categories = ["Category 1", "Category 2", "Category 3"]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  const handleFilterChange = (filters: { category: string; minPrice: number; maxPrice: number }) => {
    const filtered = allProducts.filter((product) => {
      const categoryMatch = filters.category ? product.category === filters.category : true
      const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice
      return categoryMatch && priceMatch
    })
    setFilteredProducts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilters categories={categories} onFilterChange={handleFilterChange} />
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

