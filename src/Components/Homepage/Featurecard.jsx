import { features }   from '../data'
const Featurecardgrid = () => {
  
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    {features.map((feature) => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </div>
  )
}
export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#191b1b] bg-opacity-40 backdrop-blur-md rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] p-8 hover:bg-black hover:border-emerald-400 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out h-full">
    <div className="text-[#49eec3] mb-4">
      <Icon size={40} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-extrabold text-white mb-3 font-playfair">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default Featurecardgrid