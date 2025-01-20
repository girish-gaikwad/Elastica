"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const ContactPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Reduced height */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="/letsconnect2.jpg"
          alt="Contact Us"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <motion.h1 
              className="text-4xl font-light mb-3 tracking-tight"
              {...fadeIn}
            >
              Let&#39;s Connect
            </motion.h1>
            <motion.p 
              className="text-base text-gray-100"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              We&#39;re here to assist you with any questions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content - Reduced padding */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl font-light mb-2">Send Us a Message</h2>
              <p className="text-gray-600">We respond within 24 hours during business days.</p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    placeholder="Enter first name" 
                    className="h-10"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input 
                    placeholder="Enter last name" 
                    className="h-10"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  className="h-10"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  placeholder="What is this regarding?" 
                  className="h-10"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  placeholder="How can we help you?"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button 
                className="w-full md:w-auto px-6 py-2 h-10 group bg-gray-900 hover:bg-gray-800"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light mb-2">Contact Information</h2>
                <p className="text-gray-600">Reach out through any of these channels.</p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567", subtext: "Mon-Fri, 9AM-6PM EST" },
                  { icon: Mail, title: "Email Us", content: "support@company.com", subtext: "24/7 with responses within 24h" },
                  { icon: MapPin, title: "Visit Us", content: "123 Business Avenue", subtext: "New York, NY 10001" },
                  { icon: Clock, title: "Hours", content: "Monday - Friday", subtext: "9AM-6PM EST" }
                ].map((item, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="flex items-start p-4 space-x-4">
                      <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-900 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium mb-1">{item.title}</h3>
                        <p className="text-gray-800 text-sm">{item.content}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.subtext}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-light mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
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
                      className="w-8 h-8 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Store Locator - More compact */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light mb-2">Visit Our Locations</h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Experience our products and services in person
            </p>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* <img
              src="/api/placeholder/1920/800"
              alt="Store Locations Map"
              className="w-full h-full object-cover"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210703.19351181455!2d76.97876562504726!3d11.1020368860301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8587495555555%3A0x40f051893debd129!2sSri%20Ramkarthic%20Polymers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737362243042!5m2!1sen!2sin" width="100%" height="100%" ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;