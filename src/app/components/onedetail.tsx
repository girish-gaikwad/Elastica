import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, CarFront, Sparkles } from 'lucide-react';
import FeaturedProducts from './featured';
import { Button } from "@/components/ui/button";
import { useSampleStore } from '@/store/samplestore';



// Dynamic icon mapping
const iconMap = {
  Star: Star,
  Shield: Shield,
  CarFront: CarFront
};

const ProductFeature = ({ icon: IconName, title, description }: { icon: string, title: string, description: string }) => {
  const Icon = iconMap[IconName as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start space-x-3"
    >
      <div className="mt-1">
        <Icon size={20} className="text-green-500" />
      </div>
      <div>
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Onedetail = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const { ProductOfDay } = useSampleStore()

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-b ${ProductOfDay.styling.bgGradient}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div>
              <motion.span
                variants={fadeInUpVariants}
                className="inline-block text-green-600 font-medium text-sm px-3 py-1 bg-green-50 rounded-full mb-4"
              >
                {ProductOfDay.productTagline}
              </motion.span>

              <motion.h2
                variants={fadeInUpVariants}
                className={`text-4xl md:text-5xl font-bold mb-6 ${ProductOfDay.styling.textColor} bg-clip-text text-transparent text-CustomColor-dark`}
              >
                {ProductOfDay.productName}
              </motion.h2>

              <motion.p
                variants={fadeInUpVariants}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                {ProductOfDay.description}
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUpVariants}
              className="space-y-6"
            >
              {ProductOfDay.features.map((feature, index: number) => (
                <ProductFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              className="flex items-center space-x-6"
            >
              <Button
                className={`${ProductOfDay.ctas[0].style} px-6 py-2 rounded-full`}
              >
                {ProductOfDay.ctas[0].text}
              </Button>

              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2 text-green-600 font-medium group"
              >
                <span>{ProductOfDay.ctas[1].text}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"
            />
            <FeaturedProducts products={ProductOfDay.products} />

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 right-12"
            >
              <Sparkles className="text-green-400" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Onedetail;