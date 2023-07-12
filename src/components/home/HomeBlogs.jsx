
import { Link } from 'gatsby'
import { MainImage } from 'gatsby-plugin-image'
import React from 'react'
//import { useQuery, gql } from '@apollo/client'
// const COMMENTS_QUERY = gql`query{
//         blogs(first: 100) {
//           nodes {
//             handle
//             id
//             onlineStoreUrl
//             seo {
//               description
//               title
//             }
//             title
//             articles(first: 100) {
//               nodes {
//                 handle
//                 image {
//                   altText
//                   height
//                   id
//                   url
//                   width
//                 }
//                 title
//                 excerptHtml
//                 excerpt
//                 content
//            contentHtml
//            publishedAt
//            authorV2 {
//             name
//           }
//               }
//             }
//           }
//         }
//       }`
export default function HomeBlogs({blogs}) {
  // const bdata = useQuery( COMMENTS_QUERY)
  console.log(blogs,"ddddddddddd")
  return (

        <div className='home-blog-section'>
      <div className='container'>
        <h1 className='text-center text-4xl text-[#121212] my-4'>Our Blogs</h1>
        <div className='blogs flex items-center gap-4 py-6'>
        {
      blogs.nodes?.map((blog,inex)=>{
        return <div className='blog w-1/3 shadow-xl p-3'>
          <MainImage src={blog.articles.nodes[0].image.url} alt={blog.title}/>
          <h1 className='text-center text-xl text-[#121212] my-2'>{blog.title}</h1>
          <Link to={`/blogs/${blog.handle}`} className='bg-blue-500 block text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>View All</Link>
        </div>
      })
    }
        </div>
      </div>
     </div>

  
  )
}
