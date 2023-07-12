import { Link } from 'gatsby'
import { MainImage } from 'gatsby-plugin-image'
import React from 'react'

export default function BlogCard({article,blogHandle}) {
    const articlePublishedAt=new Intl.DateTimeFormat("en-US",{
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      timeZone : "UTC"
      }).format(new Date(article.publishedAt))
  return (
    <Link to={`/blogs/${blogHandle}/${article.handle}`} className='block w-1/3'>
     <div className='article '>
       
       <div className='image'>
           <MainImage src={article.image.url} alt={article.title} className='w-full h-auto' />
        </div>
        <h1 className='title text-center text-4xl text-[#121212] my-4'>{article.title}</h1>
           < div className='flex items-center justify-between'><p>Publish at : {articlePublishedAt}</p>
            {
               article.name &&<p>Author: {article.name}</p>
            }
            
           </div>
        <div className='content'>
           <p className='only_three_line'>{article.content}</p>
        </div>
   </div>
    </Link>
   
  )
}
