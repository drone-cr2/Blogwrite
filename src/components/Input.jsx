import React, { forwardRef } from 'react'
import { useId } from 'react'

//as we are making an input component, we are declaring it here, but will be using it somewhere else
//so we need access to its state where we are using it
//this is done using HOOK forwardRef
//we pass the reference when rendering the component and get access to its state via it

//very similar to the Botton UI component we created 
//but we have to wrap this in the forwardRef, take ref as parameter, pass ref as attribute of <input>
//will understand more when using it(hopefully)

const Input = forwardRef( //wrapper IMPORTANT
  ({
    label,
    type = "text",
    className = '',
    ...props
  },
    ref // parameter as individual parameter IMPORTANT
  ) => {
    const id = useId() // useID hook (not necessary)
    return (
      <div>

        {label && <label
          className='inline-block mb-1 pl-1'
          htmlFor={id}>
          {label}
        </label>} 
        {/* {variable && (jsx)} */}

        <input type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 
          w-full ${className}`}
          ref={ref} //ref as attribute IMPORTANT
          id={id}  //had forgotten to add id, still worked
          {...props}
        />

      </div>
    )
  })

export default Input