"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets, smartphones, laptops, and tech accessories",
    productCount: 245,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
  },
  {
    id: "clothing",
    name: "Fashion & Clothing",
    description: "Trendy apparel, shoes, and accessories for all occasions",
    productCount: 189,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-pink-500/20 to-rose-500/20",
    featured: true,
  },
  {
    id: "furniture",
    name: "Home & Furniture",
    description: "Stylish furniture and home decor to transform your space",
    productCount: 156,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-amber-500/20 to-orange-500/20",
    featured: false,
  },
  {
    id: "lifestyle",
    name: "Lifestyle & Wellness",
    description: "Health, beauty, and lifestyle products for better living",
    productCount: 134,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-green-500/20 to-emerald-500/20",
    featured: false,
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    description: "Equipment and gear for fitness, sports, and outdoor adventures",
    productCount: 98,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-purple-500/20 to-violet-500/20",
    featured: false,
  },
  {
    id: "books",
    name: "Books & Media",
    description: "Books, audiobooks, and educational materials for all ages",
    productCount: 267,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-indigo-500/20 to-blue-500/20",
    featured: false,
  },
  {
    id: "automotive",
    name: "Automotive",
    description: "Car accessories, tools, and automotive maintenance products",
    productCount: 87,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-gray-500/20 to-slate-500/20",
    featured: false,
  },
  {
    id: "garden",
    name: "Garden & Outdoor",
    description: "Gardening tools, plants, and outdoor living essentials",
    productCount: 76,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-lime-500/20 to-green-500/20",
    featured: false,
  },
]

export function CategoryGrid() {
  const featuredCategories = categories.filter((cat) => cat.featured)
  const regularCategories = categories.filter((cat) => !cat.featured)

  return (
    <div className="space-y-12">
      {/* Featured Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Categories</h2>
          <Badge variant="secondary">Most Popular</Badge>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${category.color} flex items-center justify-center overflow-hidden`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">{category.productCount} items</span>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                  <Button className="w-full group-hover:bg-primary/90" asChild>
                    <Link href={`/products?category=${category.id}`}>
                      Explore Category
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Categories */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">All Categories</h2>
          <p className="text-muted-foreground">Browse our complete selection of product categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${category.color} flex items-center justify-center overflow-hidden`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{category.name}</h3>
                    <span className="text-xs text-muted-foreground">{category.productCount} items</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={`/products?category=${category.id}`}>
                      View Products
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Stats */}
      <section className="bg-muted/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Why Shop by Category?</h2>
          <p className="text-muted-foreground">Find exactly what you need with our organized shopping experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {categories.reduce((sum, cat) => sum + cat.productCount, 0).toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Total Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">New Arrivals</div>
          </div>
        </div>
      </section>
    </div>
  )
}
