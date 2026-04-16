import { useState } from 'react'

import './App.css'

function App() {


  // return (
  //   <>
  //       <div className="h-screen w-full">   
  //         <div className="h-full flex flex-col justify-center md:flex-row">
  //            <div className="bg-slate-900 basis-1/19 flex items-center justify-center">HEADER</div>
  //            <div className="bg-red-500 basis-1/19 flex items-center justify-center">MENU</div>
  //            <div className="bg-blue-500 basis-4/19 flex items-center justify-center">HERO</div>
  //            <div className="bg-slate-700 basis-4/19 flex items-center justify-center">MAIN</div>
  //            <div className="bg-yellow-400 basis-3/19 flex items-center justify-center">BANER</div>
  //            <div className="bg-emerald-400 basis-3/19 flex items-center justify-center">EXTRA</div>
  //            <div className="bg-cyan-100 basis-3/19 flex items-center justify-center">IMAGE</div>
  //         </div>
  //       </div>
  //   </>
  // )
  //  
   return (
    <div className="h-screen w-full grid 
      /* Mobile: 1 vertical column by default */
      grid-cols-1 
      grid-rows-auto

      /* Tablet (md): Multi-column layout starts here */
      md:grid-cols-3 
      md:grid-rows-[auto_2fr_2fr_1fr_1fr]
      md:[grid-template-areas:'header_header_header''hero_hero_hero''menu_main_main''menu_banner_banner''menu_extra_image']

      /* Desktop (lg): Complex multi-column layout */
      lg:grid-cols-4 
      lg:grid-rows-[auto_3fr_2fr_1fr]
      lg:[grid-template-areas:'header_menu_menu_menu''hero_hero_hero_hero''main_main_white_image''main_main_banner_extra']"
    >
      <div className="bg-slate-900 flex items-center justify-center [grid-area:header]">HEADER</div>
      <div className="bg-red-500 flex items-center justify-center [grid-area:menu]">MENU</div>
      <div className="bg-blue-500 flex items-center justify-center [grid-area:hero]">HERO</div>
      <div className="bg-slate-700 flex items-center justify-center [grid-area:main]">MAIN</div>
      <div className="bg-yellow-400 flex items-center justify-center [grid-area:banner]">BANNER</div>
      <div className="bg-emerald-400 flex items-center justify-center [grid-area:extra]">EXTRA</div>
      <div className="bg-cyan-100 flex items-center justify-center">IMAGE</div>
      
      {/* Spacer for Desktop (White area in your image) - hidden on mobile/tablet */}
      <div className="hidden lg:block bg-white [grid-area:white]"></div>
    </div>
  );
}




export default App;
