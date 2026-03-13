"use client";

import React from "react";
import { TrendingUp, Briefcase, Shield, Phone, Eye, Handshake, Rocket, Cpu, Store, BarChart3, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Adjusted components to use pure Tailwind
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ${className || ''}`}>
    {children}
  </div>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 ${className || ''}`}>
    {children}
  </div>
);

const Separator = () => <hr className="border-t border-gray-200 my-8" />;

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="border-none shadow-none">
    <CardContent className="pt-6">
      <h2 className="text-[24px] font-bold text-center mb-6 flex items-center justify-center gap-2 text-black">
        {icon} {title}
      </h2>
      {children}
    </CardContent>
  </Card>
);

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul className="space-y-4 list-disc list-inside text-gray-700">
    {items.map((item, i) => (
      <li key={i} className="text-[17px] font-medium leading-relaxed">{item}</li>
    ))}
  </ul>
);

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 space-y-8">
          
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-[34px] lg:text-[40px] font-bold text-black">📈 Investors</h1>
            <p className="text-xl font-semibold text-black">Building India's Most Trusted Pet Care Ecosystem</p>
            <p className="text-[17px] text-gray-600 font-medium">
              Petoty is redefining pet parenting by combining commerce, services, technology, insurance, and offline presence in one scalable platform. We are building the future of pet care in India.
            </p>
          </div>

          <Separator />

          {/* About Petoty */}
          <Section icon={<span className="text-3xl">🐾</span>} title="About Petoty">
            <p className="text-center text-gray-600 font-medium mb-4">Petoty is a full-stack pet care company offering:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "A multi-vendor marketplace for pet products",
                "Doorstep pet services (grooming, training, vet consultations)",
                "Pawscription – smart pet tracking & health monitoring",
                "Pawsurance – pet insurance for dogs & cats",
                "Petoty Experience Centres through a franchise model",
              ]} />
            </div>
            <p className="text-[15px] font-medium text-gray-500 text-center mt-6">
              Our integrated ecosystem enables strong customer retention, multiple revenue streams, and long-term scalability.
            </p>
          </Section>

          {/* Market Opportunity */}
          <Section icon={<TrendingUp className="h-6 w-6 text-black" />} title="Market Opportunity">
            <div className="flex justify-center">
              <BulletList items={[
                "India's pet care market is growing rapidly, driven by rising pet adoption and premiumization",
                "Increasing demand for convenience-based pet services",
                "Low penetration of pet insurance and smart pet technology",
                "Fragmented market with strong scope for platform consolidation",
              ]} />
            </div>
            <p className="text-[15px] font-medium text-gray-500 text-center mt-6">
              Petoty is positioned to become a category-defining brand in India's pet care industry.
            </p>
          </Section>

          {/* Our Business Model */}
          <Section icon={<Briefcase className="h-6 w-6 text-black" />} title="Our Business Model">
            <p className="text-center text-gray-600 font-medium mb-4">Petoty operates on a multi-revenue, asset-light model:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Product marketplace commissions",
                "Pet service booking fees & commissions",
                "Pawscription device sales & subscriptions",
                "Pawsurance policy commissions",
                "Franchise onboarding fees & ongoing revenue share",
              ]} />
            </div>
            <p className="text-[15px] font-medium text-gray-500 text-center mt-6">
              This diversified model ensures predictable and scalable revenue growth.
            </p>
          </Section>

          {/* Competitive Advantage */}
          <Section icon={<span className="text-3xl">🏆</span>} title="Competitive Advantage">
            <div className="flex justify-center">
              <BulletList items={[
                "End-to-end pet care ecosystem under one brand",
                "Technology-driven platform with data-led insights",
                "Strong offline + online integration",
                "Recurring revenue via subscriptions and insurance",
                "High customer lifetime value (LTV)",
                "Scalable franchise expansion model",
              ]} />
            </div>
          </Section>

          {/* Product & Technology */}
          <Section icon={<Cpu className="h-6 w-6 text-black" />} title="Product & Technology">
            <div className="flex justify-center">
              <BulletList items={[
                "Proprietary web and mobile applications",
                "Smart device integration for real-time pet tracking",
                "Data-backed health & activity analytics",
                "Centralized partner and franchise management systems",
                "Secure payment and compliance-ready infrastructure",
              ]} />
            </div>
          </Section>

          {/* Franchise Expansion Strategy */}
          <Section icon={<Store className="h-6 w-6 text-black" />} title="Franchise Expansion Strategy">
            <p className="text-center text-gray-600 font-medium mb-4">Petoty Experience Centres act as:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Local fulfillment & service hubs",
                "Customer education & trust centres",
                "Sales channels for Pawscription & Pawsurance",
                "The franchise model enables rapid geographic expansion with minimal capital expenditure",
              ]} />
            </div>
          </Section>

          {/* Growth Strategy */}
          <Section icon={<BarChart3 className="h-6 w-6 text-black" />} title="Growth Strategy">
            <div className="flex justify-center">
              <BulletList items={[
                "City-wise expansion of services and franchises",
                "Strategic brand partnerships",
                "Influencer and community-led marketing",
                "Expansion of Pawscription features and subscriptions",
                "Insurance product innovation and bundling",
              ]} />
            </div>
          </Section>

          {/* Vision & Mission */}
          <Section icon={<span className="text-3xl">✨</span>} title="Vision & Mission">
            <div className="text-center space-y-6 text-gray-700 text-[17px] font-medium">
              <div>
                <p className="font-bold text-black text-xl mb-1 mt-4">Vision</p>
                <p>To become India's most trusted and comprehensive pet care platform.</p>
              </div>
              <div>
                <p className="font-bold text-black text-xl mb-1 mt-6">Mission</p>
                <p>To simplify pet parenting by offering reliable products, services, technology, and financial protection under one ecosystem.</p>
              </div>
            </div>
          </Section>

          {/* Investment Opportunity */}
          <Section icon={<Handshake className="h-6 w-6 text-black" />} title="Investment Opportunity">
            <p className="text-center text-gray-600 font-medium mb-4">We are open to partnerships with:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Angel investors",
                "Venture capital firms",
                "Strategic industry partners",
              ]} />
            </div>
            <p className="text-center text-gray-600 font-medium mt-8 mb-4">Funds will be deployed towards:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Technology development",
                "Market expansion",
                "Brand building",
                "Operations & supply chain",
                "Team growth",
              ]} />
            </div>
          </Section>

          {/* Investor Contact */}
          <div className="text-center space-y-4 my-10">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 text-black">
              <Phone className="h-6 w-6 text-black" /> Investor Contact
            </h2>
            <p className="text-[17px] font-medium text-gray-600">For investment discussions, partnerships or detailed decks:</p>
            <div className="space-y-2 text-[17px] font-medium text-black">
              <p>📧 investors@petoty.com</p>
              <p>📄 Pitch deck available on request</p>
            </div>
          </div>

          <Separator />

          {/* Transparency & Governance */}
          <Section icon={<Shield className="h-6 w-6 text-black" />} title="Transparency & Governance">
            <p className="text-center text-gray-600 font-medium mb-4">Petoty is committed to:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Ethical business practices",
                "Transparent reporting",
                "Customer and partner trust",
                "Long-term value creation",
              ]} />
            </div>
          </Section>

          {/* Closing */}
          <div className="text-center space-y-3 pb-8 pt-6">
            <h2 className="text-[22px] font-bold flex items-center justify-center gap-2 text-black">
              <Rocket className="h-6 w-6 text-black" /> Join Us in Shaping the Future of Pet Care
            </h2>
            <p className="text-[17px] font-medium text-gray-700 max-w-xl mx-auto">
              Petoty is not just a business — it's a growing ecosystem with strong fundamentals and massive potential.
            </p>
            <p className="text-[17px] font-bold text-black mt-2">We invite you to be part of our journey.</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
