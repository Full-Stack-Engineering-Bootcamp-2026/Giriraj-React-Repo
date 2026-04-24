import React from 'react';
import { Calendar, Search, Star } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Forms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111319] text-slate-900 dark:text-slate-100 p-4 md:p-8 font-sans transition-colors">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <h1 className="text-2xl font-bold mb-4">Forms</h1>
        
        {/* Banner Section */}
        <div className="bg-[#7e3af2] p-3 rounded-lg flex justify-between items-center text-white text-sm shadow-md">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span>Star this project on GitHub</span>
          </div>
          <button className="hover:underline font-medium">View more →</button>
        </div>

        {/* --- PART 1: ELEMENTS --- */}
        <Card className="p-6 bg-gray-50 dark:bg-[#1a1d24] border-gray-200 dark:border-gray-800 space-y-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Elements</h2>
          
          <div className="space-y-5">
            {/* Name */}
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Jane Doe" className="bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700" />
            </div>

            {/* Account Type */}
            <div className="grid gap-2">
              <Label>Account Type</Label>
              <RadioGroup defaultValue="personal" className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" className="border-gray-400 text-purple-600 focus:ring-purple-500" />
                  <Label htmlFor="personal" className="font-normal cursor-pointer">Personal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" className="border-gray-400 text-purple-600 focus:ring-purple-500" />
                  <Label htmlFor="business" className="font-normal cursor-pointer">Business</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Requested Limit */}
            <div className="grid gap-1.5">
              <Label>Requested Limit</Label>
              <Select defaultValue="1000">
                <SelectTrigger className="bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700">
                  <SelectValue placeholder="Select limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">$1,000</SelectItem>
                  <SelectItem value="5000">$5,000</SelectItem>
                  <SelectItem value="10000">$10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="grid gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                placeholder="Enter some long form content..."
                className="min-h-[100px] bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" className="border-gray-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600" />
              <Label htmlFor="privacy" className="text-sm font-normal text-gray-600 dark:text-gray-400">
                I agree to the <span className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">privacy policy</span>
              </Label>
            </div>
          </div>
        </Card>

        {/* --- PART 2: VALIDATION, ICONS, BUTTONS --- */}
        <Card className="p-6 bg-gray-50 dark:bg-[#1a1d24] border-gray-200 dark:border-gray-800 space-y-8 shadow-sm">
          
          {/* Validation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Validation</h3>
            <div className="grid gap-1.5">
              <Label className="text-red-500 dark:text-red-400">Invalid input</Label>
              <Input className="border-red-500 focus-visible:ring-red-500 bg-white dark:bg-[#242933]" defaultValue="Jane Doe" />
              <p className="text-xs text-red-500 dark:text-red-400">Your password is too short.</p>
            </div>
            <div className="grid gap-1.5">
              <Label className="text-green-500 dark:text-green-400">Valid input</Label>
              <Input className="border-green-500 focus-visible:ring-green-500 bg-white dark:bg-[#242933]" defaultValue="Jane Doe" />
              <p className="text-xs text-green-500 dark:text-green-400">Your password is strong.</p>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Icons</h3>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 z-10" />
              <Input className="pl-10 bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700" placeholder="Icon left" />
            </div>
            <div className="relative">
              <Input className="pr-10 bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700" placeholder="Icon right" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 z-10" />
            </div>
          </div>

          {/* Buttons Combined (Input Groups) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Buttons</h3>
            <div className="flex w-full">
              <Button className="rounded-r-none bg-purple-600 hover:bg-purple-700 shrink-0">Click</Button>
              <Input className="rounded-l-none bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700" placeholder="Jane Doe" />
            </div>
            <div className="flex w-full">
              <Input className="rounded-r-none bg-white dark:bg-[#242933] border-gray-300 dark:border-gray-700" placeholder="Jane Doe" />
              <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700 shrink-0">Click</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Forms;
