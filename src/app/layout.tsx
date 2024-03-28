import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  display: "swap",
  style: ['italic','normal']
});
const kantumruy_pro = Kantumruy_Pro({
  subsets:["khmer"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    template: "%s - SarandyShop",
    default: "Shop!68",
  },
  description: "This is my lucky  shop description",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: "SarandyShop",
    description: "This is description shop",
    images: [ 
      "https://cdn.pixabay.com/photo/2024/02/22/00/19/hexagon-8588837_1280.jpg",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className} ${kantumruy_pro.className}`}>
      
     <NextUILayout>
     <Suspense fallback={<LoadingComponent />}>
     <NavbarComponent />

      </Suspense>
      <ErrorBoundary errorComponent={Error}>
        {children}
      </ErrorBoundary>
          
         
        </NextUILayout>
      </body>
    </html>
  );
}
