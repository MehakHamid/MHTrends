"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"

type Product = {
  _id: string
  name: string
  price: number
  images: string[]
  slug: string
  description: string
  discount?: number
}

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
      }, 1000)
      return () => clearInterval(interval)
    }
  }

  const handleMouseLeave = () => {
    setCurrentImageIndex(0)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary font-bold">${(product.price * (1 - (product.discount || 0) / 100)).toFixed(2)}</p>
          <button className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary-dark transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

