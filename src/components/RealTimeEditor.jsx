import React from 'react'
import {Editor} from'@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import conf from '../conf/conf'

// this component is all about creating the real time rich text editor used to create or update articles
// its made simple via the tinymce which provides a simple text editor just via using <Editor /> 
// but we will pass some porperties as well
// this is mere syntax implimentation and not logic

//however, as we are designing editor here and using it somewhere esle, we gotta pass reference
//this can be done by forwardRef but Contoller is somewhat better(not fully understood)
//https://react-hook-form.com/get-started#IntegratingControlledInputs

//the "control" parameter comes from the react-hook-form,and is
// responsible for passing state of this RTE component, to the form inside which its is being used
//we will pass the "control" when we will use this RTE component
function RealTimeEditor({name,control,label,defaultValue=""}) {
  return (
    <>
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        {/* controleer wrapper....takes few props....as per documentation
        here the "render" tells us how to render anything
        it accepts a callback, which takes "field" as prop which applies event tracking onto the element being rendered
        syntax : ({field: {event}}) => (<element to be rendered>) */}
        <Controller 
        name={name || "content"}
        control={control}  
        render={({field: {onChange}})=>(
            <Editor
            apiKey={conf.tinymceAPIkey}
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",       //all this plugins, toolbar options and styles as per documentation
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}  
            // if there is any change in editor, the "render" is informed
            />
        )}
        />
    </div>
  </>
  )
}

export default RealTimeEditor