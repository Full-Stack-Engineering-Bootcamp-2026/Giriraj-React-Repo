import React from "react";
import { useNavigate } from "react-router"; // v7 uses 'react-router' directly
import { OctagonAlert, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111319] text-white p-6">
      <div className="flex flex-col items-center text-center space-y-6 max-w-md">
        
        {/* Icon from your image */}
        <div className="text-gray-400 opacity-80">
          <OctagonAlert size={48} strokeWidth={1.5} />
        </div>

        {/* 404 Heading */}
        <h1 className="text-7xl font-extrabold tracking-tight text-white">
          404
        </h1>

        {/* Text and "Go Back" Link */}
        <p className="text-gray-400 text-base leading-relaxed">
          Page not found. Check the address or{" "}
          <button 
            onClick={() => navigate(-1)} 
            className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4 transition-colors"
          >
            go back
          </button>.
        </p>

        {/* Home Button (shadcn) */}
        <div className="pt-4">
          <Button 
            variant="outline" 
            className="border-gray-800 bg-transparent hover:bg-gray-800 hover:text-white text-gray-300 gap-2"
            onClick={() => navigate("/")}
          >
            <MoveLeft size={16} />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
