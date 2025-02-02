"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type Order = {
  id: string
  date: string
  total: number
  status: string
}

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "" })
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Here you would typically fetch the user data and order history from your backend
    setUser({ name: "John Doe", email: "john@example.com" })
    setOrders([
      { id: "1", date: "2023-05-01", total: 99.99, status: "Delivered" },
      { id: "2", date: "2023-05-15", total: 149.99, status: "Shipped" },
      { id: "3", date: "2023-05-30", total: 79.99, status: "Processing" },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <Link href="/edit-profile" className="text-primary hover:underline mt-4 inline-block">
          Edit Profile
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        {orders.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2">${order.total.toFixed(2)}</td>
                  <td className="py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  )
}

