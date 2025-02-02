import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MH Trends</h3>
            <p>Your one-stop destination for the latest fashion trends.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@mhtrends.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 MH Trends. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

