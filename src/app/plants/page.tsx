import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Filter, Search, ChevronDown, Star } from "lucide-react";

// Mock Data
const products = [
  {
    id: 1,
    name: "Sansevieria Laurentii",
    category: "Air Purifying",
    price: 45.00,
    rating: 4.8,
    reviews: 124,
    image: "/plant_1.png",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    category: "Large Indoor",
    price: 85.00,
    rating: 4.9,
    reviews: 89,
    image: "/plant_2.png",
    badge: "Trending"
  },
  {
    id: 3,
    name: "Succulent Trio",
    category: "Easy Care",
    price: 35.00,
    rating: 4.7,
    reviews: 210,
    image: "/plant_3.png",
    badge: null
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    category: "Tropical",
    price: 65.00,
    rating: 4.9,
    reviews: 342,
    image: "/plant_hero.png",
    badge: "Rare"
  },
  {
    id: 5,
    name: "Snake Plant Zeylanica",
    category: "Air Purifying",
    price: 40.00,
    rating: 4.6,
    reviews: 56,
    image: "/plant_1.png",
    badge: null
  },
  {
    id: 6,
    name: "Mini Fig Tree",
    category: "Pet Friendly",
    price: 55.00,
    rating: 4.5,
    reviews: 78,
    image: "/plant_2.png",
    badge: "New"
  }
];

export default function PlantsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Collection</span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Explore our curated selection of premium plants to elevate your space. Find the perfect green companion for every room.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search plants..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all shadow-sm"
              />
            </div>
            <button className="flex items-center justify-center p-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm">
              <Filter className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
          {['All Plants', 'New Arrivals', 'Air Purifying', 'Low Light', 'Pet Friendly', 'Large Indoor', 'Succulents'].map((cat, i) => (
            <button 
              key={i}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20' 
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters and Sort */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <span className="text-neutral-500 font-medium">Showing {products.length} products</span>
          <button className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-medium hover:text-emerald-600 transition-colors">
            Sort by: Featured <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-6 flex items-center justify-center">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {product.badge}
                  </div>
                )}
                
                <button className="absolute top-4 right-4 z-10 p-2.5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md rounded-full text-neutral-600 dark:text-neutral-300 hover:text-rose-500 hover:bg-white dark:hover:bg-neutral-800 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <Heart className="w-5 h-5" />
                </button>

                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain filter drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                  <span className="text-sm text-neutral-500">({product.reviews})</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  <button className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm">
            Load More Plants
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
