"use client";

import { useRef, useState } from "react"; // 1. Import useRef
import { useRouter } from "next/navigation";
import { Person, Envelope, Link as LinkIcon, Lock } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null); // 2. Create a ref for the form
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, email, password, imageUrl } = Object.fromEntries(formData);

    setLoading(true);

    const { error } = await signUp.email({
      email,
      password,
      name,
      image: imageUrl,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Something went wrong.");
    } else {
      toast.success("Account created successfully!");
      // 3. Use the ref to reset the form safely
      formRef.current?.reset(); 
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-6">
      <Toaster position="top-right" toastOptions={{ style: { background: '#121212', color: '#fff', border: '1px solid #333' } }} />
      
      <Form
        ref={formRef} // 4. Attach the ref to the Form
        className="flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-[#121212] p-10 shadow-2xl"
        onSubmit={onSubmit}
      >
        {/* ... (rest of your fields remain the same) */}
        
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-white">Create an Account</h2>
          <p className="text-gray-400 text-sm">Join Hireloop today and find your dream role.</p>
        </div>

        <TextField isRequired name="name">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><Person size={16}/> Full Name</Label>
          <Input placeholder="John Doe" className="text-white bg-black/50" />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><Envelope size={16}/> Email Address</Label>
          <Input placeholder="john@example.com" className="text-white bg-black/50" />
        </TextField>

        <TextField isRequired name="imageUrl" type="url">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><LinkIcon size={16}/> Profile Image URL</Label>
          <Input placeholder="https://example.com/avatar.jpg" className="text-white bg-black/50" />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password">
          <Label className="text-gray-300 text-sm mb-2 flex items-center gap-2"><Lock size={16}/> Password</Label>
          <Input placeholder="••••••••" className="text-white bg-black/50" />
        </TextField>

        <div className="flex flex-col gap-4 mt-2">
          <Button 
            type="submit" 
            isLoading={loading} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
          
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}