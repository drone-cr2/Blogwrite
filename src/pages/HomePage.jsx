import React, { useState, useEffect } from 'react'
import services from '../appwrite/config'
import { Postcard, Container } from '../components'
import { useSelector } from 'react-redux'

function HomePage() {

    const [posts, setPosts] = useState([])
    const status = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (status) {
            services.getPosts().then((posts) => {
                setPosts(posts.documents)
            })
        }
    }, [])

    if (!status) {
        return (<div>
            <Container childen={
                <h1>Login to see posts</h1>
            } />
        </div>)
    }
    else {
        return (
            <div className='w-full py-8'>
                <Container childen={
                    <div className='flex flex-wrap'>
                        {posts.map(post => 
                        	<Postcard key={post.$id} {...post}/>
												)}
                    </div>
                } />
                {/* close container */}
            </div>
        )
    }
}

export default HomePage