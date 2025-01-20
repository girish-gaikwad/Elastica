"use client";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Cinzel } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const cinzel = Cinzel({
  subsets: ['latin'], // Specify the subset you need
  weight: ['400', '700', '900'], // Cinzel supports 400, 700, and 900 weights
});

const FooterLink = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => (
  <Link href={href} passHref>
    <motion.div
      className={cn(
        "text-gray-400 hover:text-black flex items-center group cursor-pointer",
        "dark:text-gray-400 dark:hover:text-white"
      )}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <span>{children}</span>
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={16} className="ml-1" />
      </motion.div>
    </motion.div>
  </Link>
);

const SocialLink = ({ icon: Icon, href = "#" }: { icon: React.ElementType, href?: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "text-slate-600 hover:text-black",
      "dark:text-gray-400 dark:hover:text-white"
    )}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    <Icon size={22} />
  </motion.a>
);

const IconLink = ({ icon: Icon, text, href = "#" }: { icon: React.ElementType, text: string, href?: string }) => (
  <motion.a
    href={href}
    className={cn(
      "flex items-center space-x-3 text-slate-600",
      "dark:text-gray-300 dark:hover:text-white"
    )}
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Icon size={18} />
    </motion.div>
    <span>{text}</span>
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Skincare', href: '/skincare' },
    { name: 'Makeup', href: '/makeup' },
    { name: 'Sets', href: '/sets' },
    { name: 'Gift Cards', href: '/gift-cards' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Help Center', href: '/help_center' },
    { name: 'FAQs', href: '/help_center#faq' },
    { name: 'Terms & Conditions', href: '/privacy_policy' },
    { name: '', href: '/track' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' }
  ];

  const contactInfo = [
    { Icon: MapPin, text: '123 Beauty Lane, NY 10001', href: 'https://maps.google.com' },
    { Icon: Mail, text: 'hello@glowing.com', href: 'mailto:hello@glowing.com' },
    { Icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "bg-gradient-to-br from-slate-50 to-slate-100",
        "dark:from-gray-900 dark:to-gray-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "text-2xl font-bold tracking-tight dark:text-white",
                cinzel.className
              )}
            >
              Elastica
            </motion.h3>
            <p className="text-slate-600 leading-relaxed dark:text-gray-300">
              Elastica is permium rubber products company.
            </p>
            <motion.div
              className="flex items-center space-x-5"
              variants={containerVariants}
            >
              {socialLinks.map((social, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <SocialLink icon={social.icon} href={social.href} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-6 dark:text-white">Shop</h4>
            <ul className="space-y-4">
              {shopLinks.map(item => (
                <motion.li key={item.name} variants={itemVariants}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-6 dark:text-white">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map(item => (
                <motion.li key={item.name} variants={itemVariants}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-6 dark:text-white">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <IconLink icon={Icon} text={text} href={href} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-slate-200 dark:border-gray-700"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 text-sm dark:text-gray-400">
              © {currentYear} Elastica. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map(item => (
                <motion.div key={item.name} variants={itemVariants}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;