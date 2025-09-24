import card1 from '../../assets/Images/AboutPage/card1.png'
import card2 from '../../assets/Images/AboutPage/card2.png'
import card3 from '../../assets/Images/AboutPage/card3.png'
import card4 from '../../assets/Images/AboutPage/card4.png'
const InsideLogZeroSection = () => {
  const cards = [
    {
      image: card1,
      title: 'Careers',
      description: 'Explore exciting opportunities to join our dynamic team, where your talents are nurtured and your ambitions realized.',
    },
    {
      image: card2,
      title: 'Partners',
      description: 'Dive into our extensive network of trusted partners, where collaboration thrives and success is shared.',
    },
    {
      image: card3,
      title: 'News',
      description: 'Stay informed with the latest updates, milestones, and achievements that shapes our innovative and technological journey.',
    },
    {
      image: card4,
      title: 'Blog and Articles',
      description: 'Immerse yourself in a wealth of knowledge and insights, as our experts share industry trends, best practices, and invaluable tips to fuel your success.',
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Inside LogZero</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-20">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#202424] rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img 
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="bg-[#202424] p-2 rounded-full cursor-pointer hover:bg-teal-400 transition-colors border border-amber-50">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsideLogZeroSection;
