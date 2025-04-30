import { Facebook, Instagram, Search, ShoppingBag, Twitter, User } from "lucide-react"
import ProductPage from "./components/product-page"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col bg-white">
        <header className="border-b shadow-sm">
          <div className="container mx-auto flex items-center justify-between p-4">
            <div className="text-2xl font-bold uppercase tracking-wider text-gray-800">MEDSUPPLY</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li className="group relative flex cursor-pointer items-center text-gray-700 hover:text-blue-600">
                  Home <span className="ml-1 text-xs text-gray-500 transition-transform group-hover:rotate-180">▼</span>
                </li>
                <li className="group relative flex cursor-pointer items-center text-gray-700 hover:text-blue-600">
                  Shop <span className="ml-1 text-xs text-gray-500 transition-transform group-hover:rotate-180">▼</span>
                </li>
                <li className="group relative flex cursor-pointer items-center text-gray-700 hover:text-blue-600">
                  About <span className="ml-1 text-xs text-gray-500 transition-transform group-hover:rotate-180">▼</span>
                </li>
                <li className="group relative flex cursor-pointer items-center text-gray-700 hover:text-blue-600">
                  Contact{" "}
                  <span className="ml-1 text-xs text-gray-500 transition-transform group-hover:rotate-180">▼</span>
                </li>
                <li className="group relative flex cursor-pointer items-center text-gray-700 hover:text-blue-600">
                  Blog <span className="ml-1 text-xs text-gray-500 transition-transform group-hover:rotate-180">▼</span>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 transition-colors hover:text-blue-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 transition-colors hover:text-blue-600">
                <User className="h-5 w-5" />
              </button>
              <button className="relative text-gray-700 transition-colors hover:text-blue-600">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                0
              </span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gray-50">
          <ProductPage />
        </main>

        <footer className="border-t bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="space-y-6">
                <div className="text-2xl font-bold uppercase tracking-wider text-gray-800">MEDSUPPLY</div>
                <div className="flex space-x-4">
                  <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-800">Company</h3>
                <div className="h-1 w-16 bg-gray-300"></div>
                <div className="h-1 w-24 bg-gray-300"></div>
                <div className="h-1 w-20 bg-gray-300"></div>
                <div className="h-1 w-16 bg-gray-300"></div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-800">Support</h3>
                <div className="h-1 w-16 bg-gray-300"></div>
                <div className="h-1 w-24 bg-gray-300"></div>
                <div className="h-1 w-8 bg-gray-300"></div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Stay Updated</h3>
                <div className="flex overflow-hidden rounded-md shadow-sm">
                  <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full border-gray-200 bg-white p-3 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <button className="bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
