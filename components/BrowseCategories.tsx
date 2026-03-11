"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Dogs", "Cats", "Birds", "Fishes"];

const categories = [
  { name: "Food", image: "/assets/food.png" },
  { name: "Treats", image: "/assets/treat.png" },
  { name: "Health & Wellness", image: "/assets/health.png" },
  { name: "Accessories", image: "/assets/accessories.png" },
];

const popularCategories = [
  { name: "Food", image: "/assets/food1.png" },
  { name: "Grooming Supplies", image: "/assets/grooming.png", wide: true },
  { name: "Toys", image: "/assets/pet-toys.png" },
  { name: "Collars & Leashes", image: "/assets/collars.png" },
  { name: "Flea & Ticks", image: "/assets/flea-tick.png" },
  { name: "Clothing", image: "/assets/clothing.png" },
  { name: "Bowls & Feeders", image: "/assets/bowls.png" },
];

const BrowseCategories = () => {
  const [browseActiveTab, setBrowseActiveTab] = useState("Dogs");
  const [popularActiveTab, setPopularActiveTab] = useState("Dogs");

  return (
    <>
      {/* Browse Categories */}
      <section className="w-full px-6 lg:px-12 py-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
            Browse by categories
          </h2>
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setBrowseActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition ${browseActiveTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards — image fully covers each card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer">
              {/* Card: fixed size, image fills it completely */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ width: "100%", height: "260px" }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                {/* Label at bottom */}
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-5 py-1.5 rounded-full text-sm font-medium shadow whitespace-nowrap">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Popular Categories */}
      <section className="w-full px-6 lg:px-12 py-16">

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
            Popular categories
          </h2>
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setPopularActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition ${popularActiveTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Cards — driven by popularCategories array */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {popularCategories.map((cat, index) => (
            <div
              key={cat.name}
              className={`relative rounded-3xl overflow-hidden ${
                index === 1 ? "md:col-span-2" : ""
              }`}
              style={{ height: "310px" }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-5 py-1.5 rounded-full text-sm font-medium shadow whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          ))}

        </div>


      </section>
    </>
  );
};

export default BrowseCategories;