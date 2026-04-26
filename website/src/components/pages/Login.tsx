import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#111319] text-white">
  
      
      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Login</h1>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Jane Doe"
                className="bg-[#1a1d24] border-gray-700 focus:border-purple-500 h-12"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-400">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="***************"
                className="bg-[#1a1d24] border-gray-700 focus:border-purple-500 h-12"
              />
            </div>

            {/* Login Button */}
            <Button className="w-full bg-[#7e3af2] hover:bg-[#6c2bd9] text-white h-12 text-lg font-semibold">
              Log in
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <Separator className="bg-gray-700" />
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-700 h-12 hover:bg-gray-800 text-white"
            >
              <FaGithub className="mr-2 h-5 w-5" />
              Github
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-700 h-12 hover:bg-gray-800 text-white"
            >
              <FaTwitter className="mr-2 h-5 w-5 text-blue-400" />
              Twitter
            </Button>
          </div>

          {/* Footer Links */}
          <div className="space-y-2 pt-4">
            <a
              href="#"
              className="block text-sm text-purple-400 hover:underline"
            >
              Forgot your password?
            </a>
            <a
              href="#"
              className="block text-sm text-purple-400 hover:underline"
            >
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
