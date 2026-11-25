import React from 'react'
import postsData from '../../data/posts.json'
import TechCards from '../TechCards/TechCards'
import { useOutletContext } from 'react-router-dom'

export default function Tech() {
  const {search , view}= useOutletContext()
const filterTech = postsData.posts.filter((post)=>{
  return post.category ==="تقنيات"&&
  post.title.includes(search)
}
)


  return (
<>
<div className="container" dir='rtl'>
  <div className={ view === "row"? "row" :"list"}>
    {filterTech.map((post)=><TechCards  Tech={post} key={post.id}/>)}
  </div>
</div>


</>
  )
}
