"use client";

import { useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Star,
  Bell,
  Home,
  Calendar,
  Dumbbell,
  Footprints,
  Scissors,
  Building2,
  HandHeart,
  Stethoscope,
  Dog,
  Edit2,
} from "lucide-react";

// ─── Brand colours ──────────────────────────────────────────────────────────────
const PRIMARY = "#8B1E4F";
const DARK = "#52002B";
const ACCENT = "#f5e8ef";

// ─── Step Progress Bar ──────────────────────────────────────────────────────────
function StepBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-bold" style={{ color: PRIMARY }}>
        {current}/{total}
      </span>
      <div className="flex items-center gap-0 flex-1">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center flex-1">
            {/* Dot */}
            <div
              className="w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all duration-300"
              style={{
                background: i < current ? PRIMARY : "#fff",
                borderColor: i < current ? PRIMARY : "#e0c4d0",
                boxShadow: i < current ? `0 0 0 3px ${PRIMARY}22` : "none",
              }}
            />
            {/* Connecting line (not after last dot) */}
            {i < total - 1 && (
              <div
                className="flex-1 h-0.5 transition-all duration-300"
                style={{ background: i < current - 1 ? PRIMARY : "#e0c4d0" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Step 1: Select Package ─────────────────────────────────────────────────────
function Step1({ onNext, serviceName }: { onNext: () => void; serviceName: string }) {
  const [selectedPackage, setSelectedPackage] = useState("basic");

  const packages = [
    { id: "puppy", name: "Puppy Training", price: 4999, sessions: 6, icon: <Dumbbell size={28} style={{ color: PRIMARY }} />, bg: "#fff0f5" },
    { id: "basic", name: "Basic Obedience Training", price: 12999, sessions: 15, icon: <Dog size={28} style={{ color: PRIMARY }} />, bg: "#f0fbf5" },
    { id: "behaviour", name: "Behaviour Training", price: 14999, sessions: 20, icon: <HandHeart size={28} style={{ color: PRIMARY }} />, bg: "#fff8f0" },
    { id: "advance", name: "Advance Training", price: 30000, sessions: 30, icon: <Stethoscope size={28} style={{ color: PRIMARY }} />, bg: "#f0f4ff" },
  ];

  const extraAddOns = [
    "Gentle", "Take", "Yes",
    "No / Leave It", "Jumping Control", "Socialization with Humans",
    "Sit/Stay", "Shake Hand", "Leash Walk",
    "Name recognition", "Excessive Barking", "Socialization with Pets",
    "Crate Training", "Stand/Stay",
  ];

  return (
    <div className="w-full">
      <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: PRIMARY }}>
        {serviceName}
      </p>
      <h2 className="text-xl font-bold text-[#1a2b3c] mb-5">01. Select a Package</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg.id)}
            className="cursor-pointer p-6 rounded-3xl border-2 transition-all flex items-center gap-6 group hover:-translate-y-1"
            style={{
              background: pkg.bg,
              borderColor: selectedPackage === pkg.id ? PRIMARY : "transparent",
              boxShadow: selectedPackage === pkg.id ? `0 10px 30px -10px ${PRIMARY}40` : "0 4px 20px -10px rgba(0,0,0,0.05)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm transition-transform group-hover:scale-110">
              {pkg.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[#1a2b3c] leading-snug mb-1">{pkg.name}</h3>
              <p className="text-xs text-gray-500 mb-1 font-medium">{pkg.sessions} sessions</p>
              <p className="text-lg font-extrabold text-[#1a2b3c] mb-2">₹ {pkg.price.toLocaleString("en-IN")}.00</p>
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-500" /> Biting Issue
                </span>
                <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-500" /> Come
                </span>
                <span className="text-[11px] font-bold" style={{ color: PRIMARY }}>+ 13 more</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a2b3c] mb-3">
        Select Extra Add Ons{" "}
        <span className="font-normal text-gray-400 normal-case">(with additional cost)</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {extraAddOns.map((addon) => (
          <label
            key={addon}
            className="flex items-center justify-between px-3 py-2.5 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-[#c08caa] transition-colors"
          >
            <span className="text-[10px] font-medium text-gray-600">{addon}</span>
            <input type="checkbox" className="w-3.5 h-3.5 rounded accent-[#8B1E4F]" />
          </label>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="px-10 py-3.5 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg text-sm"
          style={{ background: PRIMARY }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Step 2: Book Date & Time ───────────────────────────────────────────────────
function Step2({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const [selectedSlot, setSelectedSlot] = useState("morning");

  const timeSlots = [
    { id: "morning", label: "Morning", icon: <Clock size={15} className="text-orange-400" /> },
    { id: "afternoon", label: "Afternoon", icon: <Star size={15} className="text-yellow-500" /> },
    { id: "evening", label: "Evening", icon: <Bell size={15} className="text-indigo-400" /> },
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-[#1a2b3c] mb-5">02. Book Date & Time</h2>

      <div className="space-y-5 mb-6">
        <div>
          <label className="block text-[10px] font-bold text-[#1a2b3c] uppercase tracking-wide mb-2">
            Select Service Required Date
          </label>
          <input
            type="date"
            defaultValue="2026-03-13"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8B1E4F]/20"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-[#1a2b3c] uppercase tracking-wide mb-2">
            Select Service Required Time
          </label>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => setSelectedSlot(slot.id)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-bold transition-all"
                style={
                  selectedSlot === slot.id
                    ? { borderColor: PRIMARY, color: PRIMARY, background: ACCENT }
                    : { borderColor: "#e5e7eb", color: "#9ca3af", background: "#fff" }
                }
              >
                {slot.icon} {slot.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-[#1a2b3c] uppercase tracking-wide mb-2">
            Select Preferable Time
          </label>
          <div className="relative">
            <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 appearance-none focus:outline-none">
              {["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
                "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]
                .map(t => <option key={t}>{t}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-5 border-t border-dashed border-gray-200">
        <button onClick={onBack} className="px-8 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm">
          Back
        </button>
        <button onClick={onNext} className="px-10 py-3.5 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg text-sm" style={{ background: PRIMARY }}>
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Login / Sign Up ────────────────────────────────────────────────────
function Step3({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleRequestOtp = () => {
    if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
      setError("");
      setStep("otp");
    } else {
      setError("Please enter 10 digit number");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-[#1a2b3c] mb-1">
        03. Login / Sign Up
      </h2>
      <p className="text-xs text-gray-400 mb-6">Log in or create an account to confirm your booking.</p>

      <div className="max-w-sm mx-auto flex flex-col items-center">
        {step === "login" ? (
          <>
            <h2 className="text-[17px] font-bold text-gray-800 mb-1">Login with OTP</h2>
            <p className="text-gray-400 text-xs mb-6 font-medium">Enter Mobile Number</p>

            <div className={`w-full flex items-center border ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl overflow-hidden mb-2 shadow-sm bg-white`}>
              <div className="flex items-center gap-2 px-4 py-3.5 border-r border-gray-200 bg-gray-50/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-5 h-auto rounded-[2px] shadow-sm shrink-0">
                  <path d="M0 0h60v40H0z" fill="#fff"/>
                  <path d="M0 0h60v13.3H0z" fill="#FF9933"/>
                  <path d="M0 26.7h60V40H0z" fill="#138808"/>
                  <circle cx="30" cy="20" r="4.5" fill="#000080"/>
                </svg>
                <span className="text-gray-600 font-bold text-[13px] whitespace-nowrap">+91</span>
              </div>
              <input
                type="text"
                placeholder="Mobile Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                  if (error) setError("");
                }}
                className="flex-1 px-4 py-3.5 outline-none text-sm text-gray-800 placeholder:text-gray-400 font-medium"
              />
            </div>
            
            <div className="w-full h-5 mb-3">
              {error && <p className="text-red-500 text-xs font-bold text-left">{error}</p>}
            </div>

            <button 
              onClick={handleRequestOtp}
              className="w-full bg-[#8B1E4F] text-white py-3.5 rounded-xl font-bold hover:bg-[#52002B] transition-all shadow-md active:scale-[0.98]">
              Request OTP
            </button>

            <div className="mt-5 w-full">
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed text-center">
                I accept that I have read & understood<br />Privacy Policy and T&Cs
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-[17px] font-bold text-gray-800 mb-1">Enter OTP</h2>
            <div className="text-center mb-6">
              <p className="text-gray-400 text-[11px] font-medium leading-tight mb-1">
                We have sent a verification code to
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#8B1E4F] text-sm font-bold">+91 {phoneNumber}</span>
                <button 
                  onClick={() => setStep("login")} 
                  className="text-gray-400 hover:text-gray-800 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-7">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(el) => {
                    otpRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 border border-gray-200 rounded-xl text-center text-xl font-bold text-gray-800 outline-none focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/30 transition-all bg-white shadow-sm"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                />
              ))}
            </div>

            <button
               onClick={onNext}
               className="w-full bg-[#8B1E4F] text-white py-3.5 rounded-xl font-bold hover:bg-[#52002B] transition-all shadow-md active:scale-[0.98]">
              Verify & Confirm Booking
            </button>

            <div className="mt-6 flex flex-col items-center gap-1">
              <p className="text-[11px] text-gray-400 font-medium">
                Didn't Receive the OTP?
              </p>
              <button className="text-[11px] text-[#8B1E4F] font-bold hover:text-[#52002B] transition-colors underline underline-offset-2">
                Resend OTP
              </button>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-start pt-6 mt-4 border-t border-dashed border-gray-200">
        <button onClick={onBack} className="px-8 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm">
          Back
        </button>
      </div>
    </div>
  );
}

// ─── Success Step ───────────────────────────────────────────────────────────────
function SuccessStep({ onReturnHome, serviceName }: { onReturnHome: () => void; serviceName: string }) {
  return (
    <div className="w-full flex flex-col items-center py-4">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#ecfdf5", color: "#22c55e" }}>
        <CheckCircle2 size={38} />
      </div>
      <h2 className="text-2xl font-bold text-[#1a2b3c] mb-1">Thank You!</h2>
      <p className="text-gray-400 text-center mb-6 text-sm">Your booking has been successfully placed and confirmed.</p>

      <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-3.5 border-b border-gray-50 flex items-center gap-2" style={{ background: ACCENT }}>
          <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "#e5c8d6", color: PRIMARY }}>
            <Star size={11} />
          </div>
          <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Booking Summary</span>
        </div>
        <div className="p-6 space-y-4">
          {[["Service", serviceName || "Basic Obedience Training"], ["Date", "March 13th, 2026"], ["Time", "Morning (09:00 AM)"]].map(([l, v]) => (
            <div key={l} className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">{l}</span>
              <span className="font-bold text-[#1a2b3c] text-xs">{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">Confirmation ID</span>
            <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{ background: ACCENT, color: PRIMARY }}>
              #PB-{Math.floor(10000 + Math.random() * 90000)}
            </span>
          </div>
        </div>
        <div className="bg-gray-50/60 px-6 py-3 text-center">
          <p className="text-[10px] text-gray-400 italic">A confirmation email has been sent to your registered address.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-white font-bold rounded-2xl text-sm shadow-md" style={{ background: PRIMARY }}>
          <Calendar size={16} /> View My Bookings
        </button>
        <button onClick={onReturnHome} className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-gray-200 text-[#1a2b3c] font-bold rounded-2xl hover:bg-gray-50 transition-all text-sm">
          <Home size={16} /> Return to Home
        </button>
      </div>
    </div>
  );
}

// ─── Pet image per service ──────────────────────────────────────────────────────
const serviceImages: Record<string, string> = {
  "Dog Training": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900",
  "Dog Walking": "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=900",
  "Pet Grooming": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=900",
  "Pet Boarding": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=900",
  "Pet Sitting": "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80&w=900",
  "Vet@home": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=900",
};
const DEFAULT_DOG = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=900";
const DEFAULT_CAT = "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=900";

// ─── Pet cut-out PNGs (transparent background) ─────────────────────────────────
const PET_CUTOUT_DOG = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500&h=700";
const PET_CUTOUT_CAT = "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=500&h=700";

// ─── Main inner ─────────────────────────────────────────────────────────────────
function BookingPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceName = searchParams.get("service") || "Pet Service";
  const pet = searchParams.get("pet") || "Dog";

  const [step, setStep] = useState(1);
  const TOTAL = 3;

  const heroImage = serviceImages[serviceName] ?? (pet === "Cat" ? DEFAULT_CAT : DEFAULT_DOG);
  const petCutout = pet === "Cat" ? PET_CUTOUT_CAT : PET_CUTOUT_DOG;

  if (step > TOTAL) {
    return (
      <>
        <Header />
        <div className="min-h-[80vh] flex items-center justify-center bg-[#FDF5F8] px-4 py-16">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">
            <SuccessStep serviceName={serviceName} onReturnHome={() => router.push("/")} />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* ── BACKGROUND HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: 440 }}>
        <img
          src={heroImage}
          alt={`${serviceName} background`}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${DARK}40 0%, ${DARK}20 100%)` }}
        />
      </div>

      {/* ── OVERLAPPING LAYOUT: full-width wrapper ── */}
      <div className="relative z-10 w-full -mt-[38vh] pb-32">

        {/* Inner: constrained width, flex row — pet left, card right */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 flex items-end gap-0">

          {/* ── LEFT: Pet cut-out image ── */}
          <div
            className="hidden lg:block flex-shrink-0 self-end"
            style={{ width: 320, marginBottom: 0, marginRight: -30, position: "relative", zIndex: 30 }}
          >
            <img
              src={petCutout}
              alt="Cute pet"
              className="w-full h-auto drop-shadow-2xl"
              style={{
                maskImage: "linear-gradient(to top, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 75%, transparent 100%)",
                maxHeight: 480,
                objectFit: "cover",
                objectPosition: "top",
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* ── RIGHT: White form card ── */}
          <div
            className="flex-1 bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] relative z-10 overflow-hidden"
          >
            {/* Step bar — top right of the card */}
            <div className="w-full flex justify-end px-10 md:px-14 pt-10 pb-2">
              <div className="w-72">
                <StepBar current={step} total={TOTAL} />
              </div>
            </div>

            {/* Form content */}
            <div className="px-8 md:px-14 pb-12">
              {step === 1 && <Step1 serviceName={serviceName} onNext={() => setStep(2)} />}
              {step === 2 && <Step2 onBack={() => setStep(1)} onNext={() => setStep(3)} />}
              {step === 3 && <Step3 onBack={() => setStep(2)} onNext={() => setStep(4)} />}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

// ─── Page export ────────────────────────────────────────────────────────────────
export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FDF5F8]">
          <div
            className="w-14 h-14 border-4 rounded-full animate-spin"
            style={{ borderColor: `${PRIMARY} transparent transparent transparent` }}
          />
        </div>
      }
    >
      <BookingPageInner />
    </Suspense>
  );
}