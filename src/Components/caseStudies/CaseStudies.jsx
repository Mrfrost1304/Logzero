import React from 'react'
import  { BlogCard } from '../blog/Blog'
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
 
];

const CaseStudies = () => {
  return (<>
    <p className=' bg-black text-4xl pt-50 pb-10 md:px-20 md:text-left text-center text-white'>CaseStudies</p>
    <section className="w-full bg-gray-50 py-12 px-6 lg:px-45">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
    </>
  )
}

export default CaseStudies