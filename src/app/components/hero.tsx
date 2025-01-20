import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';



const images = [
    {
        url: "/img1.jpg",
        title: "New Collection",
        subtitle: "Discover our latest Eco friendly products"
    },
    {
        url: "/img2.jpg",
        title: "playware",
        subtitle: "High quality products"
    },
    {
        url: "/img3.jpg",
        title: "Eco Friendly",
        subtitle: "100% Eco friendly products"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const nextSlide = () => {
        setIsAnimating(true);
        setCurrent((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        setIsAnimating(true);
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="relative mt-[68px] rounded-2xl h-[550px] w-full overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute inset-0 transform transition-all duration-700 ease-in-out",
                        index === current 
                            ? "translate-x-0 opacity-100" 
                            : index < current 
                                ? "-translate-x-full opacity-0"
                                : "translate-x-full opacity-0"
                    )}
                >
                    <div className="relative h-full w-full">
                        <Image
                            src={image.url}
                            alt={image.title}
                            height={600}
                            width={1200}
                            className={cn(
                                "h-full w-full object-cover transition-transform duration-700",
                                isAnimating ? "scale-105" : "scale-100"
                            )}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                        
                        {/* Decorative Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-white/20" />
                            <div className="absolute right-0 bottom-0 h-32 w-32 border-r-2 border-b-2 border-white/20" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className={cn(
                                "transform transition-all duration-700 delay-100",
                                isAnimating ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                            )}>
                                <h1 className="mb-4 text-6xl font-bold tracking-tight text-white">
                                    <span className="inline-block border-b-2 border-white/30 pb-2">
                                        {image.title}
                                    </span>
                                </h1>
                                <p className="text-xl font-light text-white/90 backdrop-blur-sm">
                                    {image.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110"
            >
                <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110"
            >
                <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            index === current ? "w-8 bg-white" : "bg-white/50"
                        )}
                    />
                ))}
            </div>  
        </div>
    );
};

export default HeroSlider;