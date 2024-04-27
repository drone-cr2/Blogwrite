import React from 'react'

// accepts properties as children and renders them as is
// useage is styling driven

function Container({childen}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{childen}</div>
  )
}

export default Container