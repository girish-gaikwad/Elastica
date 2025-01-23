import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Star } from "lucide-react";
import Image from "next/image";
import { useSampleStore } from "@/store/samplestore";



const ReviewCard = ({
  img,
  name,
  role,
  rating,
  body
}: {
  img: string;
  name: string;
  role: string;
  rating: number;
  body: string;
}) => {
  return (
    <figure className={cn(
      "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-3",
      "border-gray-950/[.1] bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Image 
              className="rounded-full border-2 border-primary/10" 
              width="48" 
              height="48" 
              alt={name} 
              src={img}
            />
            <div>
              <figcaption className="font-semibold text-base dark:text-white">
                {name}
              </figcaption>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
        </div>
        
        <blockquote className="text-sm leading-relaxed">
          &quot;{body}&quot;
        </blockquote>
      </div>
    </figure>
  );
};

export function TestimonialsSection() {
  // const firstRow = reviews;

  const{reviews} = useSampleStore();
  const secondRow = [...reviews].reverse();

  return (
    <section className="py-16 px-4 bg-CustomColor">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their business with our solution
        </p>
      </div>

      <div className="relative flex flex-col gap-4 items-center justify-center overflow-hidden rounded-lg">
       
        
        <Marquee className="[--duration:35s]" reverse pauseOnHover>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}