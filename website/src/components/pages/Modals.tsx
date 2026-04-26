import React from "react";
import { CiStar } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DashboardModals() {
  return (
    <div className="p-8 space-y-6 max-w-4xl">
      <h3 className="text-2xl font-bold mb-4">Dashboard</h3>

      {/* Banner Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          borderRadius: "5px",
          width: "100%",
          backgroundColor: "purple",
          color: "white",
        }}
      >
        <CiStar />
        <span>Star this project on GitHub</span>
        <span style={{ marginLeft: "auto", cursor: "pointer" }}>View More</span>
      </div>

      {/* Description Card */}
      <div className="bg-[#1a1b1e] p-6 rounded-lg border border-gray-800 text-gray-400 text-sm leading-relaxed">
        <p className="mb-4">
          This is possibly <span className="text-white font-medium italic">the most accessible a modal can get</span>, using JavaScript. When
          opened, it uses <code className="bg-gray-800 px-1 rounded text-purple-400">assets/js/focus-trap.js</code> to create a <span className="italic">focus trap</span>, which means
          that if you use your keyboard to navigate around, focus won't leak to the elements
          behind, staying inside the modal in a loop, until you take any action.
        </p>
        <p>
          Also, on small screens it is placed at the bottom of the screen, to account for larger
          devices and make it easier to click the larger buttons.
        </p>
      </div>

      {/* shadcn Dialog Component */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Open Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Accessible Modal</DialogTitle>
            <DialogDescription>
              This modal uses shadcn (Radix UI) under the hood, which handles 
              the focus trapping and accessibility mentioned in your description automatically.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {/* Modal content goes here */}
            <p className="text-sm text-gray-500">
              Try tabbing through this modal—you'll notice the focus stays contained!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

