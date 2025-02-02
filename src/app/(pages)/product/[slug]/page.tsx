import Image from "next/image"

// This is a placeholder for the product data. You'll need to fetch this from Sanity based on the slug.
const product = {
  name: "Sample Product",
  price: 49.99,
  description: "This is a sample product description. Replace this with actual product details from Sanity.",
  image: "/placeholder.svg",
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-primary-600 font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-primary-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

