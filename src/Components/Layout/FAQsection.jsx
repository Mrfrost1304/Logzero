import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data';

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };



  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">FAQ's</h1>
        
        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600 self-start"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between bg-transparent hover:bg-gray-900/50 transition-colors duration-200"
              >
                <span className="text-gray-300 text-lg font-medium pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <Minus size={20} className="text-gray-400" />
                  ) : (
                    <Plus size={20} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed mt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}