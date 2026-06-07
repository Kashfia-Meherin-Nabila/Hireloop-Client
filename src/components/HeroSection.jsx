import { Magnifier, Pin } from "@gravity-ui/icons";
import Image from "next/image";
import background from "../../public/images/bg.png"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-25 px-6">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
        <div className="absolute inset-0 z-0">
                <Image
                  src={background}
                  alt="background"
                  fill
                  className="object-cover opacity-30"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
              </div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8">
          <span>💼</span>
          <span>50,000+ NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          HireLoop connects top talent with world-class companies. 
          Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-[#121212] border border-white/10 p-2 rounded-2xl flex items-center shadow-2xl">
          <div className="flex-1 flex items-center px-4 border-r border-white/10">
            <Magnifier className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Job title, skill or company" 
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-600 py-3"
            />
          </div>
          <div className="flex-1 flex items-center px-4">
            <Pin className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Location or Remote" 
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-600 py-3"
            />
          </div>
          <button className="bg-blue-600 p-3 rounded-xl text-white hover:bg-blue-700 transition-colors">
            <Magnifier size={20} />
          </button>
        </div>

        {/* Trending Positions */}
        <div className="flex items-center gap-4 mt-8 text-sm">
          <span className="text-gray-500">Trending Position</span>
          <div className="flex gap-2">
            {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-gray-300 hover:border-white/30 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}