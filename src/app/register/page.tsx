"use client";
import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, { displayName: form.fullName });

      // Save user in backend
      await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: form.fullName, email: form.email }),
      });

      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }
    }
  };
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl shadow-none border-2 border-white p-10">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign Up
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
            Enter your details to register.
          </p>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
            {error}
          </p>
          <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-transparent focus:border-2 focus:border-pink-500 focus:outline-0"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <label className="absolute left-3 top-1 text-xs text-blue-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-pink-500">
                  Name
                </label>
              </div>
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-transparent focus:border-2 focus:border-pink-500 focus:outline-0"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <label className="absolute left-3 top-1 text-xs text-blue-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-pink-500">
                  Email
                </label>
              </div>

              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-transparent focus:border-2 focus:border-pink-500 focus:outline-0"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label className="absolute left-3 top-1 text-xs text-blue-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-pink-500">
                  Password
                </label>
              </div>
            </div>
            <button
              onClick={handleRegister}
              className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Register
            </button>
            <Link
              className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased"
              href="/login"
            >
              <p>
                Already have an account?
                <span className="mx-2">Sign In</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
