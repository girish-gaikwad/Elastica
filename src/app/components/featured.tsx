import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      rating: 4.5,
      image: "/api/placeholder/300/300",
      description: "Premium noise-canceling wireless headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      rating: 4.8,
      image: "/api/placeholder/300/300",
      description: "Advanced fitness tracking smartwatch"
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      rating: 4.3,
      image: "/api/placeholder/300/300",
      description: "Ergonomic aluminum laptop stand"
    }
  ];

  const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="w-full max-w-6xl mx-auto px-2 md:px-4 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Featured Products</h2>
      
      <div className="relative">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevProduct}
            className="hidden md:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Card className="w-full md:mx-8">
            <CardHeader className="p-2 md:p-6">
              <div className="relative">
                <Image
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name}
                  width={300}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-between px-2 py-1 md:hidden">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevProduct}
                    className="bg-white/80 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextProduct}
                    className="bg-white/80 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <CardTitle className="text-lg md:text-xl">{products[currentIndex].name}</CardTitle>
                <Badge variant="secondary" className="flex items-center w-fit">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                  {products[currentIndex].rating}
                </Badge>
              </div>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                {products[currentIndex].description}
              </p>
            </CardContent>
            
            <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:p-6">
              <span className="text-xl md:text-2xl font-bold">
                ${products[currentIndex].price}
              </span>
              <Button className="w-full md:w-auto">Add to Cart</Button>
            </CardFooter>
          </Card>

          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextProduct}
            className="hidden md:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-4">
          {products.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full p-0 ${
                currentIndex === index ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;