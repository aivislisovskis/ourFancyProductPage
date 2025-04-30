"use client"

import Image from "next/image"
import { Heart, Shuffle, Star } from "lucide-react"
import { useState } from "react"

export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedSize, setSelectedSize] = useState(1)

    const colors = [
        { name: "Black", value: "bg-black", border: "border-black" },
        { name: "Gray", value: "bg-gray-400", border: "border-gray-400" },
        { name: "Navy", value: "bg-blue-800", border: "border-blue-800" },
        { name: "Red", value: "bg-red-600", border: "border-red-600" },
        { name: "Burgundy", value: "bg-red-800", border: "border-red-800" },
        { name: "Crimson", value: "bg-red-700", border: "border-red-700" },
        { name: "Ruby", value: "bg-red-600", border: "border-red-600" },
    ]

    const sizes = ["S", "M", "L", "XL", "XXL"]

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Product Image */}
                <div className="group relative overflow-hidden rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=400&width=400"
                                alt="Premium Jacket"
                                width={400}
                                height={400}
                                className="opacity-40 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute bottom-4 right-4 rounded-full bg-white p-2 shadow-md opacity-0 transition-opacity group-hover:opacity-100">
                            <Heart className="h-5 w-5 text-gray-600" />
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="mt-4 flex justify-center space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <button
                                key={i}
                                className="overflow-hidden rounded-md border-2 border-transparent hover:border-blue-600 focus:border-blue-600 focus:outline-none"
                            >
                                <div className="h-16 w-16 bg-gray-100">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <Image
                                            src="/placeholder.svg?height=50&width=50"
                                            alt={`Thumbnail ${i}`}
                                            width={50}
                                            height={50}
                                            className="opacity-40"
                                        />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-medium text-gray-800">Premium Jacket</h1>
                        <div className="mt-2 flex items-center space-x-2">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-4 w-4 ${star <= 3 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">(24 reviews)</span>
                        </div>
                        <p className="mt-4 text-3xl font-semibold text-gray-900">$299.99</p>
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 font-medium text-gray-700">Color: {colors[selectedColor].name}</h3>
                            <div className="flex flex-wrap gap-3">
                                {colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`h-10 w-10 rounded-full ${color.value} transition-all ${
                                            selectedColor === index
                                                ? `ring-2 ring-offset-2 ring-${color.border}`
                                                : "ring-1 ring-gray-300 hover:ring-2"
                                        }`}
                                        onClick={() => setSelectedColor(index)}
                                        aria-label={`Select ${color.name} color`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-medium text-gray-700">Size</h3>
                                <button className="text-sm text-blue-600 hover:underline">Size Guide</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        className={`min-w-[4rem] rounded-md px-4 py-2 text-center transition-all ${
                                            selectedSize === index
                                                ? "bg-blue-600 text-white"
                                                : "border border-gray-300 bg-white text-gray-700 hover:border-blue-600"
                                        }`}
                                        onClick={() => setSelectedSize(index)}
                                    >
                                        {size}
                                    </button>
                                ))}
                                <button className="flex min-w-[8rem] items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-all hover:border-blue-600">
                                    <Shuffle className="h-4 w-4" />
                                    <span>Surprise me</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 pt-4">
                        <button className="w-full rounded-md bg-blue-600 py-3 font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            Add to Cart
                        </button>
                        <button className="w-full rounded-md border border-gray-300 bg-white py-3 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Save for later
                        </button>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                        <h3 className="font-medium text-gray-800">Product Description</h3>
                        <p className="text-gray-600">
                            Our Premium Jacket is designed for medical professionals who demand both style and functionality. Made
                            with high-quality materials that are stain-resistant and comfortable for all-day wear.
                        </p>
                        <div className="pt-2">
                            <h4 className="text-sm font-medium text-gray-700">Features:</h4>
                            <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                                <li>Water-resistant exterior</li>
                                <li>Multiple pockets for storage</li>
                                <li>Antimicrobial fabric treatment</li>
                                <li>Available in multiple colors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
