import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-8 max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium text-sm border border-emerald-200 dark:border-emerald-800/50 shadow-sm backdrop-blur-sm">
              <Leaf className="w-4 h-4 mr-2" />
              <span>New Arrivals for Spring 2026</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Nature</span> <br />
              Into Your Home
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Elevate your living space with our curated collection of premium indoor plants. Hand-picked, nurtured with care, and delivered straight to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
              
              <button className="px-8 py-4 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-full font-semibold text-lg border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Explore Guide
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">Free Delivery</span>
                  <span className="text-xs text-neutral-500">Orders over $50</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">Healthy Plants</span>
                  <span className="text-xs text-neutral-500">Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:ml-auto">
            {/* Decorative background elements behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 rounded-full transform -rotate-6 scale-105" />
            <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-full shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-neutral-900 z-10 shadow-inner">
              <Image 
                src="/plant_hero.png" 
                alt="Beautiful vibrant indoor plant in modern living space" 
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 dark:border-neutral-800/50 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4.9
                </div>
                <div>
                  <div className="flex text-amber-400 text-lg">
                    ★★★★★
                  </div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">10k+ Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}} />
    </section>
  );
}
