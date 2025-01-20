"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Heart, Search, SlidersHorizontal, StarIcon, XIcon, RefreshCwIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Image from 'next/image';

// Products array remains the same
const products = [
  {
    id: 1,
    name: "Medium Pot - Plam",
    price: 80,
    category: "Pots",
    rating: 4.5,
    reviews: 128,
    image: "/api/placeholder/300/300",
    stock: 15,
    isNew: true,
    soldCount: 250
  },

  {
    id: 2,
    name: "Small Pot - Snake Plant",
    price: 30,
    category: "Pots",
    rating: 4.8,
    reviews: 54,
    image: "/api/placeholder/300/300",
    stock: 10,
    isNew: false,
    soldCount: 100
  },
  {
    id: 3,
    name: "Large Pot - Peace Lily",
    price: 120,
    category: "Pots",
    rating: 4.9,
    reviews: 88,
    image: "/api/placeholder/300/300",
    stock: 8,
    isNew: false,
    soldCount: 150
  },
  {
    id: 4,
    name: "Ceramic Pot - Cactus",
    price: 45,
    category: "Pots",
    rating: 4.7,
    reviews: 76,
    image: "/api/placeholder/300/300",
    stock: 20,
    isNew: true,
    soldCount: 180
  },
  {
    id: 5,
    name: "Decorative Pot - Bonsai",
    price: 150,
    category: "Pots",
    rating: 4.6,
    reviews: 102,
    image: "/api/placeholder/300/300",
    stock: 5,
    isNew: false,
    soldCount: 210
  },
  {
    id: 6,
    name: "Hanging Pot - Fern",
    price: 60,
    category: "Pots",
    rating: 4.4,
    reviews: 64,
    image: "/api/placeholder/300/300",
    stock: 12,
    isNew: false,
    soldCount: 170
  },

  // Add similar data for other products
];


