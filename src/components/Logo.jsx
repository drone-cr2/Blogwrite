import React from 'react'
import logoYellow from '../assets/logo-yellow.png'
import blogwriteYellow from '../assets/blogwrite-yellow.png'


function Logo({width = '100px',icon = true,color = "blank"}) {
  if(icon){
    return (
      <img src={logoYellow} width={width} alt="logo" />
  )
  }
  else{
    return(
      <img src={blogwriteYellow} width={width} alt="logo" />
    )
  }
}

export default Logo