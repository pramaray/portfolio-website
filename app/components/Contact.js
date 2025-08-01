'use client';

import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const formData = new FormData(form.current);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

  if (res.ok) {
        toast.success("Message sent successfully!");
        form.current.reset();
      } else {
        toast.error("Failed: " + result.error);
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
};


  return (
    <section id="contact" className="py-20 bg-cream relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 text-9xl font-bold text-emerald-200 opacity-20 font-display transform rotate-12">
          CONTACT
        </div>
        <div className="absolute bottom-10 left-10 text-6xl font-bold text-orange-200 opacity-20 font-display transform -rotate-12">
          GET IN TOUCH
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-emerald-800 mb-6 font-display">
            Let&apos;s Work Together!
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? 
            I&apos;d love to hear from you. Drop me a message!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-emerald-800 font-medium mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your full name"
                required
                className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-emerald-800 font-medium mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="your.email@example.com"
                required
                className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-emerald-800 font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What&apos;s this about?"
              required
              className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="mb-8">
            <label className="block text-emerald-800 font-medium mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hello..."
              rows="6"
              required
              className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-orange-500 text-white py-4 px-12 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '⏳ Sending...' : '📩 Send Message'}
            </button>
          </div>
        </form>
        
        {/* Contact info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800 text-white rounded-lg p-6">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm opacity-80">pramaray300306@gmail.com</p>
            </div>
            <div className="bg-orange-500 text-white rounded-lg p-6">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm opacity-80">+91-8293331677</p>
            </div>
            <div className="bg-yellow-500 text-black rounded-lg p-6">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm opacity-80">Bimanagar, Kaikhali, Kolkata-700052</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
