"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Package, CreditCard, MessageCircle,
  ArrowRight, Instagram, Facebook, Twitter,
  ShoppingBag, RefreshCw
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';

const SupportPage = () => {
  const [activeChat, setActiveChat] = useState(false);

  return (
    <div className="min-h-screen mt-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/api/placeholder/1920/500"
          alt="Help Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <motion.h1
              className="text-6xl font-light mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How Can We Help?
            </motion.h1>
            <motion.p
              className="text-xl text-gray-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find answers, manage your orders, and get personalized support
            </motion.p>
          </div>
        </div>
      </div>

      {/* Quick Help Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Quick Solutions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Track Order", desc: "Check your order status and shipping updates" },
              { icon: RefreshCw, title: "Returns", desc: "Initiate returns or exchanges hassle-free" },
              { icon: ShoppingBag, title: "Products", desc: "Detailed product information and guides" },
              { icon: CreditCard, title: "Payment", desc: "Manage payments and billing inquiries" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                      <item.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Support Section */}
      <div id='faq' className="max-w-7xl mx-auto px-4 py-20">
        <Tabs defaultValue="faq" className="mb-20">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="faq" className="text-lg">FAQ</TabsTrigger>
            <TabsTrigger value="chat" className="text-lg">Live Chat</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <Input
                    placeholder="Search frequently asked questions..."
                    className="pl-14 h-14 text-lg"
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: "What is your return policy?",
                    a: "We offer a hassle-free 30-day return policy for all unused items in their original packaging. Returns are free for all orders within the United States. Simply initiate a return through your account dashboard or contact our support team for assistance."
                  },
                  {
                    q: "How long does shipping take?",
                    a: "Standard shipping typically takes 3-5 business days within the continental United States. Express shipping is available for 1-2 business day delivery. International shipping times vary by location, usually ranging from 7-14 business days."
                  },
                  {
                    q: "Do you ship internationally?",
                    a: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International customers may be responsible for customs duties and taxes upon delivery."
                  },
                  {
                    q: "How can I track my order?",
                    a: "Once your order ships, you'll receive a tracking number via email. You can also track your order in real-time through your account dashboard. Our system provides detailed updates from shipment to delivery."
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className=" rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg py-6 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="chat">
            <div className="max-w-2xl mx-auto text-center">
              {!activeChat ? (
                <div className="space-y-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gray-900/5 flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-3">Start a Live Chat</h3>
                    <p className="text-gray-600 text-lg">
                      Our support team is available Monday through Friday, 9am-6pm EST
                    </p>
                  </div>
                  <Button
                    onClick={() => setActiveChat(true)}
                    className="text-lg px-8 py-6 h-auto group bg-gray-900 hover:bg-gray-800"
                  >
                    Start Chat
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Card className="text-left">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-medium mb-6">Chat with Support</h3>
                      <div className="space-y-6">
                        <Select defaultValue="general">
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="order">Order Issue</SelectItem>
                            <SelectItem value="product">Product Question</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input placeholder="Your name" className="h-12" />
                        <Input placeholder="Email address" type="email" className="h-12" />
                        <Textarea
                          placeholder="How can we help you today?"
                          className="min-h-[150px] resize-none"
                        />
                        <Button className="w-full h-12 text-lg">Start Chat Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Product Support Categories */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Product Support</h2>
            <p className="text-gray-600 text-lg">Find detailed guides for specific product categories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Skincare",
                image: "/api/placeholder/600/400",
                topics: ["Product Usage Guidelines", "Ingredients Information", "Personalized Routine Building", "Skin Type Analysis"]
              },
              {
                title: "Makeup",
                image: "/api/placeholder/600/400",
                topics: ["Professional Application Tips", "Color Matching Guide", "Product Combinations", "Tools & Techniques"]
              },
              {
                title: "Hair Care",
                image: "/api/placeholder/600/400",
                topics: ["Hair Type Solutions", "Treatment Recommendations", "Styling Tutorials", "Product Selection Guide"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href="/product_help">
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white/20 text-lg px-8"
                      >
                        View Guides
                      </Button>
                    </Link>
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-gray-900 group-hover/item:scale-150 transition-all duration-300" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Social Links Footer */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-center space-x-6">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: MessageCircle, label: "Blog" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;