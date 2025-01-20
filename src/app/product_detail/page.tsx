"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Lens } from '@/components/ui/lens';
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Filter, Heart, MessageCircle, Plus, RefreshCw, Shield, ShoppingCart, Star, ThumbsUp, Truck } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';
interface Product {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
    images: string[];
    features: string[];
    rating: number;
    reviews: number;
}
const ProductDetailsPage = () => {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Navy');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const [showFullGallery, setShowFullGallery] = useState(false);

    const product: Product = {
        name: "Classic Cotton T-Shirt",
        price: 29.99,
        description: "Premium quality cotton t-shirt with a comfortable fit and stylish design. Perfect for everyday wear.",
        rating: 4.5,
        reviews: 128,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Navy', 'Black', 'White', 'Gray'],
        images: [
            "/api/placeholder/800/800",
            "/api/placeholder/800/800",
            "/api/placeholder/800/800",
            "/api/placeholder/800/800",
        ],
        features: [
            "100% Premium Cotton",
            "Machine washable at 30°C",
            "Comfortable regular fit",
            "Sustainably sourced materials"
        ]
    };

    const qna = [
        {
            id: 1,
            question: "Is this shirt true to size?",
            answer: "Yes, this shirt follows standard sizing. For the best fit, please refer to our size chart.",
            author: "Sarah M.",
            date: "2024-01-05",
            helpful: 15
        },
        // Add more Q&A...
    ];
    const recommendedProducts = [
        {
            id: 1, name: "Denim Jeans", isNew: true,
            rating: 4.5,
            category: "Clothing",
            price: 59.99, image: "/api/placeholder/400/400"
        },
        {
            id: 2, name: "Hooded Sweatshirt", isNew: false,
            rating: 4.0,
            category: "Clothing",
            price: 49.99, image: "/api/placeholder/400/400"
        },
        {
            id: 3, name: "Casual Sneakers", isNew: true,
            rating: 2.5,
            category: "Footwear",
            price: 79.99, image: "/api/placeholder/400/400"
        },
        {
            id: 4, name: "Wool Sweater", isNew: false,
            rating: 4.5,
            category: "Clothing",
            price: 99.99, image: "/api/placeholder/400/400"
        },
        {
            id: 5, name: "Leather Belt", isNew: true,
            rating: 3.5,
            category: "Accessories",
            price: 29.99, image: "/api/placeholder/400/400"
        },
        {
            id: 6, name: "Fitted Cap", isNew: false,
            rating: 4.5,
            category: "Accessories",
            price: 19.99, image: "/api/placeholder/400/400"
        },
    ];

    const technicalDetails = {
        material: "100% Cotton",
        weight: "180 GSM",
        care: "Machine wash cold, tumble dry low",
        fit: "Regular fit",
        neckline: "Crew neck",
        sleeve: "Short sleeve",
        country: "Made in India",
        sku: "CT-1234-BL"
    };

    const benefits = [
        { icon: <Truck className="w-5 h-5" />, title: "Free Shipping", description: "On orders over $50" },
        { icon: <RefreshCw className="w-5 h-5" />, title: "Easy Returns", description: "30-day return policy" },
        { icon: <Shield className="w-5 h-5" />, title: "Secure Shopping", description: "100% secure checkout" }
    ];
    const reviews = [
        {
            id: 1,
            author: "John D.",
            rating: 5,
            date: "2024-01-10",
            title: "Great quality and fit",
            content: "This t-shirt exceeded my expectations. The material is soft and the fit is perfect.",
            likes: 24,
            helpful: true,
            verified: true,
            images: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
        },
        // Add more reviews...
    ];

    const imageVariants = {
        enter: { opacity: 0, x: 20 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };
    const [hovering, setHovering] = useState(false);


    return (
        <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                >
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <AnimatePresence mode="wait">
                            <Lens hovering={hovering} setHovering={setHovering}>

                                <motion.img
                                    key={currentImageIndex}
                                    // src={product.images[currentImageIndex]}
                                    src="./pot.jpg"
                                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                />
                            </Lens>
                        </AnimatePresence>

                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                                className="rounded-full shadow-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => setCurrentImageIndex(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                                className="rounded-full shadow-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((image, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`relative aspect-square rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-blue-600' : ''
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} - Thumbnail ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Product Details Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
                            <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <Badge variant="secondary">
                                    {product.reviews} reviews
                                </Badge>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-3xl font-bold">${product.price}</p>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        <Separator />

                        {/* Size Selector */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium mb-3">Size</h3>
                                <div className="flex gap-3">
                                    {product.sizes.map(size => (
                                        <TooltipProvider key={size}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setSelectedSize(size)}
                                                        className={`w-12 h-12 rounded-md flex items-center justify-center ${selectedSize === size
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        {size}
                                                    </motion.button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Select size {size}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selector */}
                            <div>
                                <h3 className="text-sm font-medium mb-3">Color</h3>
                                <div className="flex gap-3">
                                    {product.colors.map(color => (
                                        <TooltipProvider key={color}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setSelectedColor(color)}
                                                        className={`px-4 py-2 rounded-md ${selectedColor === color
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        {color}
                                                    </motion.button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Select {color.toLowerCase()}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <Button
                                size="lg"
                                className="flex-1 text-lg"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </Button>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="h-12 w-12"
                                        >
                                            <Heart className="w-5 h-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        {/* Features */}
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-600">
                                            <Plus className="w-4 h-4 text-blue-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>

            {/* Recommended Products Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16"
            >
                <h2 className="text-2xl font-bold mb-8">More Similar Products</h2>
                <motion.div
                    layout
                    className={`grid gap-6 
                           'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                        }`}
                >
                    <AnimatePresence>
                        {recommendedProducts.map(product => (
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
                                                width={400}
                                                height={400}
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
                                                        {/* <span className="ml-1.5 text-xs text-gray-500">({product.reviews})</span> */}
                                                        <span className="ml-1.5 text-xs text-gray-500">nice</span>
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
            </motion.div>

            {/* Benefits Bar */}
            <div className="py-8 bg-gray-50 rounded-lg mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center justify-center gap-4 p-4">
                            <div className="p-2 bg-white rounded-full shadow-sm">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="font-medium">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />


            {/* Product Information Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <h2 className="text-3xl font-bold mb-8">Product Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold mb-4">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our Classic Cotton T-Shirt combines timeless style with exceptional comfort.
                            Made from premium 100% cotton, this versatile piece is designed to be your
                            everyday essential that maintains its quality wash after wash.
                        </p>
                        <div className="mt-6">
                            <h4 className="font-medium mb-2">Key Features</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-blue-600" />
                                    Premium 100% cotton construction
                                </li>
                                <li className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-blue-600" />
                                    Reinforced stitching for durability
                                </li>
                                <li className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-blue-600" />
                                    Pre-shrunk to maintain fit
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                        <div className="grid gap-4">
                            {Object.entries(technicalDetails).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between py-2 border-b">
                                    <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                                    <span className="font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>


            <Separator />





            {/* Reviews Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Customer Reviews</h2>
                    <Button size="lg">Write a Review</Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                    <Card className="lg:col-span-1">
                        <CardContent className="p-6">
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">4.8</div>
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-6 h-6 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600">Based on 128 reviews</p>
                            </div>

                            <Separator className="my-6" />

                            <div className="space-y-3">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <div key={rating} className="flex items-center gap-3">
                                        <span className="w-3">{rating}</span>
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-yellow-400 rounded-full"
                                                style={{ width: `${rating * 20}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="lg:col-span-3 space-y-6">
                        {reviews.map((review) => (
                            <Card key={review.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold">{review.author}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating
                                                                ? 'text-yellow-400 fill-current'
                                                                : 'text-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-600">{review.date}</span>
                                            </div>
                                        </div>
                                        {review.verified && (
                                            <Badge variant="secondary">Verified Purchase</Badge>
                                        )}
                                    </div>

                                    <h4 className="font-medium mb-2">{review.title}</h4>
                                    <p className="text-gray-600">{review.content}</p>

                                    {review.images && review.images.length > 0 && (
                                        <div className="flex gap-2 mt-4">
                                            {review.images.map((image, index) => (
                                                <Image
                                                    key={index}
                                                    src={image}
                                                    width={80}
                                                    height={80}
                                                    alt={`Review image ${index + 1}`}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="text-sm text-gray-600">
                                            {review.helpful} found this helpful
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm">
                                                <ThumbsUp className="w-4 h-4 mr-1" />
                                                Helpful
                                            </Button>
                                            <Button variant="ghost" size="sm">Report</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </motion.section>

            <Separator />

            {/* Q&A Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Questions & Answers</h2>
                    <Button size="lg">Ask a Question</Button>
                </div>

                <div className="flex gap-4 mb-8">
                    <Input
                        type="text"
                        placeholder="Search questions..."
                        className="max-w-md"
                    />
                    <Button variant="outline">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </Button>
                </div>

                <div className="space-y-4">
                    {qna.map((item) => (
                        <Card key={item.id}>
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    <MessageCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <h3 className="font-medium mb-2">{item.question}</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                            <p className="text-gray-700">{item.answer}</p>
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-sm text-gray-500">
                                                    {item.helpful} people found this helpful
                                                </span>
                                                <div className="flex gap-2">
                                                    <Button variant="ghost" size="sm">
                                                        <ThumbsUp className="w-4 h-4 mr-1" />
                                                        Helpful
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-2">
                                            Asked by {item.author} · {item.date}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default ProductDetailsPage;

