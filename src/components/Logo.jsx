import React from 'react'

function Logo({width = '100px',icon = true,color = "blank"}) {
  if(icon){
    return (
      <img src="src\assets\logo-yellow.png" width={width} alt="logo" />
  )
  }
  else{
    return(
      <img src="src\assets\blogwrite-yellow.png" width={width} alt="logo" />
    )
  }
}

export default Logo