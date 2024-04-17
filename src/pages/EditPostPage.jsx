import React,{useEffect,useState} from 'react'
import services from '../appwrite/config'
import { PostForm,Container } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function EditPostPage() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()  // to fetch slug from the URL when they clcik the post
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            services.getPost(slug).then((post)=>{
                if (post) setPost(post)
            })
        }
        else{
            navigate("/")
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
        <p>edit post</p>
        <Container childen={
            <PostForm post={post} />
        } />
    </div>
  ) : null
}

export default EditPostPage