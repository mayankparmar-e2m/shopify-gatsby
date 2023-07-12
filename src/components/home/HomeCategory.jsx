import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HomeCategory({homeCategory}) {
    const {nodes}=homeCategory
  return (
    <div className="container py-16">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
    <div className="grid grid-cols-3 gap-3">
        {
            nodes.map((cv,index)=>{
                
                const imageData = getImage(cv.image)
                return  <div className="relative rounded-sm overflow-hidden group" key={index}>
                <GatsbyImage image={imageData} alt="category 1" className="w-full"/>
                <Link to={`/collections/${cv.handle}`}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{cv.title}
                    </Link>
            </div>
            })
        }
    </div>
</div>
  )
}
