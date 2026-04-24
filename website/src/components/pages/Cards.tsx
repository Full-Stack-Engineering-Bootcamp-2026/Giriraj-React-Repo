// import React from 'react';
// import StatCard from "../CardComponent/StatCard";
// const Cards = () => {
//   return (
//     <div className="min-h-screen bg-neutral-50 dark:bg-[#0f1115] text-gray-300 p-4 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* --- HEADER & BANNER --- */}
//         <h1 className="text-2xl font-bold text-black dark:text-white">Cards</h1>
//         <div className="bg-[#7c3aed] p-3 rounded-lg flex justify-between items-center text-white text-sm">
//           <div className="flex items-center gap-2">
//             <span className="text-lg">★</span>
//             <span>Star this project on GitHub</span>
//           </div>
//           <button className="hover:underline font-medium text-xs">View more →</button>
//         </div>

//         {/* --- RENDER YOUR 1ST BLOCK (BIG SECTION CARDS) HERE --- */}
//         <section className="space-y-4">
//           <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
//             Big section cards
//           </h2>
  
//           <div className="w-full bg-[#1a1c23] border border-gray-800 rounded-lg p-6 min-h-[80px] flex items-center">
//                       <p className="text-gray-500 text-sm font-medium">
//                         Large, full width sections goes here
//                       </p>
//           </div>
//           </section>

//         {/* --- RENDER YOUR RESPONSIVE CARDS HERE --- */}
//         <section className="space-y-4">
//            <div className="mt-4">
//                      <StatCard />
//             </div>
//         </section>

//         {/* --- CARDS WITH TITLE --- */}
//         <section className="space-y-4">
//           <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
//             Cards with title
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Standard Dark Card */}
//             <div className="bg-[#1a1c23] border border-gray-800 p-6 rounded-lg space-y-3">
//               <h3 className="font-semibold text-white text-lg">Revenue</h3>
//               <p className="text-sm text-gray-400 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//             {/* Solid Colored Card */}
//             <div className="bg-[#7c3aed] p-6 rounded-lg space-y-3 shadow-lg shadow-purple-500/20">
//               <h3 className="font-semibold text-white text-lg">Colored card</h3>
//               <p className="text-sm text-purple-100 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Cards;

// import React from 'react';
// import StatCard from "../CardComponent/StatCard";

// const Cards = () => {
//   return (
//     // Removed p-4 and md:p-8 here
//     <div className="min-h-screen bg-neutral-50 dark:bg-[#0f1115] text-gray-300 font-sans">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* --- HEADER & BANNER --- */}
//         <h1 className="text-2xl font-bold text-black dark:text-white">Cards</h1>
//         <div className="bg-[#7c3aed] p-3 rounded-lg flex justify-between items-center text-white text-sm">
//           <div className="flex items-center gap-2">
//             <span className="text-lg">★</span>
//             <span>Star this project on GitHub</span>
//           </div>
//           <button className="hover:underline font-medium text-xs">View more →</button>
//         </div>

//         {/* --- BIG SECTION CARDS --- */}
//         <section className="space-y-4">
//           <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
//             Big section cards
//           </h2>
//           <div className="w-full bg-[#1a1c23] border border-gray-800 rounded-lg p-6 min-h-[80px] flex items-center">
//             <p className="text-gray-500 text-sm font-medium">
//               Large, full width sections goes here
//             </p>
//           </div>
//         </section>

//         {/* --- RESPONSIVE CARDS --- */}
//         <section className="space-y-4">
//            {/* Removed mt-4 wrapper */}
//            <StatCard />
//         </section>

//         {/* --- CARDS WITH TITLE --- */}
//         <section className="space-y-4">
//           <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
//             Cards with title
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Standard Dark Card */}
//             <div className="bg-[#1a1c23] border border-gray-800 p-6 rounded-lg space-y-3">
//               <h3 className="font-semibold text-white text-lg">Revenue</h3>
//               <p className="text-sm text-gray-400 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//             {/* Solid Colored Card - Shading removed as requested previously */}
//             <div className="bg-[#7c3aed] p-6 rounded-lg space-y-3">
//               <h3 className="font-semibold text-white text-lg">Colored card</h3>
//               <p className="text-sm text-purple-100 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Cards;

// import React from 'react';
// import StatCard from "../CardComponent/StatCard";

// const Cards = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-[#0f1115] text-gray-600 dark:text-gray-300 font-sans transition-colors duration-300">
//       <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
        
//         {/* --- HEADER & BANNER --- */}
//         <h1 className="text-2xl font-bold text-black dark:text-white">Cards</h1>
//         <div className="bg-[#7c3aed] p-3 rounded-lg flex justify-between items-center text-white text-sm shadow-sm">
//           <div className="flex items-center gap-2">
//             <span className="text-lg">★</span>
//             <span>Star this project on GitHub</span>
//           </div>
//           <button className="hover:underline font-medium text-xs">View more →</button>
//         </div>

//         {/* --- BIG SECTION CARDS --- */}
//         <section className="space-y-4">
//           <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
//             Big section cards
//           </h2>
//           <div className="w-full bg-gray-50 dark:bg-[#1a1c23] border border-gray-200 dark:border-gray-800 rounded-lg p-6 min-h-[80px] flex items-center">
//             <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">
//               Large, full width sections goes here
//             </p>
//           </div>
//         </section>

//         {/* --- RESPONSIVE CARDS --- */}
//         <section className="space-y-4">
//            {/* Note: Ensure StatCard component also uses dark: classes internally */}
//            <StatCard />
//         </section>

//         {/* --- CARDS WITH TITLE --- */}
//         <section className="space-y-4">
//           <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
//             Cards with title
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Standard Card */}
//             <div className="bg-gray-50 dark:bg-[#1a1c23] border border-gray-200 dark:border-gray-800 p-6 rounded-lg space-y-3">
//               <h3 className="font-semibold text-black dark:text-white text-lg">Revenue</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//             {/* Solid Colored Card (Static Color for both modes) */}
//             <div className="bg-[#7c3aed] p-6 rounded-lg space-y-3 shadow-md">
//               <h3 className="font-semibold text-white text-lg">Colored card</h3>
//               <p className="text-sm text-purple-100 leading-relaxed">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
//                 commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
//                 qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
//               </p>
//             </div>

//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Cards;
import React from 'react';
import StatCard from "../CardComponent/StatCard";
import { CiStar } from "react-icons/ci"; // Ensure react-icons is installed
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1115] text-gray-600 dark:text-gray-300 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
        
        {/* --- REPLACED HEADER & BANNER SECTION --- */}
        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Dashboard</h3>
        
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',
          padding: '10px', borderRadius: '5px', width: '100%', backgroundColor: 'purple', color: 'white'
        }}>
          <CiStar />
          <span>Star this project on GitHub</span>
          <span style={{ marginLeft: "auto", cursor: "pointer" }}>View More</span>
        </div>

        {/* --- BIG SECTION CARDS --- */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Big section cards
          </h2>
          <Card className="bg-gray-50 dark:bg-[#1a1c23] border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 min-h-[80px] flex items-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                Large, full width sections goes here
              </p>
            </CardContent>
          </Card>
        </section>

        {/* --- RESPONSIVE CARDS --- */}
        <section className="space-y-4">
           <StatCard />
        </section>

        {/* --- CARDS WITH TITLE --- */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Cards with title
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card className="bg-gray-50 dark:bg-[#1a1c23] border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white text-lg">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
                  commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
                  qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#7c3aed] border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-white text-lg">Colored card</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-purple-100 leading-relaxed opacity-100">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum 
                  commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at 
                  qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Cards;
