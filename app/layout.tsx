import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petoty – Your All-In-One Pet Care",
  description:
    "Petoty is your one-stop destination for pet food, grooming, accessories, vet care, and more. Shop for dogs, cats, birds, and fishes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
