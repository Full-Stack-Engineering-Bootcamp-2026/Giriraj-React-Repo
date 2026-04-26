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
// import React from "react"
// import { Input } from "@/components/ui/input"
// import { useTheme } from "./theme-provider"
// import { 
//   Avatar, 
//   AvatarFallback, 
//   AvatarImage 
// } from "@/components/ui/avatar" // Ensure this path matches your shadcn setup
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function Header() {
//   const { theme, setTheme } = useTheme()
  
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light")
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
//         <button onClick={toggleTheme} aria-label="Toggle theme">
//           {theme === "light" ? "🌙" : "🌞"}
//         </button>
//         <Popover>
//   <PopoverTrigger asChild>
//     <button className="relative outline-none">
//       🔔
//       {/* Red Dot Notification Badge */}
//       <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
//     </button>
//   </PopoverTrigger>
  
//   <PopoverContent className="w-56 p-0 mt-2" align="end">
//     <div className="flex flex-col">
//       <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
//         <span className="text-sm font-medium">Messages</span>
//         <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">13</span>
//       </div>
      
//       <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
//         <span className="text-sm font-medium">Sales</span>
//         <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">2</span>
//       </div>
      
//       <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-t">
//         <span className="text-sm font-medium">Alerts</span>
//       </div>
//     </div>
//   </PopoverContent>
// </Popover>
        
        
//         <Avatar className="h-8 w-8">
//           <AvatarImage src="https://ca.slack-edge.com/T04PWUYFD-U0AK7U7BVCM-c3e91b57e6c8-512" alt="User Image" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div>
//     </header>
//   )
// }
// import React from "react"
// import { Input } from "@/components/ui/input"
// import { useTheme } from "./theme-provider"
// import { 
//   Moon, 
//   Sun, 
//   Bell 
// } from "lucide-react" // Modern icon library
// import { 
//   Avatar, 
//   AvatarFallback, 
//   AvatarImage 
// } from "@/components/ui/avatar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function Header() {
//   const { theme, setTheme } = useTheme()
  
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light")
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
//         {/* THEME TOGGLE */}
//         <button 
//           onClick={toggleTheme} 
//           aria-label="Toggle theme"
//           className="text-muted-foreground hover:text-foreground transition-colors"
//         >
//           {theme === "light" ? (
//             <Moon className="h-5 w-5" />
//           ) : (
//             <Sun className="h-5 w-5" />
//           )}
//         </button>

//         {/* NOTIFICATIONS */}
//         <Popover>
//           <PopoverTrigger asChild>
//             <button className="relative outline-none text-muted-foreground hover:text-foreground transition-colors">
//               <Bell className="h-5 w-5" />
//               {/* Notification Badge */}
//               <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background" />
//             </button>
//           </PopoverTrigger>
          
//           <PopoverContent className="w-56 p-0 mt-2" align="end">
//             <div className="flex flex-col">
//               <div className="flex justify-between items-center px-4 py-3 hover:bg-accent cursor-pointer">
//                 <span className="text-sm font-medium">Messages</span>
//                 <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">13</span>
//               </div>
              
//               <div className="flex justify-between items-center px-4 py-3 hover:bg-accent cursor-pointer">
//                 <span className="text-sm font-medium">Sales</span>
//                 <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">2</span>
//               </div>
              
//               <div className="px-4 py-3 hover:bg-accent cursor-pointer border-t">
//                 <span className="text-sm font-medium">Alerts</span>
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
        
//         {/* USER AVATAR */}
//         <Avatar className="h-8 w-8">
//           <AvatarImage src="https://ca.slack-edge.com/T04PWUYFD-U0AK7U7BVCM-c3e91b57e6c8-512" alt="User" />
//           <AvatarFallback>JD</AvatarFallback>
//         </Avatar>
//       </div>
//     </header>
//   )
// }
import React from "react"
import { Input } from "@/components/ui/input"
import { useTheme } from "./theme-provider"
import { 
  Moon, 
  Sun, 
  Bell, 
  User, 
  Settings, 
  LogOut 
} from "lucide-react"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
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
    <header className="flex items-center justify-between px-6 h-14 border-b bg-background">
      
      {/* CENTER (SEARCH) */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xl">
          <Input placeholder="Search for projects" className="bg-muted/50" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        
        {/* THEME TOGGLE */}
        <button 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>

        {/* NOTIFICATIONS POPOVER */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative outline-none text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background" />
            </button>
          </PopoverTrigger>
          
          <PopoverContent className="w-56 p-0 mt-2" align="end">
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-4 py-3 hover:bg-accent cursor-pointer">
                <span className="text-sm font-medium">Messages</span>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">13</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 hover:bg-accent cursor-pointer">
                <span className="text-sm font-medium">Sales</span>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">2</span>
              </div>
              <div className="px-4 py-3 hover:bg-accent cursor-pointer border-t">
                <span className="text-sm font-medium">Alerts</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        {/* USER PROFILE POPOVER (AS REQUESTED) */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="outline-none">
              <Avatar className="h-8 w-8 cursor-pointer border border-transparent hover:border-accent transition-all">
                <AvatarImage src="https://ca.slack-edge.com/T04PWUYFD-U0AK7U7BVCM-c3e91b57e6c8-512" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </button>
          </PopoverTrigger>
          
          <PopoverContent className="w-48 p-1 mt-2 shadow-lg" align="end">
            <div className="flex flex-col space-y-1">
              <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors text-foreground">
                <User className="h-4 w-4" />
                Profile
              </button>
              
              <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors text-foreground">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              
              <div className="h-px bg-border my-1" />
              
              <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </PopoverContent>
        </Popover>

      </div>
    </header>
  )
}
