import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, HeartHandshake, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Bank-grade security protocols to protect your data and transactions with state-of-the-art encryption",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized performance with sub-second response times and seamless user experience",
        color: "from-yellow-500/20 to-orange-500/20"
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer service with dedicated team members ready to assist you anytime",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: HeartHandshake,
        title: "Customer First",
        description: "Dedicated to providing exceptional user experience with personalized solutions",
        color: "from-green-500/20 to-emerald-500/20"
    }
];

const FeatureCard = ({ icon: Icon, title, description, index, color }: { icon: React.ElementType, title: string, description: string, index: number, color: string } ) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
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

    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="h-full"
        >
            <Card className="group h-full hover:shadow-xl rounded-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
                <CardContent className="p-8">
                    <motion.div
                        variants={iconVariants}
                        className="mb-6"
                    >
                        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-primary" />
                        </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default function WhyChooseUs() {
    return (
        <section className=" px-4 relative overflow-hidden bg-CustomColor">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <motion.div 
                    className="inline-block border-l-2 border-primary pl-4 mb-6"
                    initial={{ height: 0 }}
                    whileInView={{ height: "auto" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tight">Why Leading Companies Choose Us</h2>
                </motion.div>
                <p className="text-muted-foreground text-lg">
                    Discover the advantages that set us apart and make us the preferred choice for businesses worldwide
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto mb-12">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <Button 
                    className="bg-CustomColor-dark mb-10 hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg"
                    size="lg"
                >
                    Start Your Journey
                </Button>
            </motion.div>

            {/* Background Elements */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    transition: { duration: 8, repeat: Infinity }
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
            </motion.div>

            {/* Decorative circles */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 10, repeat: Infinity }
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    transition: { duration: 10, repeat: Infinity }
                }}
            />
        </section>
    );
}