"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, X } from "lucide-react"

const categories = [
  { id: "electronics", name: "Electronics", count: 45 },
  { id: "clothing", name: "Clothing", count: 32 },
  { id: "furniture", name: "Furniture", count: 18 },
  { id: "lifestyle", name: "Lifestyle", count: 24 },
  { id: "sports", name: "Sports & Outdoors", count: 15 },
  { id: "books", name: "Books", count: 28 },
]

const brands = [
  { id: "apple", name: "Apple", count: 12 },
  { id: "samsung", name: "Samsung", count: 8 },
  { id: "nike", name: "Nike", count: 15 },
  { id: "adidas", name: "Adidas", count: 10 },
  { id: "sony", name: "Sony", count: 6 },
]

export function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 1000])
    setSelectedRating(null)
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0 || selectedRating !== null

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId)
                return (
                  <Badge key={categoryId} variant="secondary" className="text-xs">
                    {category?.name}
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={() => handleCategoryChange(categoryId, false)}
                    />
                  </Badge>
                )
              })}
              {selectedBrands.map((brandId) => {
                const brand = brands.find((b) => b.id === brandId)
                return (
                  <Badge key={brandId} variant="secondary" className="text-xs">
                    {brand?.name}
                    <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => handleBrandChange(brandId, false)} />
                  </Badge>
                )
              })}
              {selectedRating && (
                <Badge variant="secondary" className="text-xs">
                  {selectedRating}+ Stars
                  <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSelectedRating(null)} />
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="w-full" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={brand.id}
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                  />
                  <label htmlFor={brand.id} className="text-sm cursor-pointer">
                    {brand.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">({brand.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Customer Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                className="flex items-center space-x-2 cursor-pointer hover:bg-muted/50 p-1 rounded"
                onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
              >
                <Checkbox checked={selectedRating === rating} />
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">& up</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
