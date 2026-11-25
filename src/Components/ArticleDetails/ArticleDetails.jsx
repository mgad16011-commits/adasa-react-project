import React from 'react'
import postsData from '../../data/posts.json'
import { useParams } from 'react-router-dom'
import ArticleHero from '../ArticleHero/ArticleHero';
import NotFound from './../NotFound/NotFound';


export default function ArticleDetails() {
const {slug} = useParams()

console.log(slug);
 const article =postsData.posts.find((post)=>{
    return post.slug === slug
})
if (!article) {
  return <NotFound/>;
}


  return (
<>
<ArticleHero article={article} />
</>
  )
}
