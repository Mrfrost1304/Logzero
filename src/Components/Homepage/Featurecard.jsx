import { features }   from '../data'
import { highlightText } from '../utils';
const Featurecardgrid = () => {
  
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    {features.map((feature) => (
      <FeatureCard key={feature.id} {...feature} color='#49eec3'/>
    ))}
  </div>
  )
}
export const FeatureCard = ({ icon: Icon, title, description,highlightWords = [] ,color}) => (
  <div className="h-75  bg-[#191b1b] bg-opacity-40 backdrop-blur-md rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] p-8 hover:bg-black hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out ">
     <div className="mb-6">
        <Icon className="w-12 h-12" strokeWidth={1.5} style={{ color }} />
      </div>
      <h3 className="text-2xl font-bold text-white ">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {highlightText(description, highlightWords)}
      </p>
  </div>
);

export default Featurecardgrid