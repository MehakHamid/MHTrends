"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, User } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MH Trends
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-secondary">Categories</button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/category/jewelry" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Jewelry
                  </Link>
                  <Link href="/category/bags" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bags
                  </Link>
                  <Link
                    href="/category/accessories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Accessories
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/products" className="hover:text-secondary">
              All Products
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hover:text-secondary">
              <ShoppingCart />
            </Link>
            <div className="relative group">
              <button className="hover:text-secondary">
                <User />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign In
                  </Link>
                  <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Up
                  </Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Order History
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

