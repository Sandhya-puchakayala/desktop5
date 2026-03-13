"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-32">
      
      {/* 1. HERO IMAGE & INTRO */}
      <section className="w-full py-24 mb-0 flex flex-col items-center text-center">
        {/* Full width hero image */}
        <div className="w-full h-[350px] md:h-[500px] lg:h-[600px] relative px-4 md:px-8 pt-6 flex justify-center">
          <img
            src="/images/Family-child.png"
            alt="Happy family with their golden retriever"
            className="w-full max-w-7xl h-full object-cover rounded-3xl shadow-md"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-24 text-center flex flex-col items-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-2xl  text align-center font-medium text-gray-800 leading-relaxed"
          >
            Petoty is a one-stop pet care platform connecting pet parents with trusted products, services, and brands they love.
          </motion.p>
        </div>
      </section>
<br/>
      {/* 2. STATS SECTION */}
     <section className="w-full py-24 mb-0 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">30K+</p>
            <p className="font-semibold text-gray-800 text-base mb-4">Products available in our store</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
              A wide range of trusted pet products across food, care, accessories, and essentials.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">92k</p>
            <p className="font-semibold text-gray-800 text-base mb-4">Happy Customer</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
              Loved and trusted by thousands of pet parents across the country.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">62</p>
            <p className="font-semibold text-gray-800 text-base mb-4">Partner Brand</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
              Partnered with reliable and quality-driven pet brands you can count on.
            </p>
          </motion.div>
        </motion.div>
      </section>
<br/>
      {/* 3. WHY CHOOSE US */}
     <section className="py-32 bg-white flex flex-col items-center text-center w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-24 flex flex-col items-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 font-serif">
              Why Choose us?
            </h2>
            <br/>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              At Petoty, we go beyond products. Our services are designed to support your pet's health, happiness, and well-being at every stage of life.
            </p>
            <br/>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-16 lg:gap-20"
          >
            {[
              {
                img: "/images/Pet-care-1.png",
                title: "Pawscription – Expert Care at Home",
                desc: "Get personalised guidance on your pet's health, nutrition, behaviour, and daily care through trusted home-visit consultants. Professional support, tailored to your pet's unique needs.",
              },
              {
                img: "/images/pet-care-2.png",
                title: "Pawsurance – Smart Pet Insurance",
                desc: "Protect your pet with flexible insurance plans covering medical emergencies, treatments, and preventive care—so you can focus on love, not expenses.",
              },
              {
                img: "/images/pet-care-3.png",
                title: "Pet Services & Marketplace",
                desc: "From grooming and training to quality food, accessories, and healthcare products—Petoty connects pet parents with trusted services and brands, all in one place.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="overflow-hidden rounded-2xl mb-10 w-full shadow-sm max-w-[350px] mx-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <br/>
                <h3 className="font-bold text-gray-900 text-xl md:text-2xl mb-6 px-4">{item.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
<br/>
      {/* 4. OUR MISSION */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-20 lg:gap-28 items-center"
          >
            <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl shadow-lg flex justify-center">
              <img src="/images/Our Mission.png" alt="Our Mission" className="w-full max-w-[500px] aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 font-serif">Our Mission</h2>
              <br/>
              <p className="text-gray-600 mb-12 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                To make pet parenting easier, smarter, and more joyful by combining technology, innovation, and genuine care—so every pet gets the love and support they deserve, every day.
              </p>
              <br/>
               <button className="px-12 py-6 text-lg font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
       Learn More
</button>
            </motion.div>
          </motion.div>
        </div>
      </section>
<br/>
      {/* 5. OUR VISION */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-20 lg:gap-28 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1 text-center flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 font-serif">Our Vision</h2>
              <br/>
              <p className="text-gray-600 mb-12 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                To become the go-to platform for everything pets, where innovation meets compassion and pet care evolves into a trusted, convenient, and delightful experience.
              </p>
              <br/>

               <button className="px-12 py-6 text-lg font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
        Learn More
</button>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 md:order-2 overflow-hidden rounded-3xl shadow-lg flex justify-center">
              <img src="/images/Our Vision.png" alt="Our Vision" className="w-full max-w-[500px] aspect-[4/3] object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>
<br/>
      {/* 6. TIMELINE */}
      <section className="py-32 bg-[#f9f6f0] mt-0">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-20 items-start"
          >
            <motion.div variants={fadeUp} className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-gray-600 font-bold tracking-widest uppercase mb-4 text-sm">Milestones</p>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif mb-10">
                Company History<br className="hidden lg:block"/> Timeline
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="space-y-12">
              {[
                { year: "2019", title: "Founded in 2019", desc: "Founded the company with minimum inventory." },
                { year: "2020", title: "Global Expansion (2020)", desc: "Expanded our reach by onboarding exclusive brands from around the world, transforming into a global entity." },
                { year: "2021", title: "Introducing Pet Services (2021)", desc: "Implemented a variety of doorstep services to enrich our servings." },
                { year: "2022", title: "Milestone Achievement (2022)", desc: "Company growth surged as we captured different markets globally by reaching 50,000 pet parents." },
                { year: "2023", title: "Innovation and Expansion (2023)", desc: "Introduced a cutting-edge device and a subscription model in the previous year. More than doubling our reach, our services now cater to over 90,000 pet parents." },
              ].map((item) => (
                <motion.div key={item.year} variants={fadeUp} className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-8 w-8 text-[#8a1551]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-xl md:text-2xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
<br/>
      {/* 7. HOW WE WORK / FINAL CARDS */}
<section className="py-32 bg-white flex flex-col items-center w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 text-center mb-24 flex flex-col items-center"
        >
          <motion.p variants={fadeUp} className="text-gray-600 font-bold tracking-widest uppercase mb-4 text-sm">
            How We Work
          </motion.p>
          <br/>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif">
            Caring for Pets, the Smarter Way
          </motion.h2>
          <br/>
          <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-md max-w-xl mx-auto leading-relaxed">
            At Petoty, we bring together expert care, trusted products, and smart technology to simplify every part of pet parenting—so your pet stays happy, healthy, and loved.
          </motion.p>
          
        </motion.div>
<br/>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 lg:gap-20"
        >
          {[
            {
              img: "/images/Container (6).png",
              title: "Personalised Pet Care",
              desc: "From expert consultations to home visits, we offer tailored guidance for your pet's health, behaviour, and daily needs—because no two pets are the same.",
            },
            {
              img: "/images/Container (4).png",
              title: "Trusted Products & Services",
              desc: "Explore 30K+ carefully curated pet products and services from verified brands, ensuring safety, quality, and comfort for every pet.",
            },
            {
              img: "/images/Container (3).png",
              title: "All-in-One Pet Ecosystem",
              desc: "From Pawscription to Pawsurance, Petoty connects care, wellness, and protection in one seamless platform so you can focus on what matters most: your pet.",
            },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="group cursor-pointer flex flex-col items-center text-center">
              <div className="overflow-hidden rounded-2xl mb-10 w-full shadow-sm max-w-[380px] mx-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <br/>
              <h3 className="font-bold text-gray-900 text-xl md:text-2xl mb-6 px-2">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base max-w-sm mx-auto">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
