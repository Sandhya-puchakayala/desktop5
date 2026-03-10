"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const pickTabs = ["Top Seller", "On Sale", "Big Deals"];

const products = [
  // Row 1
  {
    name: "Waterproof Ripstop Dog Coat—Blue",
    image: "/assets/img_waterproof_ripstop.png",
    rating: 5,
    price: 150,
    originalPrice: null as number | null,
    badge: null as string | null,
    discount: null as string | null,
  },
  {
    name: "Reindeer Stuffed Animal—Orange",
    image: "/assets/img_reindeer_stuffed.png",
    rating: 5,
    price: 175,
    originalPrice: null as number | null,
    badge: "Limited Stock",
    discount: null as string | null,
  },
  {
    name: "Sherpa Fleece Dog Coat—Orange",
    image: "/assets/img_sherpa_fleece_dog.png",
    rating: 5,
    price: 150,
    originalPrice: null as number | null,
    badge: null as string | null,
    discount: null as string | null,
  },
  {
    name: "Pet 2-in-1 Slow Feeder Interactive Bowl",
    image: "/assets/img_pet_2_in_1_slow.png",
    rating: 4,
    price: 135,
    originalPrice: 145,
    badge: null as string | null,
    discount: "-7%",
  },
  // Row 2
  {
    name: "Sherpa Dog Vest—Olive",
    image: "/assets/img_sherpa_dog_vest_olive.png",
    rating: 4,
    price: 175,
    originalPrice: 195,
    badge: null as string | null,
    discount: "-10%",
  },
  {
    name: "Pets Gigglers Chicken—Dog Toy",
    image: "/assets/img_pets_gigglers_chicken_dog.png",
    rating: 4,
    price: 150,
    originalPrice: null as number | null,
    badge: null as string | null,
    discount: null as string | null,
  },
  {
    name: "Pets Gigglers Chicken—Dog Toy",
    image: "/assets/img_automatic_dog_feeder.png",
    rating: 4,
    price: 125,
    originalPrice: 155,
    badge: null as string | null,
    discount: "-19%",
  },
  {
    name: "Waterproof Ripstop Dog Coat—Olive",
    image: "/assets/img_waterproof_ripstop_1.png",
    rating: 4,
    price: 280,
    originalPrice: null as number | null,
    badge: null as string | null,
    discount: null as string | null,
  },
];

const PopularPicks = () => {
  const [activeTab, setActiveTab] = useState("Top Seller");

  return (
    // <section className="container mx-auto px-4 py-10">
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground text-center mb-8"> */}
      <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-12">
        Popular Picks
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-12 border-b border-gray-200">
        {pickTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg sm:text-xl font-semibold transition-colors relative ${activeTab === tab
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Products Grid — 2 rows of 4 */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8"> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={`${product.name}-${index}`} className="group cursor-pointer">
            {/* <div className="relative bg-card rounded-2xl overflow-hidden aspect-square mb-3"> */}
            <div className="relative bg-gray-100 rounded-3xl p-6 aspect-square mb-4 flex items-center justify-center">
              {product.badge && (
                <span className="absolute top-3 left-3 bg-badge-success text-background text-xs font-semibold px-3 py-1 rounded-full z-10">
                  🔥 {product.badge}
                </span>
              )}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-sale text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                  {product.discount}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-base font-medium mb-1">{product.name}</h4>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < product.rating ? "fill-star text-star" : "text-muted"
                    }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${product.originalPrice ? "text-sale" : "text-foreground"}`}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button — bigger */}
      <div className="flex justify-center mt-12">
        <button className="bg-muted text-foreground px-16 py-4 rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors">
          View more
        </button>
      </div>
    </section>
  );
};

export default PopularPicks;
