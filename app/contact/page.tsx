"use client";
// @ts-nocheck
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", brand: "", service: "", budget: "", message: "" });

  const handle = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-purple-900 rounded-full blur-[180px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-2xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-12 transition-colors duration-300">
          Back to home
        </Link>
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-center py-20">
            <div className="text-7xl mb-6">🔥</div>
            <h2 className="text-5xl font-black mb-4">We got you!</h2>
            <p className="text-gray-400 text-lg mb-2">We will reach out within 24 hours at</p>
            <p className="text-purple-400 font-bold text-xl">{form.email}</p>
            <Link href="/" className="inline-block mt-10 px-8 py-4 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
              Back to home
            </Link>
          </motion.div>
        ) : (
          <>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
              <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-4">Get In Touch</p>
              <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">Lets work together.</h1>
              <p className="text-gray-500">Fill this out and we will get back to you within 24 hours.</p>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">Your Name</label>
                  <input name="name" required onChange={handle} placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
                  <input name="email" type="email" required onChange={handle} placeholder="you@email.com" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Brand / Company Name</label>
                <input name="brand" required onChange={handle} placeholder="Your brand name" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Service You Need</label>
                <select name="service" required onChange={handle} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300">
                  <option value="" className="bg-[#050505]">Select a service</option>
                  <option value="smm" className="bg-[#050505]">Social Media Marketing</option>
                  <option value="web" className="bg-[#050505]">Web Development</option>
                  <option value="brand" className="bg-[#050505]">Branding & Design</option>
                  <option value="seo" className="bg-[#050505]">SEO & Growth</option>
                  <option value="all" className="bg-[#050505]">All of the above</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Monthly Budget</label>
                <select name="budget" required onChange={handle} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300">
                  <option value="" className="bg-[#050505]">Select your budget</option>
                  <option value="5k" className="bg-[#050505]">Under 5,000</option>
                  <option value="10k" className="bg-[#050505]">5,000 - 10,000</option>
                  <option value="25k" className="bg-[#050505]">10,000 - 25,000</option>
                  <option value="25k+" className="bg-[#050505]">25,000+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Tell us about your project</label>
                <textarea name="message" required onChange={handle} rows={4} placeholder="What are you trying to achieve?" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none" />
              </div>
              <button type="submit" className="mt-2 w-full py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl text-white font-black text-lg transition-all duration-300">Send it 🚀</button>
              <p className="text-center text-gray-600 text-xs">Or email us directly at connect@2brainees.com</p>
            </motion.form>
          </>
        )}
      </div>
    </main>
  );
}
