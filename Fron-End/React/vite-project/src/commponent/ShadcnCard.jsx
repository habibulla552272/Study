import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const ShadcnCard = () => {
  return (
    <Card className="group relative w-72 overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src="https://www.bing.com/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?w=217&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Add to Cart Button (hidden until hover) */}
        <div className="absolute -bottom-40 group-hover:bottom-10 transform ease-in-out duration-700 inset-0 flex items-center justify-center ">
          <Button className="rounded-full bg-white text-black shadow-md transition-transform duration-300 hover:scale-105">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4 space-y-2">
        {/* Product Title */}
        <h3 className="text-lg font-semibold">Awesome Product</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          A short description about the product goes here. Stylish and modern.
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">$49.99</span>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}



export default ShadcnCard