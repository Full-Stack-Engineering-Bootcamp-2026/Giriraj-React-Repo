import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111319] p-4">
      <Card className="flex flex-col md:flex-row w-full max-w-3xl overflow-hidden border-none bg-[#1a1d24] shadow-2xl">
        

        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-white mb-6">
            Forgot password
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400 font-normal text-xs uppercase tracking-wider">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Jane Doe"
                className="bg-[#242933] border-gray-700 focus:ring-purple-500 h-11 text-white"
              />
            </div>

            <Button className="w-full bg-[#7e3af2] hover:bg-[#6c2bd9] text-white h-11 mt-2 font-medium transition-colors">
              Recover password
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
