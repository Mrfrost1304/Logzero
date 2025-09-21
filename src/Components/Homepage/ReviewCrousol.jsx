import React, { useState, useEffect } from "react";

// Lucide-react icons are assumed to be available
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(5);

const testimonials = [
  { id: 1, name: "Joker Op", date: "2024-06-21", avatar: "J", rating: 5, review: "if you need quality just go for it", verified: true },
  { id: 2, name: "Busy Bee", date: "2024-05-15", avatar: "B", rating: 5, review: "I've seen the team working and appreciate the efforts they put in. It is nice to see how they work. Impressive.", verified: true },
  { id: 3, name: "Vedika Saxena", date: "2024-05-15", avatar: "V", rating: 5, review: "Your innovative solutions and exceptional service set a high standard in the IT industry.", verified: true },
  { id: 4, name: "Huzaif Nazim", date: "2024-04-29", avatar: "H", rating: 5, review: "Best company for outsourcing data related work.", verified: true },
  { id: 5, name: "Anjali Pandey", date: "2024-04-29", avatar: "A", rating: 5, review: "Thankful for the team I appreciate for the services they provided and their services is marked by efficiency and punctuality.", verified: true },
  { id: 8, name: "Alex K", date: "2024-06-25", avatar: "A", rating: 4, review: "A very professional team. They delivered the project on time and the communication was great.", verified: true },
  { id: 9, name: "Sarah Chen", date: "2024-07-01", avatar: "S", rating: 5, review: "Their custom software solution completely transformed our workflow. Highly recommend!", verified: false },
  { id: 10, name: "Michael B.", date: "2024-07-10", avatar: "M", rating: 5, review: "Excellent technical support. They were quick to resolve our server issues.", verified: true },
  { id: 11, name: "Priya Sharma", date: "2024-07-14", avatar: "P", rating: 4, review: "Good value for money. The UI design was very user-friendly.", verified: true },
  { id: 12, name: "Leo Martinez", date: "2024-07-18", avatar: "L", rating: 5, review: "They exceeded my expectations. The team is knowledgeable and passionate about their work.", verified: true },
  { id: 13, name: "Emily Watson", date: "2024-07-22", avatar: "E", rating: 3, review: "The project was a bit delayed, but the final product was good. Could improve on communication.", verified: false },
  { id: 14, name: "Chris D.", date: "2024-07-28", avatar: "C", rating: 5, review: "Impressed with their dedication. They went the extra mile to ensure our satisfaction.", verified: true }
];

  // Use a useEffect hook to set the number of visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerPage(1);
      } else if (width < 768) {
        setSlidesPerPage(2);
      } else if (width < 1024) {
        setSlidesPerPage(3);
      } else if (width < 1280) {
        setSlidesPerPage(4);
      } else {
        setSlidesPerPage(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - slidesPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - slidesPerPage : prevIndex - 1
    );
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ));

  const getAvatarColor = (name) => {
    const colors = ["bg-amber-600", "bg-amber-700", "bg-green-700", "bg-blue-600", "bg-cyan-500"];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="bg-[#191b1b] w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full">
        {/* Left button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-600 text-white rounded-full p-2 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${(currentIndex * 100) / slidesPerPage}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="w-full aspect-square bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full ${getAvatarColor(
                            testimonial.name
                          )} flex items-center justify-center text-white font-semibold text-lg`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">{renderStars(testimonial.rating)}</div>
                      {testimonial.verified && (
                        <span className="text-blue-500 text-xs font-semibold">✔ Verified</span>
                      )}
                    </div>
                  </div>

                  {/* Review */}
                  <div className="flex-grow flex items-center">
                    <p className="text-gray-700 text-sm leading-relaxed">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-600 text-white rounded-full p-2 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;