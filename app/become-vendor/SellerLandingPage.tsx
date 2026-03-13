'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import LoginPopup from '@/components/LoginPopup';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SellerCategory {
  id: number;
  title: string;
}

interface Statistic {
  id: number;
  value: string;
  label: string;
}

interface CategoryItem {
  id: number;
  name: string;
}

export default function SellerLandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([])
  const [sellerCategories, setSellerCategories] = useState<SellerCategory[]>([])
  const [statistics, setStatistics] = useState<Statistic[]>([])
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([])
  const [selectedTab, setSelectedTab] = useState<string>('Cats')
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadPageData()
  }, [])

  const loadPageData = (): void => {
    try {
      // Simulate API call
      setTimeout(() => {
        setProcessSteps([
          {
            id: 1,
            title: 'Register Your Business',
            description: 'Fill out the form and share your basic details.',
            icon: '/images/img_tabler_edit.png'
          },
          {
            id: 2,
            title: 'List Your Products',
            description: 'Upload product photos, pricing, and descriptions.',
            icon: '/images/img_icon_park_list_two.png'
          },
          {
            id: 3,
            title: 'Receive Orders',
            description: 'We will notify you instantly when customers place an order.',
            icon: '/images/img_hugeicons_package_receive.png'
          },
          {
            id: 4,
            title: 'Deliver & Get Paid',
            description: 'We manage logistics, and you receive timely payouts.',
            icon: '/images/img_hugeicons_payment_02.png'
          }
        ])

        setSellerCategories([
          { id: 1, title: 'Pet food manufacturers' },
          { id: 2, title: 'Pet accessory and toy sellers' },
          { id: 3, title: 'Grooming product suppliers' },
          { id: 4, title: 'Home-based pet businesses' },
          { id: 5, title: 'Retail pet store owners' },
          { id: 6, title: 'Handmade pet product creators' },
          { id: 7, title: 'Pet treat and bakery brands' },
          { id: 8, title: 'Pet Healthcare Product Brands' }
        ])

        setStatistics([
          { id: 1, value: '10K+', label: 'Monthly Pet Shoppers' },
          { id: 2, value: '500+', label: 'Active Sellers' },
          { id: 3, value: '5K+', label: 'Listed Pet Products' },
          { id: 4, value: '100%', label: ' Delivery Support' }
        ])

        setCategoryItems([
          { id: 1, name: 'Food & Treats' },
          { id: 2, name: 'Litter Supplies' },
          { id: 3, name: 'Health & Wellness' },
          { id: 4, name: 'Accessories' }
        ])

        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleStartSelling = (): void => {
    // Handle seller registration
  }

  const handleSubscribe = (): void => {
    if (email.trim()) {
      setEmail('')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const tabs = ['Cats', 'Dogs', 'Birds', 'Fishes']
  const catsItems = [
    "Food & Treats",
    "Litter Supplies",
    "Health & Wellness",
    "Accessories"
  ];

  const dogsItems = [
    "Food",
    "Treats & Chews",
    "Health & Wellness",
    "Accessories"
  ];

  const birdsItems = [
    "Food & Feeding",
    "Cages",
    "Perches & Toys",
    "Health & Grooming"
  ];

  const fishesItems = [
    "Filter & Media",
    "Accessories",
    "Treatment",
    "Live Fishes"
  ];

  const CategoryItem = ({
    number,
    name,
  }: {
    number: number;
    name: string;
  }) => (
    <div className="flex items-center bg-[#EDE2E6] 
                    rounded-2xl
                    p-[6px] xl:p-[10px] pr-4 xl:pr-6
                    hover:bg-[#E2D2D9] 
                    transition-all duration-300 w-full">
      <div className="w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] 
                      bg-[#8B1E4F] 
                      rounded-full 
                      flex items-center justify-center 
                      text-white font-semibold 
                      text-xl xl:text-[26px] 
                      mr-4 xl:mr-5 flex-shrink-0">
        {number}
      </div>

      <span className="text-[17px] xl:text-[22px] font-medium text-[#111111] leading-tight">
        {name}
      </span>
    </div>
  );

  return (
    <main className="w-full bg-secondary-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-[#F8F2EC] overflow-hidden">

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="min-h-[700px] flex items-center">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[55%] py-16">

              <h1 className="text-[32px] sm:text-[42px] lg:text-[44px] xl:text-[52px] font-bold leading-[44px] lg:leading-[54px] xl:leading-[64px] text-[#111111] mb-6">
                Reach Pet Lovers Nationwide and{" "}
                <span className="text-[#8B1E4F]">Grow</span>{" "}
                Your Business with Ease
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#555555] mb-10 max-w-[550px]">
                Join Petoty's growing marketplace and start selling premium pet
                products with full support in logistics, payments, and visibility.
              </p>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-[#8B1E4F] text-white text-xl lg:text-2xl font-semibold px-14 py-5 rounded-[16px] shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:bg-[#7A0A50] transition-all duration-300 ease-in-out w-fit"
              >
                Start Selling
              </button>

            </div>

          </div>
        </div>

        {/* BIG IMAGE — ABSOLUTE */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-10%] xl:right-[0%] w-[90%] xl:w-[95%] h-[120%] xl:h-[130%] pointer-events-none">

          <Image
            src="/images/img_image_53.png"
            alt="Seller Success"
            fill
            priority
            className="object-contain object-right"
          />

        </div>

      </section>

      {/* Why Sell With Petoty Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[60px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[60px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-tight text-[#111111] mb-4 sm:mb-6">
              <span className="text-[#111111]">Why </span>
              <span className="text-[#8B1E4F]">Sell With Petoty?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-[22px] font-normal leading-relaxed text-[#555555] max-w-5xl mx-auto">
              Grow your pet business with a trusted marketplace built specifically for pet lovers and sellers.
            </p>
          </div>

          {/* Benefits Grid - Bento Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* 1️⃣ Easy Seller Onboarding (Big Left Card) */}
            <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between lg:row-span-2">

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-text-dark pr-4">
                    Easy Seller Onboarding
                  </h3>
                  <Image
                    src="/images/Group 87.png"
                    alt="Tick Mark"
                    width={40}
                    height={40}
                    className="object-contain flex-shrink-0"
                  />
                </div>
                <p className="text-base text-text-overlay">
                  Register in minutes and kickstart your online journey effortlessly.
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <Image
                  src="/images/img_image_65.png"
                  alt="Easy Onboarding"
                  width={360}
                  height={360}
                  className="object-contain w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] xl:max-w-[400px] h-auto"
                />
              </div>
            </div>

            {/* 2️⃣ Large Customer Base */}
            <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-text-dark pr-4">
                    Large Customer Base
                  </h3>
                  <Image
                    src="/images/Group 87.png"
                    alt="Tick Mark"
                    width={40}
                    height={40}
                    className="object-contain flex-shrink-0"
                  />
                </div>
                <p className="text-base text-text-overlay">
                  Tap into a fast-growing community of pet parents who shop regularly.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Image
                  src="/images/img_image_66.png"
                  alt="Customer Growth"
                  width={180}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 3️⃣ Secure Payments */}
            <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-text-dark pr-4">
                    Secure & Transparent Payments
                  </h3>
                  <Image
                    src="/images/Group 87.png"
                    alt="Tick Mark"
                    width={40}
                    height={40}
                    className="object-contain flex-shrink-0"
                  />
                </div>
                <p className="text-base text-text-overlay">
                  Automatic payouts with clear commission breakdowns.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Image
                  src="/images/img_image_67.png"
                  alt="Payment Security"
                  width={200}
                  height={170}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 4️⃣ Logistics Support */}
            <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-text-dark pr-4">
                    Logistics & Delivery Support
                  </h3>
                  <Image
                    src="/images/Group 87.png"
                    alt="Tick Mark"
                    width={40}
                    height={40}
                    className="object-contain flex-shrink-0"
                  />
                </div>
                <p className="text-base text-text-overlay">
                  We help handle packaging, shipping, and returns, stress-free selling.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Image
                  src="/images/img_image_68.png"
                  alt="Logistics"
                  width={180}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 5️⃣ Zero Technical Hassle */}
            <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-text-dark pr-4">
                    Zero Technical Hassle
                  </h3>
                  <Image
                    src="/images/Group 87.png"
                    alt="Tick Mark"
                    width={40}
                    height={40}
                    className="object-contain flex-shrink-0"
                  />
                </div>
                <p className="text-base text-text-overlay">
                  No coding or setup required, we manage the backend, you manage your business.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Image
                  src="/images/img_image_69.png"
                  alt="Technical Support"
                  width={180}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How Selling Works Section */}
      <section className="w-full bg-[#FFFBF9] py-12 sm:py-16 lg:py-[58px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[50px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-[#111111]">
              How Selling Works? (Process Timeline)
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-24 bg-accent-light rounded-lg mb-4"></div>
                  <div className="h-4 bg-accent-light rounded mb-2"></div>
                  <div className="h-3 bg-accent-light rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  {/* Step Icon */}
                  <div className="w-20 sm:w-24 lg:w-[94px] h-20 sm:h-24 lg:h-[96px] bg-[#52002B] rounded-[24px] flex items-center justify-center mb-4 sm:mb-6 shadow-md transition-transform hover:scale-105">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={56}
                      height={56}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 filter brightness-0 invert"
                    />
                  </div>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[40px] left-1/2 w-full z-0" style={{ transform: 'translateX(60px)' }}>
                      <Image
                        src={index === 1 ? "/images/Ellipse 82.png" : "/images/img_ellipse_79.png"}
                        alt="Connector"
                        width={180}
                        height={40}
                        className="w-[calc(100%-120px)] h-auto object-contain opacity-70"
                      />
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="text-center max-w-[280px] sm:max-w-[300px] lg:max-w-[298px] mt-4">
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-tight text-[#8B1E4F] mb-2 capitalize">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed text-[#555555]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Who can Sell Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[58px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="w-full lg:w-[32%] flex justify-center lg:justify-start">
              <div className="w-[200px] sm:w-[300px] lg:w-[340px] xl:w-[400px] 2xl:w-[454px] h-[280px] sm:h-[420px] lg:h-[500px] xl:h-[580px] 2xl:h-[670px]">
                <Image
                  src="/images/img_image_70.png"
                  alt="Pet Business Owners"
                  width={454}
                  height={670}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[60%] xl:w-[64%]">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-[#111111] mb-3 sm:mb-4 lg:mb-[18px]">
                  Who can Sell?
                </h2>
                <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#555555]">
                  Petoty welcomes all types of pet product sellers — big or small.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {sellerCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="flex items-center border border-primary-dark rounded-lg p-3 sm:p-4 bg-secondary-background hover:bg-accent-light transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] bg-[#52002B] rounded-3xl flex items-center justify-center flex-shrink-0 mr-4 sm:mr-5 lg:mr-[26px]">
                      <span className="text-base sm:text-lg lg:text-[18px] font-semibold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-base sm:text-lg lg:text-[18px] font-medium text-[#333333]">
                      {category.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petoty at a Glance Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[54px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[62px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[36px] font-bold leading-tight text-[#111111] mb-4 sm:mb-6 lg:mb-[18px]">
              <span className="text-[#111111]">Petoty at a </span>
              <span className="text-[#8B1E4F]">Glance</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#555555] max-w-6xl mx-auto">
              Reach a fast-growing community of pet parents and scale your business with Petoty's trusted platform.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] xl:gap-[72px] mb-8 sm:mb-12 lg:mb-[66px]">
            {/* Left Content */}
            <div className="w-full lg:w-[55%] xl:w-[60%]">
              <p className="text-lg sm:text-[20px] lg:text-[22px] font-medium leading-relaxed text-[#333333]">
                At Petoty, we connect passionate pet brands with a rapidly expanding community of pet parents across India. With seamless onboarding, reliable logistics, and powerful visibility tools, we help sellers build trust, boost sales, and grow their business effortlessly.
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="w-full lg:w-[40%] xl:w-[35%]">
              <div className="grid grid-cols-2 gap-4 lg:gap-x-[30px] xl:gap-x-[58px] lg:gap-y-[30px] xl:gap-y-[44px]">
                {statistics.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight text-[#4CAF50] mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-[18px] font-medium text-[#777777]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-4">
            <div className="w-full sm:w-1/2">
              <Image
                src="/images/img_unsplash_swkkiitjmyc.png"
                alt="Pet Business Success"
                width={652}
                height={438}
                className="w-full h-[200px] sm:h-[250px] lg:h-[438px] object-cover rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <Image
                src="/images/img_unsplash_lru2jpt1yd0.png"
                alt="Happy Pet Customers"
                width={652}
                height={438}
                className="w-full h-[200px] sm:h-[250px] lg:h-[438px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="w-full bg-accent-warm py-12 sm:py-16 lg:py-[54px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 sm:mb-12 lg:mb-[34px]">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex items-center gap-4 lg:gap-6">
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-[#111111]">
                  Popular Categories to Sell on Petoty
                </h2>
                <div className="w-10 h-10 lg:w-[46px] lg:h-[46px] flex-shrink-0">
                  <Image
                    src="/images/img_rectangle_190.gif"
                    alt="Category Icon"
                    width={46}
                    height={46}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-[150px] sm:w-[200px] lg:w-[302px] h-[60px] sm:h-[80px] lg:h-[128px]">
                  <Image
                    src="/images/img_ellipse_43.png"
                    alt="Category Background"
                    width={302}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category Grid */}
          <div className="bg-[#FDF6F9] border border-[#EBBED2] rounded-[32px] 
                px-6 sm:px-10 lg:px-8 xl:px-[40px] 
                py-10 sm:py-14 lg:py-0 w-full max-w-[1320px] mx-auto lg:h-[560px] flex flex-col justify-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Cats */}
              <div>
                <div className="mb-8 lg:mb-[36px] flex justify-center">
                  <span className="block w-full max-w-[180px] text-center px-4 sm:px-6 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-3 xl:py-[18px] rounded-xl lg:rounded-2xl bg-[#8B1E4F] text-white text-xl sm:text-2xl lg:text-xl xl:text-[26px] font-bold shadow-md">
                    Cats
                  </span>
                </div>
                <div className="space-y-4 lg:space-y-5 xl:space-y-[22px]">
                  {catsItems.map((item, index) => (
                    <CategoryItem key={index} number={index + 1} name={item} />
                  ))}
                </div>
              </div>

              {/* Dogs */}
              <div>
                <div className="mb-8 lg:mb-[36px] flex justify-center">
                  <span className="block w-full max-w-[180px] text-center px-4 sm:px-6 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-3 xl:py-[18px] rounded-xl lg:rounded-2xl bg-[#8B1E4F] text-white text-xl sm:text-2xl lg:text-xl xl:text-[26px] font-bold shadow-md">
                    Dogs
                  </span>
                </div>
                <div className="space-y-4 lg:space-y-5 xl:space-y-[22px]">
                  {dogsItems.map((item, index) => (
                    <CategoryItem key={index} number={index + 1} name={item} />
                  ))}
                </div>
              </div>

              {/* Birds */}
              <div>
                <div className="mb-8 lg:mb-[36px] flex justify-center">
                  <span className="block w-full max-w-[180px] text-center px-4 sm:px-6 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-3 xl:py-[18px] rounded-xl lg:rounded-2xl bg-[#8B1E4F] text-white text-xl sm:text-2xl lg:text-xl xl:text-[26px] font-bold shadow-md">
                    Birds
                  </span>
                </div>
                <div className="space-y-4 lg:space-y-5 xl:space-y-[22px]">
                  {birdsItems.map((item, index) => (
                    <CategoryItem key={index} number={index + 1} name={item} />
                  ))}
                </div>
              </div>

              {/* Fishes */}
              <div>
                <div className="mb-8 lg:mb-[36px] flex justify-center">
                  <span className="block w-full max-w-[180px] text-center px-4 sm:px-6 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-3 xl:py-[18px] rounded-xl lg:rounded-2xl bg-[#8B1E4F] text-white text-xl sm:text-2xl lg:text-xl xl:text-[26px] font-bold shadow-md">
                    Fishes
                  </span>
                </div>
                <div className="space-y-4 lg:space-y-5 xl:space-y-[22px]">
                  {fishesItems.map((item, index) => (
                    <CategoryItem key={index} number={index + 1} name={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative w-full bg-[#52002B] py-12 sm:py-16 lg:py-[60px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[52px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-[42%]">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold leading-tight text-white mb-6 sm:mb-8">
                Petoty Seller Support — We're Here 24/7
              </h2>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[58%] space-y-8 sm:space-y-10 lg:space-y-[30px] xl:space-y-[50px]">
              <p className="text-lg sm:text-[20px] lg:text-[22px] font-normal leading-relaxed text-[#FCFAFA]">
                At Petoty, we support you at every step of your selling journey, from onboarding to order fulfillment and growth.
              </p>

              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex-shrink-0">
                  <Image
                    src="/images/img_group.png"
                    alt="Support Team"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-lg sm:text-[20px] lg:text-[22px] font-normal leading-relaxed text-[#FCFAFA] mb-2 sm:mb-3">
                    You can reach our support team at:
                  </p>
                  <Link
                    href="mailto:seller@petoty.com"
                    className="text-lg sm:text-[20px] lg:text-[22px] font-bold leading-relaxed text-[#FCFAFA] underline hover:opacity-80 transition-opacity"
                  >
                    seller@petoty.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Support Image */}
          <div className="absolute bottom-0 right-0 w-[180px] sm:w-[240px] lg:w-[350px] h-auto hidden lg:block">
            <Image
              src="/images/img_union.png"
              alt="Support Illustration"
              width={350}
              height={380}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <Newsletter />

      {/* Footer */}
      <Footer />
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </main>
  )
}
