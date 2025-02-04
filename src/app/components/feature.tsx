import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { useSampleStore } from '@/store/samplestore';




export default function ProductCarousel() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  const{FeaturedProducts}=useSampleStore();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="py-8 md:py-10 px-4 bg-CustomColor">
      <div className="w-full md:px-20 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold tracking-tight mb-8 text-green-800"
        >
          Featured FeaturedProducts
        </motion.h2>

        <Carousel className="w-full relative">
          {isMobile && (
            <div className="absolute right-12 -top-11 border">
              <CarouselPrevious className="hover:bg-green-100 text-green-800" />
              <CarouselNext className="hover:bg-green-100 text-green-800" />
            </div>
          )}
          <CarouselContent className="-ml-2 md:-ml-4">
            {FeaturedProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="border border-green-100 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover rounded-t-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="absolute top-2 right-2 bg-green-100 text-green-800 border-green-200"
                      >
                        {product.tag}
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-medium mb-2 text-sm md:text-base text-green-900"
                    >
                      {product.name}
                    </motion.h3>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-lg font-bold text-green-800"
                      >
                        ₹{product.price}
                      </motion.span>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link href="/product_detail" >
                        <Button 
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
                          >
                          Add to Cart
                        </Button>
                          </Link>

                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious className="hover:bg-green-100 text-green-800" />
              <CarouselNext className="hover:bg-green-100 text-green-800" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}