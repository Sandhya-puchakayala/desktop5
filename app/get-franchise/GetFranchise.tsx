"use client";

import { motion } from "framer-motion";

export default function GetFranchise() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-32">
      <section className="w-full py-24 mb-0 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto px-6 mt-24 text-center flex flex-col items-center">
          <motion.p
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed"
          >
            Interested in joining Petoty as a franchise partner? We help you grow with our trusted brand, support, and pet care expertise.
          </motion.p>
        </div>
      </section>
      <section className="w-full py-24 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center"
        >
          <motion.div className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Become a Partner</p>
            <p className="font-semibold text-gray-800 text-base mb-4">Grow your business with Petoty</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
              Access our network, resources, and expertise to build a successful pet care franchise.
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Full Support</p>
            <p className="font-semibold text-gray-800 text-base mb-4">Training & Marketing</p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
              We provide training, marketing, and operational support to help you succeed.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
