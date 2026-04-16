import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
        <div className="h-screen w-full">   
          <div className="h-full flex flex-col justify-center md:flex-row">
             <div className="bg-slate-900 basis-1/19 flex items-center justify-center">HEADER</div>
             <div className="bg-red-500 basis-1/19 flex items-center justify-center">MENU</div>
             <div className="bg-blue-500 basis-4/19 flex items-center justify-center">HERO</div>
             <div className="bg-slate-700 basis-4/19 flex items-center justify-center">MAIN</div>
             <div className="bg-yellow-400 basis-3/19 flex items-center justify-center">BANER</div>
             <div className="bg-emerald-400 basis-3/19 flex items-center justify-center">EXTRA</div>
             <div className="bg-cyan-100 basis-3/19 flex items-center justify-center">IMAGE</div>
          </div>
        </div>
    </>
  )
}

export default App
