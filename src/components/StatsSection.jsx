import globe from "../../public/images/globe.png"

import Image from "next/image";
import { 
  Magnifier, 
  Factory, 
  Person, 
  Star 
} from "@gravity-ui/icons";

export default function StatsSection() {
  const stats = [
    { label: "Active Jobs", value: "50K", icon: <Magnifier size={20} /> },
    { label: "Companies", value: "12K", icon: <Factory size={20} /> },
    { label: "Job Seekers", value: "2M", icon: <Person size={20} /> },
    { label: "Satisfaction Rate", value: "97%", icon: <Star size={20} /> },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Globe Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={globe}
          alt="Globe background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
          Assisting over <span className="text-blue-500">15,000</span> job seekers <br />
          find their dream positions.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-colors"
            >
              {/* Icon Container */}
              <div className="mb-4 text-blue-500 bg-blue-500/10 p-3 rounded-lg">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}