import React from 'react'
import postsData from '../../data/posts.json'
import NaturalCards from '../NaturalCards/NaturalCards'
import { useOutletContext } from 'react-router-dom'


export default function Portrait() {
  const{search,view}= useOutletContext()

const filterNatuarl = postsData.posts.filter((post)=>{
  return post.category ==="مناظر طبيعية"&&
  post.title.includes(search)
}
)


  return (
<>
<div className="container" dir='rtl'>
  <div className={ view === "row"? "row" :"list"}>
    {filterNatuarl.map((post)=><NaturalCards natural={post} key={post.id}/>)}
  </div>
</div>


</>
  )
}
