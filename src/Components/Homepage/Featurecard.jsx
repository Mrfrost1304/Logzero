import React from 'react'
import { features }   from '../data'
const Featurecard = () => {
  
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    {features.map((feature) => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </div>
  )
}
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#111] rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-[0_0_20px_rgba(0,255,150,0.3)] transition h-full">
    <div className="text-emerald-400 mb-4">
      <Icon size={40} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-extrabold text-white mb-3 font-playfair">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default Featurecard