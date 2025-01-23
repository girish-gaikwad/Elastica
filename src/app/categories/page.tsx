"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSampleStore } from '@/store/samplestore';
import {
  ChevronRight,
  Heart,
  ShoppingBag,
  Star,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const CategoryPage = () => {
  const { AllProducts } = useSampleStore()
  // Group products by category
  const categories = Object.entries(
    AllProducts.products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          id: product.category.replace(/\s+/g, '-').toLowerCase(),
          name: product.category,
          description: `Explore our range of high-quality ${product.category.toLowerCase()} products`,
          image: "/api/placeholder/800/400",
          products: []
        };
      }
      acc[product.category].products.push({
        ...product,
        rating: 4.5, // Default rating since not in original data
        reviews: Math.floor(Math.random() * 200), // Random review count
        image: "/api/placeholder/400/400"
      });
      return acc;
    }, {})
  ).map(([, category]) => category);

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl mb-8">
              <Image
                // src={category.image}
                src="/img2.jpg"

                alt={category.name}
                width={1200}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center">
                <div className="px-8 space-y-4 text-white">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-4xl font-bold tracking-tight">{category.name}</h2>
                    <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
                  </div>
                  <p className="text-lg max-w-2xl opacity-80">{category.description}</p>
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 transition-all"
                  >
                    Explore Collection <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  className="group border-2 border-transparent hover:border-primary/20 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        // src={product.image}
                        src="/img1.jpg"

                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all">
                        <Heart className="h-5 w-5 text-gray-700 hover:text-red-500" />
                      </button>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{product.subcategory}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-200'
                                }`}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <Button
                          size="lg"
                          className="rounded-full p-2 bg-primary hover:bg-primary/90 transition-colors"
                        >
                          <ShoppingBag className="h-5 w-5" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* View More Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/20 border-dashed border-2 border-primary/30 rounded-xl flex items-center justify-center hover:shadow-xl transition-all">
                <CardContent className="text-center p-6">
                  <div className="bg-primary/10 rounded-full p-3 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <ChevronRight className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                    View All Products
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    In {category.name} Collection
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;