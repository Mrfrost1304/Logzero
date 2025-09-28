import React from 'react'
import BlogGrid from './Blog'
const Blogpage = () => {
  return (
    <>
    <section className="w-full bg-black pt-50 pb-10 px-6 lg:px-30 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-left text-white mb-4">
      Our Blogs
    </h2>
    <p className="max-w-3xl text-left text-white text-base md:text-lg leading-relaxed">
      Putting up with the finest of Tech Pieces, Knowledge Resources, News Archives, 
      and Hand-picked Stories to keep you ahead of the technology curve. Making sure 
      you get the latest of industry insights and forum updates all wrapped.
    </p>
    
  </section>
  <BlogGrid></BlogGrid>
  </>
  )
}

export default Blogpage