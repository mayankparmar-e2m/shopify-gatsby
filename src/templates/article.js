import {  MainImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/global/Layout';

export default function blog({ pageContext }) {
  const {article}=pageContext;
  const articlePublishedAt=new Intl.DateTimeFormat("en-US",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  timeZone : "UTC"
  }).format(new Date(article.publishedAt))
  return (
    <Layout>
       <div className='aricle-page'>
        <div className='container'>
            <div className='py-4'>
              <div className='aricle-image'>
                <MainImage src={article.image.url} alt={article.image.altText ?? article.title } className='w-full'/>
              </div>
             <h1 className='title text-center text-4xl text-[#121212] my-4'>{article.title}</h1>
            < div className='flex items-center justify-between'><p>Publish at : {articlePublishedAt}</p>
            {
               article.name &&<p>Author: {article.name}</p>
            }
            </div>
            </div>
            <div className='content' dangerouslySetInnerHTML={{__html:article.contentHtml}}></div>
        </div>
     </div>
    </Layout>
    
  )
}

export const Head = ({ pageContext }) => {
    const {article}=pageContext
   return <>
      <title>{article.title} - Article</title>
      <meta name="description" content="Hello World" />
      <link rel="stylesheet" href="/artcle-page.css"/>
    </>
  
  }