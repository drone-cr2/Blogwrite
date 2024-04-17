import React from 'react'
import { Container, PostForm } from '../components'

function AddPostPage() {
  return (
    <div className='py-8'>
        <Container childen={
            <PostForm />    
          }/>
    </div>
  )
}

export default AddPostPage