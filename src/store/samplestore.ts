import { create } from "zustand";

export const useSampleStore = create(() => ({
  categoryContent: {
    category: {
      description:
        "Explore our curated collection of premium {category.toLowerCase()} products designed for your unique needs",
      categories: [
        {
          title: "Home and Garden",
          image: "/img1.jpg",
          description: "Start your routine right",
          subcategories: ["Pots", "Desk", "Plates"],
        },
        {
          title: "Sports and Fitness",
          image: "/img2.jpg",
          description: "Lock in hydration",
          subcategories: ["frisbee", "wedge", "Dumbell"],
        },
        {
          title: "Toys",
          image: "/img3.jpg",
          description: "Target specific concerns",
          subcategories: ["car", "comming soon", "comming soon"],
        },
      ],
    },
    new_arrivals: {
      description:
        "Explore our curated collection of premium {category.toLowerCase()} products designed for your unique needs",

      categories: [
        {
          title: "Face",
          image: "/img3.jpg",
          description: "Create your perfect base",
          subcategories: ["Foundation", "Concealer", "Powder"],
        },
        {
          title: "Eyes",
          image: "/img2.jpg",
          description: "Make your eyes pop",
          subcategories: ["Eyeshadow", "Mascara", "Eyeliner"],
        },
        {
          title: "Lips",
          image: "/img1.jpg",
          description: "Complete your look",
          subcategories: ["Lipstick", "Lip Gloss", "Lip Liner"],
        },
      ],
    },
  },

   FeaturedProducts : [
    {
      "id": 1,
      "name": "Medium Pot, Plain",
      "price": 80,
      "tag": "Best Seller",
      "image": "/img1.jpg"
    },
    {
      "id": 2,
      "name": "Medium Pot, Kolam",
      "price": 120,
      "tag": "Best Seller",
      "image": "/img2.jpg"
    },
    {
      "id": 3,
      "name": "Medium Pot, Designer",
      "price": 150,
      "tag": "Best Seller",
      "image": "/img3.jpg"
    },
    {
      "id": 4,
      "name": "Desk Buddy, Plain",
      "price": 50,
      "tag": "Popular",
      "image": "/img4.jpg"
    },
    {
      "id": 5,
      "name": "Desk Buddy, Designer",
      "price": 80,
      "tag": "Popular",
      "image": "/img5.jpg"
    },
    {
      "id": 6,
      "name": "Wall Buddy",
      "price": 100,
      "tag": "New Arrival",
      "image": "/img6.jpg"
    },
    {
      "id": 7,
      "name": "Dumbell, 1.5 kg",
      "price": 249,
      "tag": "Best Seller",
      "image": "/img7.jpg"
    },
    {
      "id": 8,
      "name": "Squat Wedge",
      "price": 300,
      "tag": "Trending",
      "image": "/img8.jpg"
    },
    {
      "id": 9,
      "name": "Frisbee, 7\"",
      "price": 149,
      "tag": "Trending",
      "image": "/img9.jpg"
    },
    {
      "id": 10,
      "name": "Disc Golf, 7\"",
      "price": 99,
      "tag": "New Arrival",
      "image": "/img10.jpg"
    },
    {
      "id": 11,
      "name": "Mini Disc, 2.5\"",
      "price": 49,
      "tag": "Budget Pick",
      "image": "/img11.jpg"
    }
  ],

  ProductOfDay:{
    "productName": "Intensive Glow C+ Serum",
    "productTagline": "New Formula",
    "description": "Our most powerful vitamin C serum yet. Formulated with 20% L-ascorbic acid and ferulic acid for maximum brightening and anti-aging benefits.",
    "features": [
      {
        "icon": "Star",
        "title": "Clinically Proven",
        "description": "Dermatologist tested for all skin types"
      },
      {
        "icon": "Shield", 
        "title": "Safe Formula",
        "description": "Free from parabens and harmful chemicals"
      },
      {
        "icon": "CarFront",
        "title": "Deep Absorption", 
        "description": "Enhanced delivery system for better results"
      }
    ],
    "ctas": [
      {
        "type": "primary",
        "text": "Shop Now",
        "style": "bg-green-600 hover:bg-green-700 text-white"
      },
      {
        "type": "secondary",
        "text": "Explore Collection",
        "icon": "ArrowRight"
      }
    ],
    "styling": {
      "bgGradient": "from-white to-green-50/30",
      "textColor": "bg-gradient-to-r from-gray-900 to-gray-700",
      "accentColor": "green"
    },
     "products" : [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 199.99,
          rating: 4.5,
          image: "/api/placeholder/300/300",
          description: "Premium noise-canceling wireless headphones"
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 299.99,
          rating: 4.8,
          image: "/api/placeholder/300/300",
          description: "Advanced fitness tracking smartwatch"
        },
        {
          id: 3,
          name: "Laptop Stand",
          price: 49.99,
          rating: 4.3,
          image: "/api/placeholder/300/300",
          description: "Ergonomic aluminum laptop stand"
        }
      ]
  },

   reviews : [
    {
      name: "Jack Morrison",
      role: "Marketing Director",
      username: "@jack",
      rating: 5,
      body: "The attention to detail and customer service is exceptional. Truly a game-changing product.",
      img: "/api/placeholder/32/32"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      username: "@sarah",
      rating: 4,
      body: "Streamlined our workflow significantly. The ROI has been incredible.",
      img: "/api/placeholder/32/32"
    },
    {
      name: "David Kumar",
      role: "Tech Lead",
      username: "@david",
      rating: 5,
      body: "Integration was seamless. The support team went above and beyond.",
      img: "/api/placeholder/32/32"
    }
  ],
  AllProducts:{
    "products": [
      {
        "id": 1,
        "name": "Medium Pot, Plain",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "5.3\" x 5\"",
        "weight": "160 gms",
        "price": 80,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted rubber planters. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Eco-friendly",
          "Durable rubber",
          "Safe for all ages",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 2,
        "name": "Medium Pot, Kolam",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "5.3\" x 5\"",
        "weight": "160 gms",
        "price": 120,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted rubber planters. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Each piece is thoughtfully crafted by women artisans using a traditional kolam design, adding a touch of artistry to your space while supporting local communities. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Eco-friendly",
          "Traditional kolam design",
          "Handcrafted by women artisans",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 3,
        "name": "Medium Pot, Designer",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "5.3\" x 5\"",
        "weight": "160 gms",
        "price": 150,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted rubber planters. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Each piece is thoughtfully crafted by women artisans using traditional or modern art, adding a touch of artistry to your space while supporting local communities. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Eco-friendly",
          "Designer art style",
          "Handcrafted by women artisans",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 4,
        "name": "Desk Buddy, Plain",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "3.1\" x 3.5\"",
        "weight": "130 gms",
        "price": 50,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted small desk buddy. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Compact size",
          "Desk-friendly",
          "Eco-friendly",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 5,
        "name": "Desk Buddy, Designer",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "3.1\" x 3.5\"",
        "weight": "130 gms",
        "price": 80,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted designer desk buddy. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Each piece is thoughtfully crafted by women artisans using traditional or modern art, adding a touch of artistry to your space while supporting local communities. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Compact size",
          "Designer art style",
          "Handcrafted by women artisans",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 6,
        "name": "Wall Buddy",
        "category": "Home and Garden",
        "subcategory": "Planters",
        "dimensions": "3.1\" x 3.5\"",
        "weight": "92 gms",
        "price": 100,
        "currency": "INR",
        "description": "Bring sustainability to your home and garden with Elastica's handcrafted wall planter. Made from eco-friendly, durable rubber, these planters combine functionality with style while being safe for children, elderly, and individuals with special needs to handle. Designed to withstand the elements, they are perfect for indoor or outdoor use. Whether for desk plants or as a workspace plant buddy, these planters offer a unique blend of modern aesthetics and sustainability. Each piece is thoughtfully crafted by women artisans using traditional or modern art, adding a touch of artistry to your space while supporting local communities. Choose Elastica for a greener tomorrow, one planter at a time.",
        "features": [
          "Wall-mountable",
          "Compact design",
          "Handcrafted by women artisans",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 7,
        "name": "Dumbell, 1.5 kg",
        "category": "Sports and Fitness",
        "subcategory": "Exercise Equipment",
        "dimensions": "10\" x 4\"",
        "weight": "1500 gms",
        "price": 249,
        "currency": "INR",
        "description": "A unique alternative to round heads or hexagonal, the dumbells feature a unique dog bone shape, which helps keep them in place on the floor. When set to the side during a workout, they won't roll away or get under foot. They safely remain right where you left them for a safe workout environment and for easy transportation. Our dumbells are made from durable materials (Fiber Reinforced Core and Soft Recycled Rubber), making them suitable for both home and commercial gym environments. The unique shape and thicker grips can be used in rehabilitation to improve grip strength and dexterity, making them useful for physical therapy patients recovering from injuries. These dumbells can be used for a variety of exercises beyond traditional lifting, including grip strength exercises like holds and rotations. The no roll head keeps the dumbell in place, and the aesthetic design is pleasing to look anywhere you place.",
        "features": [
          "Unique dog bone shape",
          "Non-rolling design",
          "Rehabilitation friendly",
          "Recycled materials"
        ]
      },
      {
        "id": 8,
        "name": "Squat Wedge",
        "category": "Sports and Fitness",
        "subcategory": "Exercise Equipment",
        "dimensions": "7.5\" x 5\"",
        "weight": "500 gms",
        "price": 300,
        "currency": "INR",
        "description": "Perfect for squats, lunges, calf raises, and Yoga. Our Squat Wedge made of Rubber can be used in Elevated Heel Squats and Deadlifts - Improve Mobility, Balance, and Strength - Non-Slip, Versatile Trainer Aid. Textured design prevents slipping, giving you the confidence to focus on your movements. Elastica Rubber Squat Wedge. Perfect for gym enthusiasts, athletes, and beginners, this essential workout accessory helps improve form, prevent injuries, and maximize gains.",
        "features": [
          "Multi-purpose exercise aid",
          "Non-slip texture",
          "Improves mobility",
          "Suitable for all fitness levels"
        ]
      },
      {
        "id": 9,
        "name": "Frisbee, 7\"",
        "category": "Sports and Fitness",
        "subcategory": "Recreational Equipment",
        "dimensions": "7\" Diameter",
        "weight": "110 gms",
        "price": 149,
        "currency": "INR",
        "description": "Unleash the fun with the Elastica 7-Inch Soft Rubber Frisbee! Designed for versatile use, this durable and lightweight frisbee is perfect for play, fitness, and bonding time with your pets. It is made out of Soft and it's gentle on hands and teeth, making it safe for all ages and your furry companions. The 7-inch diameter ensures easy grip and throw, whether you're playing in the backyard, park, or beach. It is multi purpose and Ideal for fun games of catch, fitness activities, or interactive play with your pets. It is built to withstand rough play while maintaining its shape and performance. It is made with partially recycled materials and algns with our commitment to creating environmentally conscious products. Whether you're looking to enhance your workout, entertain your kids, or keep your dog active and happy, the Elastica 7-Inch Soft Rubber Frisbee is the ultimate companion for hours of fun and fitness! Care Instructions: Simply wipe clean with a damp cloth after use. Suitable for both indoor and outdoor play. Discover the joy of movement and play with Elastica!",
        "features": [
          "Soft rubber material",
          "Pet-friendly",
          "Partially recycled materials",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 10,
        "name": "Disc Golf, 7\"",
        "category": "Sports and Fitness",
        "subcategory": "Recreational Equipment",
        "dimensions": "7\" Diameter",
        "weight": "114 gms",
        "price": 99,
        "currency": "INR",
        "description": "The Elastica 7-Inch Soft Rubber Disc Golf is designed for versatile use, this durable and lightweight frisbee is perfect for play, fitness, and bonding time with your pets. It is made out of Soft rubber and it's gentle on hands and teeth, making it safe for all ages and your furry companions. It is multi purpose and Ideal for fun games of disc golf, target throw and catch, fitness activities, or interactive play with your pets. It is built to withstand rough play while maintaining its shape and performance. It is made with partially recycled materials and algns with our commitment to creating environmentally conscious products. Whether you're looking to enhance your workout, entertain your kids, or keep your dog active and happy, the Elastica 7-Inch Disc is the ultimate companion for hours of fun and fitness! Care Instructions: Simply wipe clean with a damp cloth after use. Suitable for both indoor and outdoor play. Discover the joy of movement and play with Elastica!",
        "features": [
          "Soft rubber material",
          "Disc golf compatible",
          "Partially recycled materials",
          "Indoor/Outdoor use"
        ]
      },
      {
        "id": 11,
        "name": "Mini Disc, 2.5\"",
        "category": "Sports and Fitness",
        "subcategory": "Recreational Equipment",
        "dimensions": "2.5\" Diameter",
        "weight": "35 gms",
        "price": 49,
        "currency": "INR",
        "description": "The Elastica Mini Disc is designed for versatile use, this durable and lightweight mini disc is perfect for kids to try trick shots, play, fitness, and bonding time with your pets. With its smaller size, this disc is engineered for precision throws and incredible stunts, making it perfect for trick shot enthusiasts. Designed for smooth, stable flights, ensuring impressive accuracy and long-distance glides. Soft and Durable Material: Made from premium, soft-touch rubber, it's safe to use indoors and outdoors while being tough enough for high-energy play. This product is Great for solo practice, group challenges, or interactive games. Perfect for kids, teens, adults, and even pets!",
        "features": [
          "Mini size",
          "Trick shot friendly",
          "Soft rubber material",
          "Suitable for all ages"
        ]
      }
    ],
    "categories": [
      "Home and Garden",
      "Sports and Fitness"
    ],
    "subcategories": {
      "Home and Garden": ["Planters"],
      "Sports and Fitness": ["Exercise Equipment", "Recreational Equipment"]
    },
    "priceRanges": [
      { "min": 0, "max": 100 },
      { "min": 101, "max": 200 },
      { "min": 201, "max": 300 }
    ]
  },

  
}));