const ProductsPage = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 500],
    rating: 0,
    sortBy: 'popularity',
    onlyNew: false,
    inStock: false
  });
  const [searchQuery, setSearchQuery] = useState('');
  // const [cart, setCart] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Categories and sort options remain the same

  // const categories = ['all', ...new Set(products.map(product => product.category))];
  const sortOptions = [
    { value: 'popularity', label: 'Best Selling' },
    { value: 'priceLow', label: 'Price: Low to High' },
    { value: 'priceHigh', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];
  const filteredProducts = products
    .filter(product => {
      if (filters.category !== 'all' && product.category !== filters.category) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (product.rating < filters.rating) return false;
      if (filters.onlyNew && !product.isNew) return false;
      if (filters.inStock && product.stock <= 0) return false;
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'priceLow': return a.price - b.price;
        case 'priceHigh': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.isNew ? 1 : -1;
        default: return b.soldCount - a.soldCount;
      }
    });

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(true);

  const FilterPanel = () => {
    // Added new filter options
    const [filters, setFilters] = React.useState({
      category: '',
      priceRange: [0, 500],
      rating: 0,
      onlyNew: false,
      inStock: false,
      brands: [],
      colors: [],
      sizes: [],
      discount: 0,
      freeShipping: false
    });

    // Sample data
    const categories = ['electronics', 'clothing', 'books', 'home'];
    // const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];
    // const colors = ['Red', 'Blue', 'Black', 'White', 'Green'];
    // const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const resetFilters = () => {
      setFilters({
        category: '',
        priceRange: [0, 500],
        rating: 0,
        onlyNew: false,
        inStock: false,
        brands: [],
        colors: [],
        sizes: [],
        discount: 0,
        freeShipping: false
      });
    };

    return (
      <Card className="w-full max-w-md bg-gradient-to-b from-slate-50 to-white shadow-xl border-0">
        <CardContent className="space-y-6 p-6">
          {/* Header with Reset */}
          <div className="flex justify-between items-center pb-2">
            <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
            >
              <RefreshCwIcon size={14} />
              Reset
            </button>
          </div>

          {/* Category Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
              Category
            </h3>
            <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
              <SelectTrigger className="w-full bg-white border-slate-200 hover:border-slate-300 transition-colors">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="hover:bg-slate-50">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium text-slate-900">Price Range</h3>
              <div className="text-sm font-medium text-slate-600">
                ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
              </div>
            </div>
            <Slider
              defaultValue={filters.priceRange}
              max={500}
              step={10}
              onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
              className="mt-2"
            />
          </div>

          {/* Brands Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-900">Brands</h3>
            <div className="flex flex-wrap gap-2">
              {/* {brands.map((brand) => (
                <Badge
                  key={brand}
                  variant="outline"
                  className={`cursor-pointer transition-colors ${filters.brands.includes(brand)
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                    : 'hover:bg-slate-50'
                    }`}
                  onClick={() => {
                    const newBrands = filters.brands.includes(brand)
                      ? filters.brands.filter(b => b !== brand)
                      : [...filters.brands, brand];
                    setFilters({ ...filters, brands: newBrands });
                  }}
                >
                  {brand}
                </Badge>
              ))} */}
            </div>
          </div>

          {/* Colors Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-900">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {/* {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    const newColors = filters.colors.includes(color)
                      ? filters.colors.filter(c => c !== color)
                      : [...filters.colors, color];
                    setFilters({ ...filters, colors: newColors });
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${filters.colors.includes(color)
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {color}
                </button>
              ))} */}
            </div>
          </div>

          {/* Sizes Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-900">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {/* {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    const newSizes = filters.sizes.includes(size)
                      ? filters.sizes.filter(s => s !== size)
                      : [...filters.sizes, size];
                    setFilters({ ...filters, sizes: newSizes });
                  }}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${filters.sizes.includes(size)
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {size}
                </button>
              ))} */}
            </div>
          </div>

          {/* Rating Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-900">Minimum Rating</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters({ ...filters, rating })}
                  className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[40px] ${filters.rating === rating
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200/50'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                >
                  <StarIcon size={16} className={filters.rating === rating ? 'fill-white' : 'fill-slate-400'} />
                </button>
              ))}
            </div>
          </div>

          {/* Discount Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium text-slate-900">Minimum Discount</h3>
              <div className="text-sm font-medium text-slate-600">
                {filters.discount}% off
              </div>
            </div>
            <Slider
              value={[filters.discount]}
              max={75}
              step={5}
              onValueChange={([value]) => setFilters({ ...filters, discount: value })}
              className="mt-2"
            />
          </div>

          {/* Toggle Switches Section */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">New Arrivals Only</label>
              <Switch
                checked={filters.onlyNew}
                onCheckedChange={(checked) => setFilters({ ...filters, onlyNew: checked })}
                className="data-[state=checked]:bg-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">In Stock Only</label>
              <Switch
                checked={filters.inStock}
                onCheckedChange={(checked) => setFilters({ ...filters, inStock: checked })}
                className="data-[state=checked]:bg-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Free Shipping</label>
              <Switch
                checked={filters.freeShipping}
                onCheckedChange={(checked) => setFilters({ ...filters, freeShipping: checked })}
                className="data-[state=checked]:bg-indigo-500"
              />
            </div>
          </div>

          {/* Active Filters Summary */}
          {(filters.brands.length > 0 || filters.colors.length > 0 || filters.sizes.length > 0) && (
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-medium text-slate-900">Active Filters</h3>
              <div className="flex flex-wrap gap-2">
                {filters.brands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="gap-1">
                    {brand}
                    <XIcon
                      size={14}
                      className="cursor-pointer"
                      onClick={() => setFilters({
                        ...filters,
                        brands: filters.brands.filter(b => b !== brand)
                      })}
                    />
                  </Badge>
                ))}
                {filters.colors.map((color) => (
                  <Badge key={color} variant="secondary" className="gap-1">
                    {color}
                    <XIcon
                      size={14}
                      className="cursor-pointer"
                      onClick={() => setFilters({
                        ...filters,
                        colors: filters.colors.filter(c => c !== color)
                      })}
                    />
                  </Badge>
                ))}
                {filters.sizes.map((size) => (
                  <Badge key={size} variant="secondary" className="gap-1">
                    Size {size}
                    <XIcon
                      size={14}
                      className="cursor-pointer"
                      onClick={() => setFilters({
                        ...filters,
                        sizes: filters.sizes.filter(s => s !== size)
                      })}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };


  // Filtered products logic remains the same

  // const ProductCard = ({ product }) => {
  //   const isFavorite = favorites.includes(product.id);

  //   return (
  //     <Card className="group overflow-hidden rounded-none shadow-sm hover:shadow-lg transition-all duration-300">
  //       <div className="flex flex-col">
  //         <div className="relative aspect-square overflow-hidden">
  //           <img
  //             src={product.image}
  //             alt={product.name}
  //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  //           />
  //           {product.isNew && (
  //             <Badge className="absolute top-2 left-2 text-white px-2 py-0.5 text-xs">New</Badge>
  //           )}
  //           <button
  //             onClick={() => setFavorites(prev =>
  //               isFavorite ? prev.filter(id => id !== product.id) : [...prev, product.id]
  //             )}
  //             className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200"
  //           >
  //             <Heart className={`h-4 w-4 ${isFavorite ? 'fill-pink-500 text-pink-500' : 'text-gray-600'}`} />
  //           </button>
  //         </div>

  //         <CardContent className="p-4 space-y-2">
  //           <div className="space-y-1">
  //             <div className="flex justify-between items-start gap-2">
  //               <h3 className="font-medium text-base text-gray-800 leading-tight truncate">{product.name}</h3>
  //               <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs whitespace-nowrap">{product.category}</Badge>
  //             </div>

  //             <div className="flex items-center">
  //               {[...Array(5)].map((_, i) => (
  //                 <Star
  //                   key={i}
  //                   className={`h-3 w-3 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
  //                 />
  //               ))}
  //               <span className="ml-1.5 text-xs text-gray-500">({product.reviews})</span>
  //             </div>
  //           </div>

  //           <div className="flex justify-between items-center pt-1">
  //             <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
  //             <Button
  //               onClick={() => setCart([...cart, product])}
  //               className="text-white shadow-md shadow-pink-200/50 transition-all duration-200 text-sm px-3 py-1 h-8"
  //             >
  //               <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
  //               Add to Cart
  //             </Button>
  //           </div>
  //         </CardContent>
  //       </div>
  //     </Card>
  //   );
  // };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 pb-5">

      <div className='w-full h-80 bg-gray-200 flex items-center justify-center'>
        deefe
      </div>

      <main className="max-w-8xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <motion.div
            className="hidden md:flex flex-col border sticky top-24 h-fit"
            animate={{ width: isFilterPanelOpen ? 'auto' : '40px' }}
            transition={{ duration: 0.3 }}
          >
            {isFilterPanelOpen ? (
              <>
                <FilterPanel />
                <Button
                  onClick={() => setIsFilterPanelOpen(false)}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsFilterPanelOpen(true)}
                className="w-8 h-full rounded-none bg-white hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </motion.div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search beautiful products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white rounded-full"
                />
              </div>

              <div className='flex gap-4'>

                <Select
                  value={filters.sortBy}
                  onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                >
                  <SelectTrigger className="w-full md:w-48 bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Mobile Filters */}
                <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button className="md:hidden w-full mb-4 bg-gray-900">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="p-0">  
                    <FilterPanel />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <motion.div
              layout
              className={`grid gap-6 ${isFilterPanelOpen
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                }`}
            >
              <AnimatePresence>
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group overflow-hidden md:rounded-none shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-row md:flex-col">
                        {/* Mobile: Image on left */}
                        <div className="relative w-1/3 md:w-full aspect-square md:aspect-square overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.isNew && (
                            <Badge className="absolute top-2 left-2 text-white px-2 py-0.5 text-xs">New</Badge>
                          )}
                          <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>

                        {/* Mobile: Content on right */}
                        <div className="flex-1 md:w-full">
                          <CardContent className="p-4 space-y-2">
                            <div className="space-y-1">
                              <div className="flex justify-between items-start gap-2">
                                <div className="space-y-1">
                                  <h3 className="font-medium text-base text-gray-800 leading-tight">{product.name}</h3>
                                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">{product.category}</Badge>
                                </div>
                              </div>

                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                                  />
                                ))}
                                <span className="ml-1.5 text-xs text-gray-500">({product.reviews})</span>
                              </div>
                            </div>

                            <div className="flex justify-between items-center pt-1">
                              <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                              <Button className="text-white shadow-md shadow-pink-200/50 transition-all duration-200 text-sm px-3 py-1 h-8">
                                <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                                Add to Cart
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPage;