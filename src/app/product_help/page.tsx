"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import  HeroVideoDialog  from '@/components/ui/hero-video-dialog';
import { Wind, Target, Shield, FileText } from 'lucide-react';

const FrisbeeDocumentationPage = () => {
  const tutorials = [
    {
      title: "Basic Throwing Techniques",
      videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      thumbnailLight: "/api/placeholder/800/450",
      thumbnailDark: "/api/placeholder/800/450",
      description: "Master the backhand and forehand throws for accurate flights"
    },
    {
      title: "Advanced Flight Patterns",
      videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      thumbnailLight: "/api/placeholder/800/450",
      thumbnailDark: "/api/placeholder/800/450",
      description: "Learn curve shots, hammers, and other advanced throwing techniques"
    },
    {
      title: "Maintenance & Care",
      videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      thumbnailLight: "/api/placeholder/800/450",
      thumbnailDark: "/api/placeholder/800/450",
      description: "How to clean, store, and maintain your frisbee for optimal performance"
    }
  ];

  const resources = [
    {
      title: "Flight Characteristics",
      description: "Understanding stability, glide, and wind resistance",
      icon: <Wind className="h-6 w-6" />
    },
    {
      title: "Game Rules",
      description: "Official rules for Ultimate, Disc Golf, and other games",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Product Warranty",
      description: "Warranty information and replacement policy",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const specifications = {
    weight: "175 grams",
    diameter: "27.5 cm",
    material: "Premium injection-molded plastic",
    certification: "PDGA Approved",
    flightRating: "Speed: 4 | Glide: 5 | Turn: -1 | Fade: 1"
  };

  return (
    <div className="max-w-7xl mt-16 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pro Performance Frisbee</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The ultimate guide to mastering your professional-grade flying disc
        </p>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="tutorials" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tutorials">Tutorial Videos</TabsTrigger>
          <TabsTrigger value="product">Product Specs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Video Tutorials Tab */}
        <TabsContent value="tutorials">
          <div className="grid glid-cols-1 md:grid-cols-2 mt-8 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{tutorial.description}</p>
                <div className="relative">
                  <HeroVideoDialog 
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc={tutorial.videoSrc}
                    thumbnailSrc={tutorial.thumbnailLight}
                    thumbnailAlt={tutorial.title}
                  />
                  <HeroVideoDialog 
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc={tutorial.videoSrc}
                    thumbnailSrc={tutorial.thumbnailDark}
                    thumbnailAlt={tutorial.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Product Specifications Tab */}
        <TabsContent value="product">
          <Card className='mt-8'>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-gray-600 dark:text-gray-400">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {resource.icon}
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Start Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Getting Started with Your Frisbee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400">1</div>
              <div>
                <h3 className="font-medium mb-1">Check Your Grip</h3>
                <p className="text-gray-600 dark:text-gray-400">Position your fingers correctly along the rim for optimal control</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400">2</div>
              <div>
                <h3 className="font-medium mb-1">Practice Basic Throws</h3>
                <p className="text-gray-600 dark:text-gray-400">Start with backhand throws in an open area with minimal wind</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400">3</div>
              <div>
                <h3 className="font-medium mb-1">Learn Flight Patterns</h3>
                <p className="text-gray-600 dark:text-gray-400">Understand how angle and power affect your disc&apos;s flight path</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrisbeeDocumentationPage;