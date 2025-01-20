"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronRight,
  Heart,
  ShoppingBag,
  Star
} from 'lucide-react';
import Image from 'next/image';

const CategoryPage = () => {
  // Sample data - in real app would come from props or API
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "/api/placeholder/800/400",
      description: "Latest gadgets and tech",
      products: [
        { id: 1, name: "Wireless Earbuds", price: 899, rating: 4.5, reviews: 128, image: "/api/placeholder/400/400" },
        { id: 2, name: "Smart Watch", price: 2499, rating: 4.2, reviews: 89, image: "/api/placeholder/400/400" },
      ]
    },
    {
      id: 2,
      name: "Fashion",
      image: "/api/placeholder/800/400",
      description: "Trending styles and accessories",
      products: [
        { id: 3, name: "Denim Jacket", price: 1299, rating: 4.7, reviews: 156, image: "/api/placeholder/400/400" },
        { id: 4, name: "Sneakers", price: 999, rating: 4.4, reviews: 92, image: "/api/placeholder/400/400" },
      ]
    }
  ];

  return (
    <div className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <div className="max-w-8xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {categories.map((category) => (
            <section key={category.id} className="space-y-8">
              {/* Category Header - Mobile Optimized */}
              <div className="relative overflow-hidden rounded-lg md:rounded-none">
                <div className="flex flex-col md:block">
                  <div className="relative md:static">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={800}
                      height={400}
                      className="w-full h-32 md:h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center md:block">
                      <div className="px-4 md:px-8 space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{category.name}</h2>
                        <p className="text-sm md:text-base text-gray-200">{category.description}</p>
                        <Button variant="outline" className="text-sm md:text-base bg-white/10 hover:bg-white/20 text-white border-white/20">
                          View All <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {category.products.map((product) => (
                  <Card key={product.id} className="group rounded-lg md:rounded-none overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-row md:flex-col">
                      <div className="relative w-1/3 md:w-full aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <Heart className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                        </button>
                      </div>
                      
                      <div className="flex-1 p-3 md:p-4 space-y-1 md:space-y-2">
                        <h3 className="font-medium text-sm md:text-base text-gray-900 dark:text-white">{product.name}</h3>
                        
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 md:h-3.5 md:w-3.5 ${
                                i < product.rating 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-gray-200'
                              }`}
                            />
                          ))}
                          <span className="ml-1.5 text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                            ₹{product.price}
                          </span>
                          <Button size="sm" className="h-7 md:h-8 px-2 md:px-3">
                            <ShoppingBag className="h-3 w-3 md:h-3.5 md:w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* View More Card - Mobile Optimized */}
                <Card className="flex items-center rounded-lg md:rounded-none justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300">
                  <div className="text-center p-4 md:p-6">
                    <Button variant="outline" className="rounded-full h-10 w-10 md:h-12 md:w-12 mb-2 md:mb-3">
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                    <p className="font-medium text-sm md:text-base text-gray-600 dark:text-gray-300">View All Products</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">in {category.name}</p>
                  </div>
                </Card>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;