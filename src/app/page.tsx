import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingCart, Check } from "lucide-react"
import { Button } from "./components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"

// Define the slider icons and their labels
const sliderIcons = [
  { icon: "/smile icon.png", alt: "Satisfaction" },
  { icon: "/peace icon.png", alt: "Quality" },
  { icon: "/lightning icon.png", alt: "Speed" },
  { icon: "/rainbow icon.png", alt: "Design" }
]

// Define the pill images for thumbnails and similar products
const pillImages = [
  "/image (5).png",
  "/image (6).png",
  "/image (7).png",
  "/image (8).png",
  "/image (9).png",
]

export default function ProductPage() {
  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="font-bold text-xl text-blue-900">MedSupply</div>
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-sm">Category</span>
              <span className="text-sm">Brand</span>
              <span className="text-sm">Contact</span>
              <span className="text-sm">FAQ's</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-6 h-6 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
                </div>
              </div>
              <div className="relative">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs text-blue-600">3</span>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <Image src="/image (5).png" alt="User avatar" width={32} height={32} className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Medical</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Pharmaceuticals</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Pain Relief</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-black">Analgesics</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-orange-100 rounded-lg overflow-hidden p-4">
                <Image
                    src="/image (8).png"
                    alt="Premium Pain Relief Medication"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
              </div>
              <div className="relative">
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {pillImages.map((src, i) => (
                      <div
                          key={i}
                          className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${i === 0 ? "border-blue-500" : "border-transparent"}`}
                      >
                        <Image
                            src={src}
                            alt={`Medication view ${i+1}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                      </div>
                  ))}
                </div>
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Premium Pain Relief Medication</h1>
                <p className="text-sm text-gray-500">PharmaCare Professional Series</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">4.5</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span>47 Reviews</span>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <span>93% of buyers have recommended this.</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-8">
                  {sliderIcons.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-1 h-20 bg-blue-100 rounded-full relative mb-2">
                          <div className="absolute bottom-0 w-1 h-12 bg-blue-500 rounded-full"></div>
                          <div className="absolute bottom-12 -left-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="w-6 h-6">
                          <Image 
                            src={item.icon} 
                            alt={item.alt} 
                            width={24} 
                            height={24}
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="text-xs rounded-full">
                  Surprise me
                </Button>
              </div>

              <div className="text-3xl font-bold">$71.56</div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg">5</span>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button className="flex-1 bg-blue-800 hover:bg-blue-900">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add To Cart
                </Button>
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-start space-x-2">
                  <div className="mt-1 text-red-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                      <path
                          d="M8 12H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="text-sm text-gray-500">Enter your Postal code for Delivery Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="max-w-7xl mx-auto px-6 py-8 border-t">
          <Tabs defaultValue="description">
            <TabsList className="border-b w-full justify-start space-x-8 px-0 h-auto pb-2">
              <TabsTrigger
                  value="description"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none px-0 pb-2"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none px-0 pb-2"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Product Description</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our Premium Pain Relief Medication provides fast, effective relief for headaches, muscle pain, 
                    and minor arthritis discomfort. Specially formulated with pharmaceutical-grade ingredients, 
                    this medication is gentle on the stomach while delivering maximum strength pain relief. 
                    Each tablet is coated for easy swallowing and begins working within minutes to reduce pain 
                    and inflammation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {[
                      "Fast-acting formula begins working within minutes",
                      "Long-lasting relief for up to 8 hours",
                      "Gentle on the stomach with protective coating",
                      "Reduces inflammation as well as pain",
                      "Non-drowsy formula won't affect alertness",
                      "Easy to swallow tablets with mild flavor",
                      "Appropriate for adults and children over 12",
                      "Clinically tested and physician recommended",
                    ].map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Product Details</h3>
                  <ul className="space-y-2">
                    {[
                      "Not intended for use by children under 12 without physician approval",
                      "Store in a cool, dry place away from direct sunlight",
                    ].map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">More Details</h3>
                  <ul className="space-y-2">
                    {[
                      "Active ingredient: Acetaminophen 500mg",
                      "Secondary ingredient: Anti-inflammatory compound",
                      "Package Variants: 30, 60, or 100 tablets",
                      "NDC: 12345-678-90",
                    ].map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="py-4">
                <p className="text-gray-500">Reviews content would go here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Items */}
        <div className="max-w-7xl mx-auto px-6 py-8 border-t">
          <h3 className="text-xl font-bold mb-6">Similar Products You Might Also Like</h3>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "/image (10).png",
                "/image (11).png",
                "/image (12).png",
                "/image (13).png",
                "/image (14).png",
                "/image (15).png"
              ].map((src, i) => (
                  <div key={i} className="border rounded-md p-2 relative group">
                    <button className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                      <Image
                          src={src}
                          alt={`Similar medication ${i+1}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-medium">PharmaSoothe {i+1}00</div>
                      <div className="font-bold">${(49.99 + i * 5).toFixed(2)}</div>
                      <div className="text-xs text-gray-500">{i+2} package sizes available</div>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={`w-3 h-3 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="text-xs ml-1">({80 + i * 10})</span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 -ml-3 z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 -mr-3 z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t mt-16 py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="font-bold text-xl text-gray-800 uppercase mb-4">MedSupply</div>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.11 8.03c-.052 1.16-.343 2.252-.963 3.276-1.09 1.803-3.13 2.677-5.483 2.335-2.309-.336-4.031-2.096-4.81-4.316-.28-.793-.434-1.635-.455-2.484-.025-1.054.175-2.03.754-2.96.589-.95 1.446-1.685 2.41-2.205C7.769 3.089 9.07 2.88 10.443 3c1.365.118 2.519.656 3.47 1.621.906.934 1.515 2.098 1.678 3.35.107.85.118 1.044.118 1.044l-7.46.815s.094 1.992 2.162 2.357c0 0 1.078.044 2.02-.494v1.239c0 .271-.159.615-.361.757-.588.415-1.361.638-2.039.639-.68.002-1.428-.222-2.02-.645-.205-.147-.356-.488-.356-.755v-.422H5.523v.434c0 .921.478 1.856 1.327 2.354 1.138.668 2.535.964 3.857.848 1.327-.116 2.629-.593 3.58-1.48.834-.778 1.226-1.72 1.226-2.697v-2.499c0-.189.043-.404.224-.573.49-.465 1.353-.676 1.353-.676V9.457s-.945.046-1.313.228c-.26.13-.366.333-.366.577z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2.5 15.5h-5v-7h5v7zm0-8.5h-5v-1h5v1z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="w-16 h-1 bg-gray-300 mb-2"></li>
                  <li className="w-24 h-1 bg-gray-300"></li>
                  <li className="w-20 h-1 bg-gray-300"></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="w-16 h-1 bg-gray-300 mb-2"></li>
                  <li className="w-24 h-1 bg-gray-300"></li>
                  <li className="w-20 h-1 bg-gray-300"></li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
