import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import services from '../appwrite/config'

// this is the card component to display articles
//will get data directly from BaaS 
//the POST ID parameter name itself is "$id" and not "id"...appwrite syntax
//and image ID parameter name is featuredImage 
function Postcard({ $id, title, featuredImage }) {

  return (
    <>
      {/* these Link tags dont require entire URL, you can navivate from current place to forward. hence /post/.. */}
      <Link to={`/post/${$id}`} >
        <div className={`my-4 mx-2 p-2 w-40 h-60 relative rounded-lg bg-earth-yellow border-2 border-tiger-yellow hover:shadow-lg`}>
          <img src={services.previewFile(featuredImage)} alt={title} className='rounded-t-md absolute inset-0 object-cover object-center w-full h-40 ' />
          <p className='mt-4 text-lg text-center font-semibold uppercase text-dark-green absolute top-40 left-1/2 -translate-x-1/2 truncate '>
            {title}
          </p>
        </div>
      </Link>
    </>
  )
}

export default Postcard