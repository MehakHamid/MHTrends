import { client } from "@/sanity/lib/client"
import FeaturedProducts from "@/Components/FeatureProduct"

async function getFeaturedProducts() {
    try {
        return await client.fetch(`*[_type == "product" && featured == true][0...3]{
      _id,
      name,
      price,
      "image": image.asset->url,
      "slug": slug.current
    }`)
    } catch (error) {
        console.error("Error fetching featured products:", error)
        return []
    }
}

export default async function Home() {
    const featuredProducts = await getFeaturedProducts()

    return (
        <div>
            <section className="bg-primary-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MH Trends</h1>
                    <p className="text-xl mb-8">Discover the latest fashion trends and express your unique style.</p>
                    <a
                        href="/products"
                        className="bg-white text-primary-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-primary-100 transition-colors"
                    >
                        Shop Now
                    </a>
                </div>
            </section>
            {featuredProducts.length > 0 ? (
                <FeaturedProducts products={featuredProducts} />
            ) : (
                <p className="text-center py-12">No featured products available at the moment.</p>
            )}
        </div>
    )
}

