// // import React from "react"
// // import { Input } from "@/components/ui/input"

// // export function Header() {
// //   return (
// //     <header className="flex items-center justify-between px-6 h-14 border-b">

      
// //       {/* CENTER (SEARCH) */}
// //       <div className="flex-1 flex justify-center">
// //         <div className="w-full max-w-xl">
// //           <Input placeholder="Search for projects" />
// //         </div>
// //       </div>

// //       {/* RIGHT */}
// //       <div className="flex items-center gap-6">
// //         <button>🌙</button>
// //         <button>🔔</button>
// //         <div className="w-8 h-8 rounded-full bg-gray-300" />
// //       </div>

// //     </header>
// //   )
// // }

// import React from "react"
// import { Input } from "@/components/ui/input"
// import { useTheme } from "./theme-provider" // Import the custom hook for theme

// export function Header() {
//   const { theme, setTheme } = useTheme() // Get current theme and setTheme function
  
//   // Toggle theme between light and dark
//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark")
//     } else if (theme === "dark") {
//       setTheme("light")
//     }
//   }

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
//         {/* Moon button to toggle theme */}
//         <button onClick={toggleTheme} aria-label="Toggle theme">
//           {theme === "light" ? "🌙" : "🌞"} {/* Switch between moon and sun icons */}
//         </button>
//         <button>🔔</button>
//         <div className="w-8 h-8 rounded-full bg-gray-300" />
//       </div>
//     </header>
//   )
// }
import React from "react"
import { Input } from "@/components/ui/input"
import { useTheme } from "./theme-provider"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar" // Ensure this path matches your shadcn setup
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Header() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
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
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "🌙" : "🌞"}
        </button>
        <Popover>
  <PopoverTrigger asChild>
    <button className="relative outline-none">
      🔔
      {/* Red Dot Notification Badge */}
      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
    </button>
  </PopoverTrigger>
  
  <PopoverContent className="w-56 p-0 mt-2" align="end">
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
        <span className="text-sm font-medium">Messages</span>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">13</span>
      </div>
      
      <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
        <span className="text-sm font-medium">Sales</span>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">2</span>
      </div>
      
      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t">
        <span className="text-sm font-medium">Alerts</span>
      </div>
    </div>
  </PopoverContent>
</Popover>
        
        
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://ca.slack-edge.com/T04PWUYFD-U0AK7U7BVCM-c3e91b57e6c8-512" alt="User Image" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}