import React from 'react'
import { useId } from 'react'

//notice that even thi we used ref, we have no wrapper around the component
//coz we can apply the hook when exporting 
function Select({
    options,  //usually we get an array to map over
    label,
    className='',
    ...props
},ref) // IMPORTANT
    {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id}></label>}
        <select id={id}
        ref={ref} //IMPORTANT
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// another syntax to use forward ref
export default React.forwardRef(Select)