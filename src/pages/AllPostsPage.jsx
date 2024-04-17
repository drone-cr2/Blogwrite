import React, { useEffect, useState } from 'react'
import services from '../appwrite/config'
import { Postcard, Container } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'


function AllPostsPage() {
  const [posts, setPosts] = useState([])
  const userId = useSelector((state) => state.auth.userData.$id)

  useEffect(() => {
    const promise = services.getPosts([Query.equal("user_id", userId)])
    promise.then((posts) => {
      if (posts) {
        setPosts(posts.documents) // returns an array of posts
      }
    })
  }, [])


  return (
    <div className='w-full py-8'>
      <Container childen={
        <div className='flex flex-wrap'>
          {posts.map(post => 
            <Postcard key={post.$id} {...post} ownPost={true} />
            // destrusturing the "post" and passing the "ownPost" prop as true to enable delete option  
          )}
        </div>
      } />
      {/* close container */}
    </div>
  )
}

export default AllPostsPage