// import React from "react"
// import { Input } from "@/components/ui/input"

// export function Header() {
//   return (
//     <header className="flex items-center justify-between px-6 h-14 border-b">

      
//       {/* CENTER (SEARCH) */}
//       <div className="flex-1 flex justify-center">
//         <div className="w-full max-w-xl">
//           <Input placeholder="Search for projects" />
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-6">
//         <button>🌙</button>
//         <button>🔔</button>
//         <div className="w-8 h-8 rounded-full bg-gray-300" />
//       </div>

//     </header>
//   )
// }

import React from "react"
import { Input } from "@/components/ui/input"
import { useTheme } from "./theme-provider" // Import the custom hook for theme

export function Header() {
  const { theme, setTheme } = useTheme() // Get current theme and setTheme function
  
  // Toggle theme between light and dark
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <header className="flex items-center justify-between px-6 h-14 border-b">
      
      {/* CENTER (SEARCH) */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xl">
          <Input placeholder="Search for projects" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        {/* Moon button to toggle theme */}
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "🌙" : "🌞"} {/* Switch between moon and sun icons */}
        </button>
        <button>🔔</button>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}