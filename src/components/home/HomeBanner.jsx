import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HomeBanner({homeBanner}) {
   const {title,descriptionHtml,handle,image}=homeBanner
   const imageData = getImage(image)
  return (
    <section
    className="relative ">
        <GatsbyImage image={imageData} className='py-11' alt='home Banner'/>
    <div className="container absolute top-1/2 -translate-y-1/2 left-10">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize w-[600px]">
           {title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: descriptionHtml}}></div>
        <div className="mt-12">
            <Link to={`/collections/${handle}`} className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-transparent hover:text-primary">Shop Now</Link>
        </div>
    </div>
</section>
  )
}
