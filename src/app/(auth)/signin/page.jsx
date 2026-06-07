"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Envelope, Lock } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client"; // Assuming your auth client exports signIn

export default function SigninPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Invalid email or password.");
    } else {
      toast.success("Successfully signed in!");
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-6">
      <Toaster position="top-right" toastOptions={{ style: { background: '#121212', color: '#fff', border: '1px solid #333' } }} />
      
      <Form
        className="flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-[#121212] p-10 shadow-2xl"
        onSubmit={onSubmit}
      >
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Enter your credentials to access your account.</p>
        </div>

        <TextField isRequired name="email" type="email">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><Envelope size={16}/> Email Address</Label>
          <Input placeholder="john@example.com" className="text-white bg-black/50" />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><Lock size={16}/> Password</Label>
          <Input placeholder="••••••••" className="text-white bg-black/50" />
        </TextField>

        <div className="flex flex-col gap-4 mt-2">
          <Button 
            type="submit" 
            isLoading={loading} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          
          <p className="text-center text-sm text-gray-400">
            Do not have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}