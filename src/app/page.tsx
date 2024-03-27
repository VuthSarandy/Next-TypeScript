// import CardComponent from "@/components/cards/CardComponent";
// import { ProductType } from "@/types/product";
// import { Suspense } from "react";
// import LoadingComponent from "./loading";
// import { UserType } from "@/types/user";
// import UserComponent from "@/components/cards/UserComponent";

// async function fetchProduct() {
//   const product = await fetch("https://dummyjson.com/users?limit=10", {
//     cache: "no-store"
//   });
//   const res = await product.json();
//   return res.products;
// }

// export default async function Home() {
//   const product = await fetchProduct();
//   console.log(product)

//   return (
//     <>
//       <div className="mt-10 flex justify-center flex-wrap gap-5">
//         <h1 className="font-bold text-large">Hi</h1>
//         <Suspense fallback={<LoadingComponent/>} >
//         {product?.map((pro: UserType) => (
//           <UserComponent
//             image={pro.image}
//             firstName={pro.firstName}
//             key={pro.id}
//           />
//         ))}
//         </Suspense>
//       </div>
//     </>
//   );
// }

import CardComponent from "@/components/cards/CardComponent";
import { UserType } from "@/types/user";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import UserCardComponent from "@/components/cards/UserComponent";

async function fetchUser() {
 const user = await fetch("https://dummyjson.com/users?limit=10", {
  cache: "no-store",
 });
 const res = await user.json();
 return res.users;
}

export default async function Home() {
 const user = await fetchUser();
 return (
  <>
   <div className="mt-10 flex justify-center flex-wrap gap-5">
    
    {user?.map((user: UserType) => (
      <UserCardComponent
       image={user.image}
       firstName={user.firstName}
       key={user.id}
      />
     ))}
   </div>
  </>
 );
}