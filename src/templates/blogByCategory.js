import React from 'react'
import Layout from '../components/global/Layout'
import BlogCard from '../components/blog/BlogCard'

export default function blogByCategory({ pageContext }) {
  const {blog}=pageContext
  return (
    <Layout>
       <div className='blog-by-article'>
        <div className='container'>
        <h1 className='title text-center text-4xl text-[#121212] my-4'>{blog.title}</h1>
       <div className='blogs flex items-center gap-4 py-6'>
       {
        blog.articles.nodes.map((article,index)=>{
            return <BlogCard article={article} key={index} blogHandle={blog.handle}/>
        })
       }
       </div>
        </div>
     </div>
    </Layout>
     
  )
}

export const Head = ({ pageContext }) => {
    const {blog}=pageContext
   return <>
      <title>{blog.title} - Blog</title>
      <meta name="description" content="Hello World" />
      <link rel="stylesheet" href="/artcle-page.css"/>
    </>
  
  }