import React from "react";

// Import all images from blog folder
const blogImages = import.meta.glob("../../assets/Images/blog/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const getImage = (filename) => {
  for (const path in blogImages) {
    if (path.endsWith("/" + filename)) return blogImages[path];
  }
  return undefined;
};

// Sample blog data
const blogs = [
  {
    id: 1,
    category: "WEB DEVELOPMENT",
    title: "Build Smarter, Not Just Prettier — How Custom Development Shapes Better UX",
    date: "September 26, 2025",
    comments: "No Comments",
    img: getImage("loz.png"), // fallback/brand image
  },
  {
    id: 2,
    category: "BLOG",
    title: "Advantages of Digital Marketing: Its Benefits In 2025",
    date: "July 18, 2025",
    comments: "No Comments",
    img: getImage("digitalmark.png"),
  },
  {
    id: 3,
    category: "VIRTUAL RESOURCE MANAGEMENT",
    title: "10 Best Performance Marketing Courses in India in 2025",
    date: "May 19, 2025",
    comments: "No Comments",
    img: getImage("10performance.png"),
  },
  {
    id: 4,
    category: "CLOUD COMPUTING",
    title: "Cloud Computing for Small Businesses: Boost Efficiency & Growth!",
    date: "May 15, 2025",
    comments: "No Comments",
    img: getImage("advantageofsigi.png"), // adjust as needed
  },
  {
    id: 5,
    category: "BLOG",
    title: "7 Job-Oriented Digital Marketing Courses to Launch Your Career in 2025",
    date: "May 14, 2025",
    comments: "No Comments",
    img: getImage("10benfits.png"), // note the filename spelling in assets
  },
  {
    id: 6,
    category: "MOBILE APPLICATION DEVELOPMENT",
    title: "10 Benefits of a Custom App Development Company for Startups",
    date: "May 8, 2025",
    comments: "No Comments",
    img: getImage("loz.png"),
  },
];

export const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition">
      {/* Image */}
      <div className="relative">
        <img src={blog.img} alt={blog.title} className="w-full h-52 object-cover" />
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {blog.title}
        </h3>

        <a href="#" className="text-green-600 text-sm font-semibold hover:underline">
          READ MORE »
        </a>

        {/* Footer */}
        <div className="text-xs text-gray-500 flex justify-between mt-3">
          <span>{blog.date}</span>
          <span>{blog.comments}</span>
        </div>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 lg:px-45">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;