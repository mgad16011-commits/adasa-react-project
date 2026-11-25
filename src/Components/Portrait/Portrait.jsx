import React from 'react'
import postsData from '../../data/posts.json'
import PortraitCards from '../PortraitCards/PortraitCards'
import { useOutletContext } from 'react-router-dom'

export default function Portrait() {

  const {search , view}= useOutletContext()
const filterPortrait = postsData.posts.filter((post)=>{
  return post.category ==="بورتريه"&&
  post.title.includes(search)
}
)


  return (
<>
<div className="container" dir='rtl'>
  <div className={ view === "row"? "row" :"list"}>
    {filterPortrait.map((post)=><PortraitCards portrait={post} key={post.id}/>)}
  </div>
</div>


</>
  )
}
