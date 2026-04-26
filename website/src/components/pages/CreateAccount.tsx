import React from "react";
import { useNavigate } from "react-router"; // v7 import
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function CreateAccount() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full bg-[#111319] text-white">
      

      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-7">
          <h1 className="text-2xl font-bold tracking-tight">Create account</h1>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-gray-400 font-normal">Email</Label>
              <Input
                id="email"
                placeholder="Jane Doe"
                className="bg-[#1a1d24] border-gray-700 focus:border-purple-500 h-11"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-gray-400 font-normal">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="***************"
                className="bg-[#1a1d24] border-gray-700 focus:border-purple-500 h-11"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="confirm" className="text-gray-400 font-normal">Confirm password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="***************"
                className="bg-[#1a1d24] border-gray-700 focus:border-purple-500 h-11"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center space-x-2 py-2">
              <Checkbox id="terms" className="border-gray-600 data-[state=checked]:bg-purple-600" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the <span className="text-purple-400 cursor-pointer hover:underline">privacy policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#7e3af2] hover:bg-[#6c2bd9] text-white h-11 font-medium">
              Create account
            </Button>
          </form>

          <Separator className="bg-gray-800" />

          {/* Social Logins */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full bg-transparent border-gray-700 h-11 hover:bg-gray-800 text-white">
              <FaGithub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="w-full bg-transparent border-gray-700 h-11 hover:bg-gray-800 text-white">
              <FaTwitter className="mr-2 h-4 w-4 text-blue-400" />
              Twitter
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")}
              className="text-purple-400 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
