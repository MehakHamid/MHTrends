import { useState } from "react"

type FilterProps = {
  categories: string[]
  onFilterChange: (filters: { category: string; minPrice: number; maxPrice: number }) => void
}

const ProductFilters = ({ categories, onFilterChange }: FilterProps) => {
  const [category, setCategory] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  const handleFilterChange = () => {
    onFilterChange({ category, minPrice, maxPrice })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="minPrice" className="block mb-2">
          Min Price
        </label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="maxPrice" className="block mb-2">
          Max Price
        </label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleFilterChange}
        className="w-full bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default ProductFilters

