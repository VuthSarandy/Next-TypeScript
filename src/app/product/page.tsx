import { Metadata } from 'next';
import React from 'react'
import ProductPageCompo from './ProductPageCompo';

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title:"Product",
  description: "This is Product page",
  keywords:['shop','eccomerse','sell']
};
export default function page() {
  return (
    <div>
      <ProductPageCompo/>
      
    </div>
  )
}
