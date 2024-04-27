import React, { useState, useEffect } from 'react'
import services from '../appwrite/config'
import { Postcard, Container } from '../components'
import { useSelector } from 'react-redux'
import LandingPage from './LandingPage'

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
                <LandingPage />
            } />
        </div>)
    }
    else {
        return (
            <div className='w-full py-8'>
                <Container childen={
                    <div className='flex flex-wrap text-center'>
                        {posts.map(post =>
                            <Postcard key={post.$id} {...post} />
                        )}
                    </div>
                } />
                {/* close container */}
            </div>
        )
    }
}

export default HomePage