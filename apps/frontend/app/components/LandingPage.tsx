'use client';

import { auth } from '@/app/lib/auth';
import { Button } from '@trylinky/ui';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await auth.signIn.magicLink({
        email,
        callbackURL: '/new',
      });
      alert('Check your email for the magic link!');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Linky</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-stone-600 hover:text-stone-900"
              onClick={() => window.location.href = '/api/auth/signin'}
            >
              Sign In
            </Button>
            <Button 
              className="bg-stone-900 text-white hover:bg-stone-800 rounded-full px-6"
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-stone-600">The new standard for link-in-bio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Your digital identity, <br />
              <span className="text-stone-400">beautifully crafted.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-lg leading-relaxed">
              Create a stunning, personalized page that brings together your entire online presence. No coding required.
            </p>
            
            <div id="get-started" className="flex flex-col sm:flex-row gap-4 max-w-md">
              <form onSubmit={handleEmailSignIn} className="flex-1 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-all"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-stone-900 text-white hover:bg-stone-800 px-6 rounded-xl h-auto"
                >
                  {loading ? 'Sending...' : 'Join Waitlist'}
                </Button>
              </form>
            </div>
            <p className="mt-4 text-sm text-stone-400">
              Free forever for individuals. No credit card required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-transparent rounded-[2rem] transform rotate-3 scale-105 -z-10" />
            <div className="bg-white rounded-[2rem] border border-stone-200 shadow-2xl overflow-hidden aspect-[4/5] relative">
               {/* Mockup UI */}
               <div className="absolute inset-0 bg-stone-50 p-8 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-stone-200 animate-pulse" />
                  <div className="w-48 h-6 rounded-full bg-stone-200 animate-pulse" />
                  <div className="w-full max-w-xs space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center px-4 gap-4">
                        <div className="w-10 h-10 rounded-lg bg-stone-100" />
                        <div className="h-4 w-24 bg-stone-100 rounded" />
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Designed for creators</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Everything you need to showcase your work, connect with your audience, and grow your brand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Beautiful Themes', desc: 'Choose from professionally designed themes or create your own.' },
              { title: 'Rich Integrations', desc: 'Connect Instagram, TikTok, Spotify, and more seamlessy.' },
              { title: 'Powerful Analytics', desc: 'Understand your audience with privacy-first insights.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm">
                  <Check className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="font-bold text-stone-900">Linky</span>
          </div>
          <div className="text-sm text-stone-500">
            © {new Date().getFullYear()} Linky. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
