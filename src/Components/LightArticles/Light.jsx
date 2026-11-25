import React from 'react'
import postsData from '../../data/posts.json'
import LightCards from '../LightCards/LightCards'
import { useOutletContext } from 'react-router-dom'


export default function Light() {
  const{search , view }= useOutletContext()
  const filterCategory = postsData.posts.filter((post) => {
    return post.category === "إضاءة" &&
    post.title.includes(search)

  })

  return (
    <div className="container" dir="rtl">
      <div className={ view === "row"? "row" :"list"}>
        {filterCategory.map((post) => (
          <LightCards light={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}