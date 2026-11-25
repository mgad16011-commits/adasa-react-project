
import React, { useEffect, useState } from 'react'
import postsData from '../../data/posts.json'
import ArticleCard from '../ArticleCards/ArticleCards'
import { useOutletContext } from 'react-router-dom'

export default function GeneralArticles() {

  const { search,view } = useOutletContext()

  const [posts, setPosts] = useState([])

  const getPosts = () => {
    setPosts(postsData.posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const filteredPosts = posts.filter((post) => {
    return post.title.includes(search)
  })

  return (
    <>
      <div className="container" dir="rtl">
        <div className={
          view=== "row" ? "row" :"list"
        }>
          {filteredPosts.map((post) => (
            <ArticleCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  )
}
