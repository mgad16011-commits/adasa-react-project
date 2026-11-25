import React from 'react'
import postsData from '../../data/posts.json'
import ToolCards from '../ToolCards/ToolCards'
import { useOutletContext } from 'react-router-dom'

export default function Tools() {
  const {search , view}=useOutletContext()
const filterTools = postsData.posts.filter((post)=>{
  return post.category ==="معدات"&&
  post.title.includes(search)
}
)


  return (
<>
<div className="container" dir='rtl'>
  <div className={ view === "row"? "row" :"list"}>
    {filterTools.map((post)=><ToolCards  tool={post} key={post.id}/>)}
  </div>
</div>


</>
  )
}
