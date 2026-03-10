import { Twitter, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const columns = [
    {
      title: "Get to Know Us",
      links: ["About Us", "News & Blog", "Careers", "Investors", "Contact Us"],
    },
    {
      title: "Customer Service",
      links: [
        "Help Center",
        "FAQ's",
        "Franchise",
        "Feedback",
        "Become a Vendor",
        "Payment Method",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Legal", "Sitemap"],
    },
    {
      title: "Orders & Returns",
      links: [
        "Track Order",
        "Shipping & Delivery",
        "Return & Exchange",
        "Price Match Guarantee",
      ],
    },
  ];

  return (
    <footer className="pt-14">

      {/* Border Container */}

      <div className="mx-6 border-2 border-black rounded-[40px]">

        {/* Inner Content Padding */}
        <div className="px-14 py-12">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <Image
                src="/images/logos/img_image_3.png"
                alt="Petoty"
                width={180}
                height={90}
                className="mb-4"
              />

              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Your All-In-One Pet Care
              </p>

              <p className="text-base font-semibold mb-3">
                Stay Connected
              </p>

              <div className="flex gap-4">
                {[Twitter, Facebook, Youtube, Instagram, MessageCircle].map(
                  (Icon, i) => (
                    <Icon key={i} className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  )
                )}
              </div>
            </div>

            {/* Footer Columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xl font-semibold mb-4">
                  {col.title}
                </h4>

                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>

                      <a href="#"
                        className="text-base text-muted-foreground hover:text-primary transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-6 flex justify-between items-center py-6">

        <p className="text-sm text-muted-foreground">
          Copyright © 2025 Petoty, All rights reserved.
        </p>

        <div className="flex items-center">
          <Image
            src="/assets/img_image_59.png"
            alt="payment methods"
            width={420}
            height={40}
            className="object-contain"
          />
        </div>

      </div>

    </footer>
  );
};

export default Footer;