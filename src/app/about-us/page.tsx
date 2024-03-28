import React from 'react'
import AboutUsCompo from './aboutUsPageCompo'
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title:"About Us",
  description: "This is About Us page",
  keywords:['shop','eccomerse','sell']
};
const page = () => {
  return (
    <div>
      <AboutUsCompo/>
    </div>
  )
}

export default page
