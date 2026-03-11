"use client";

import { X, Image as ImageIcon, Edit2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (!isOpen) return null;

  const handleRequestOtp = () => {
    // Validate that phone number is exactly 10 digits
    if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
      setError("");
      setStep("otp");
    } else {
      setError("Please enter 10 digit number");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Auto-focus previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // Reset state on close if desired, we can just intercept onClose
  const handleClose = () => {
    onClose();
    // Optional: reset after transition
    setTimeout(() => {
      setStep("login");
      setPhoneNumber("");
      setError("");
      setOtp(["", "", "", ""]);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Wrapper to hold modal and outside close button */}
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Modal content */}
        <div className="w-[800px] max-w-[95vw] h-[500px] bg-white rounded-[2rem] overflow-hidden flex shadow-2xl">
          {/* Left Side (Image Placeholder) */}
          <div className="w-1/2 h-full flex items-center justify-center border-r border-gray-100 p-8">
            <div className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-xl bg-gray-50">
              <ImageIcon className="w-10 h-10 text-gray-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-1/2 h-full px-12 py-10 flex flex-col items-center">
            <div className="mb-2 mt-2">
              <Image
                src="/images/logos/img_image_3.png"
                alt="Petoty Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>

            {step === "login" ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-1 mt-4">Login with OTP</h2>
                <p className="text-gray-400 text-[13px] mb-8 font-medium">Enter Mobile Number</p>

                <div className={`w-full flex items-center border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg overflow-hidden mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-300 bg-gray-50/50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-6 h-auto rounded-[2px] shadow-sm shrink-0">
                      <path d="M0 0h60v40H0z" fill="#fff"/>
                      <path d="M0 0h60v13.3H0z" fill="#FF9933"/>
                      <path d="M0 26.7h60V40H0z" fill="#138808"/>
                      <circle cx="30" cy="20" r="4.5" fill="#000080"/>
                    </svg>
                    <span className="text-gray-600 font-medium text-[13px] whitespace-nowrap">+91</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10)); // Allow only up to 10 digits
                      if (error) setError("");
                    }}
                    className="flex-1 px-4 py-3 outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                
                <div className="w-full h-5 mb-4">
                  {error && <p className="text-red-500 text-xs font-medium text-left">{error}</p>}
                </div>

                <button 
                  onClick={handleRequestOtp}
                  className="w-full bg-[#52002B] text-white py-3 flex items-center justify-center rounded-lg font-medium hover:bg-[#8B1E4F] transition shadow-md">
                  Request OTP
                </button>

                <div className="mt-auto">
                  <p className="text-[10px] text-gray-400 font-medium leading-tight text-center">
                    I accept that I have read & understood<br />Privacy Policy and T&Cs
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 mt-2">Enter OTP</h2>
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-[11px] font-medium leading-tight mb-1">We have sent verification code to</p>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-gray-500 text-[11px] font-medium">+91 {phoneNumber}</span>
                    <button 
                      onClick={() => setStep("login")} 
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpRefs.current[index] = el;
                      }}
                      type="text"
                      maxLength={1}
                      className="w-14 h-11 border border-gray-200 rounded-lg text-center text-lg font-medium text-gray-800 outline-none focus:border-[#8B1E4F] focus:ring-1 focus:ring-[#8B1E4F] transition-all bg-white shadow-[0_0_2px_rgba(0,0,0,0.05)]"
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    />
                  ))}
                </div>

                <button className="w-full bg-[#52002B] text-white py-3 flex items-center justify-center rounded-lg font-medium text-sm hover:bg-[#8B1E4F] transition shadow-md">
                  Verify OTP
                </button>

                <div className="mt-8 flex flex-col items-center gap-1">
                  <p className="text-[11px] text-gray-400 font-medium">
                    Didn't Receive the OTP?
                  </p>
                  <button className="text-[11px] text-[#8B1E4F] font-semibold hover:text-[#52002B] transition-colors decoration-[#8B1E4F] underline underline-offset-2">
                    Resend OTP
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
