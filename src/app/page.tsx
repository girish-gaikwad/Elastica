"use client";
import WhyChooseUs from './components/chooseus';
import ProductCarousel from './components/feature';
import HeroSlider from './components/hero';
import Onedetail from './components/onedetail';
import PosterSection from './components/poster';
import { TestimonialsSection } from './components/teatamonials';



export default function BeautyLanding() {

  return (
    <div className="min-h-screen">

      <HeroSlider />
      <ProductCarousel />
      <PosterSection />
      <Onedetail />
      <TestimonialsSection />
      <WhyChooseUs />
    </div>
  );
}