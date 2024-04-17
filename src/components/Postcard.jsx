import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import services from '../appwrite/config'

// this is the card component to display articles
//will get data directly from BaaS 
//the POST ID parameter name itself is "$id" and not "id"...appwrite syntax
//and image ID parameter name is featuredImage 
function Postcard({ $id, title, featuredImage}) {

  return (
    <>
      {/* these Link tags dont require entire URL, you can navivate from current place to forward. hence /post/.. */}
      <div className={`m-4 bg-gray-100  rounded-lg p-2`}>
        <Link to={`/post/${$id}`} >
          <div className='w-full justify-center m-4'>
            <img src={services.previewFile(featuredImage)} alt={title} className='rounded-lg w-10' />
          </div>
          <h2 className='text-xl'>{title}</h2>
        </Link>
      </div>
    </>
  )
}

export default Postcard