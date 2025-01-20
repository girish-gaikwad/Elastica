"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Menu, ShoppingBag, User, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBanner from './announcementBanner';
import { cn } from '@/lib/utils';



import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
    subsets: ['latin'], // Specify the subset you need
    weight: ['400', '700', '900'], // Cinzel supports 400, 700, and 900 weights
  });
const ResponsiveNavbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animated search component with enhanced transitions
    const SearchField = () => (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-full bg-white z-50 overflow-hidden"
        >
            <div className="max-w-3xl mx-auto h-16 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                    placeholder="Search products..."
                    className="flex-1 border-none focus-visible:ring-0 px-4 text-lg placeholder:text-gray-400"
                    autoFocus
                />
                <motion.button
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <X className="w-5 h-5" />
                </motion.button>
            </div>
        </motion.div>
    );

    // Enhanced shopping cart with animations
    const ShoppingCart = () => {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-green-800 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                0
                            </span>
                        </motion.div>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col"
                    >
                        <h2 className="font-light text-2xl mb-4">Your Cart</h2>
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Your cart is empty
                        </div>
                        <Button className="w-full mt-auto bg-green-800 hover:bg-green-700">
                            Checkout
                        </Button>
                    </motion.div>
                </SheetContent>
            </Sheet>
        );
    };
   
    const categoryContent = {
        category: {
            categories: [
                {
                    title: "Home and Garden",
                    image: "/img1.jpg",
                    description: "Start your routine right",
                    subcategories: ["Pots", "Desk", "Plates"]
                },
                {
                    title: "Sports and Fitness",
                    image: "/img2.jpg",
                    description: "Lock in hydration",
                    subcategories: ["frisbee", "wedge", "Dumbell"]
                },
                {
                    title: "Toys",
                    image: "/img3.jpg",
                    description: "Target specific concerns",
                    subcategories: ["car", "comming soon", "comming soon"]
                }
            ],
        },
        new_arrivals: {
            categories: [
                {
                    title: "Face",
                    image: "/api/placeholder/400/300",
                    description: "Create your perfect base",
                    subcategories: ["Foundation", "Concealer", "Powder"]
                },
                {
                    title: "Eyes",
                    image: "/api/placeholder/400/300",
                    description: "Make your eyes pop",
                    subcategories: ["Eyeshadow", "Mascara", "Eyeliner"]
                },
                {
                    title: "Lips",
                    image: "/api/placeholder/400/300",
                    description: "Complete your look",
                    subcategories: ["Lipstick", "Lip Gloss", "Lip Liner"]
                }
            ]
        }
    };

    const CategoryDropdown: React.FC<{ category: string; data: typeof categoryContent[keyof typeof categoryContent] }> = ({ category, data }) => (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className="font-light"
                onMouseEnter={() => setActiveCategory(category)}
            >
                {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-[98vw] mx-auto"
                >
                    <div className="grid grid-cols-12 gap-0 bg-white shadow-xl">
                        <div className="col-span-3 bg-gray-50 p-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="sticky top-0"
                            >
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-light tracking-tight">{category}</h2>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Explore our curated collection of premium {category.toLowerCase()} products designed for your unique needs.
                                    </p>
                                    {/* <Link href={`/categories/${category}`}> */}
                                    <Link href={`/categories`}>
                                    <Button variant="outline" className="w-full justify-between group hover:bg-green-800 hover:text-white transition-colors">
                                        View All {category}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-span-9 p-8">
                            <div className="grid grid-cols-3 gap-12">
                                {data.categories.map((cat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group space-y-6"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"
                                            >
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileHover={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute bottom-0 left-0 right-0 p-6"
                                                >
                                                    <h3 className="text-white text-xl font-medium mb-2">{cat.title}</h3>
                                                    <p className="text-white/90 text-sm">{cat.description}</p>
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        <div className="space-y-4">
                                            <motion.div
                                                className="flex items-center justify-between group/title"
                                                whileHover={{ x: 5 }}
                                            >
                                                <h3 className="font-medium text-lg">{cat.title}</h3>
                                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/title:text-gray-900 transition-colors" />
                                            </motion.div>
                                            <ul className="space-y-3 pl-4 border-l border-gray-100">
                                                {cat.subcategories.map((sub, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        whileHover={{ x: 5 }}
                                                        className="group/item relative flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                                                    >
                                                        <span className="absolute -left-4 w-1 h-4 bg-green-800 scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top" />
                                                        {sub}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full  top-0 z-50"
        >
            <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="mx-auto px-4">
                    <div className="h-16  flex items-center justify-between relative">
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px]">
                                    <nav className="flex flex-col gap-4 mt-8">
                                        <motion.div
                                            className="space-y-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                        >
                                            {['New Arrivals', 'Skincare', 'Makeup', 'Sets', 'About'].map((item, index) => (
                                                <motion.div
                                                    key={item}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-start hover:bg-gray-100"
                                                    >
                                                        {item}
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="hidden lg:block">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-3">
                                <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <CategoryDropdown category="category" data={categoryContent.category} />
                                    <CategoryDropdown category="new arrivals" data={categoryContent.new_arrivals} />
                                    <NavigationMenuItem>
                                        <Link href="/contact-us" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Contact Us
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <motion.div
                            className={cn(
                                "absolute left-1/2 font-bold text-3xl transform -translate-x-1/2   tracking-widest",
                                cinzel.className
                            )}
                        >
                            Elastica
                        </motion.div>

                        <div className="flex items-center gap-2">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsSearchOpen(true)}
                                        className="hover:bg-gray-100 rounded-full"
                                    >
                                        <Search className="w-5 h-5" />
                                    </Button>
                                </motion.div>
                            </AnimatePresence>

                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-gray-100 rounded-full hidden sm:flex"
                                >
                                    <User className="w-5 h-5" />
                                </Button>
                            </motion.div>

                            <ShoppingCart />
                        </div>
                    </div></div>

                <AnimatePresence>
                    {isSearchOpen && <SearchField />}
                </AnimatePresence>

                {/* Sliding Indicator for Active Category */}
                <motion.div
                    className="hidden lg:block h-0.5 bg-green-800"
                    initial={false}
                    animate={{
                        width: activeCategory ? '100%' : '0%',
                        x: activeCategory === 'Skincare' ? '0%' : activeCategory === 'Makeup' ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </nav>

            {/* Announcement Bar - Optional */}
            <AnnouncementBanner />

            {/* Quick Access Menu - Shows on scroll */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed bottom-8 right-4 bg-white shadow-lg rounded-full"
                    >
                        <div className="flex items-center gap-2 p-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gray-100 rounded-full"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default ResponsiveNavbar;