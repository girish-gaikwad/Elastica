
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  ChevronRight, 
  ChevronLeft, 
  Plus,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Search,
  Filter,
  Info,
  Shield,
  Truck,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProductDetailsPage = () => {
  // ... (previous state declarations)

  const benefits = [
    { icon: <Truck className="w-5 h-5" />, title: "Free Shipping", description: "On orders over $50" },
    { icon: <RefreshCw className="w-5 h-5" />, title: "Easy Returns", description: "30-day return policy" },
    { icon: <Shield className="w-5 h-5" />, title: "Secure Shopping", description: "100% secure checkout" }
  ];

  // ... (previous product data)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        {/* Previous Image Gallery Section */}
        {/* Previous Product Details Section */}
      </div>

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
                              className={`w-4 h-4 ${
                                i < review.rating
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
                        <img
                          key={index}
                          src={image}
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

      {/* Recommended Products Section remains the same */}
    </div>
  );
};

export default ProductDetailsPage;