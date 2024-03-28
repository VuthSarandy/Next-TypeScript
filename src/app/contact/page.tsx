import React from 'react'
import { Metadata } from 'next';
import ContactPageCompo from './ContactPageCompo';
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title:"Contact",
  description: "This is Contact page",
  keywords:['shop','eccomerse','sell']
};
export default function page() {
  return (
    <div>
      <ContactPageCompo/>

      
    </div>
  )
}
