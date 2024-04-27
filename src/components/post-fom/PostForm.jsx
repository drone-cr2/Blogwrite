import React, { useCallback,useState } from 'react'
import { RealTimeEditor, Input, Button, Select } from '../index'
import services from '../../appwrite/config'
import { useNavigate , useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


//this is the actual form (component) which will contain the RTE, and other input elements
//also, when we create or update a post, it must be updated in the database as well via appwrite services
//this component is basically a form, hence the useForm

function PostForm({post}) {

    //"watch" helps in continously monitor a field/s within a form
    //"setValue" is the way of setting values of fields in react-hook-form(we dont use normi value) 
    //"control" the control to pass to the RTE
    //"getValue" to grab values
    //if user is here to update post, we give existing data as defaultValue OR empty
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || '',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    //2 cases....already post exists, if so, update it, else create new
    //the "data" from hook-form lets us access all the images of form in an array format....an functionality
    const submit = async (data) => {
        if (post) {
            //if post exists, then if updated image exists, upload it else null
            const file = data.image[0] ? await services.uploadFile(data.image[0]) : null
            //if uploaded updated image, delete previous image
            if (file) {
                services.deleteFile(post.featuredImage)     // featuredImage is the id image of existing post
            }
            //now update the post
            // make the "data" such that it satisfies the args
            const dbPost = await services.updatePost(
                post.$id,
                {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                })  // overwrite updated image id

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        //if post is to be created, do it as per 
        // ALWAYS HANDLE FILE UPLOADS PRIOR TO DATA UPLOAD wrt database, as file uploading gives it associated fileId which is to be passed in data 
        //logic is a bit different than tutorial and acceptss post even if image is not uploaded
        else {
            console.log("submoit clicked");
            // const file = data.image[0] ? await services.uploadFile(data.image[0]) : null
            // const dbPost = await services.createPost({
            //     ...data,        //spread data and overwrite featuredImage as per uploadFile and get userID from store
            //     featuredImage: file ? file.$id : undefined,
            //     userId: userData.$id
            // })
            const file = await services.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                console.log(data);
                const dbPost = await services.createPost({ ...data, user_id: userData.$id });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    //this is basic transformation function, "watch" and calling it will go into a useEffect
    //useCallback for memoization
    const slugTransform = useCallback((value) => {
        if (value && typeof (value) == 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        }
    }, [])


    //the subscription, unsubscribe is memory optimisation thingy
    //"watch" can have a callback, which has access to the data object of useForm
    useEffect(() => {
        const subscription = watch((data, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(data.title, { shouldValidate: true }))
                //setValue is a useForm method, "data" is a object, idk wtf is shouldValidate
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        // useForm syntax, passing "submit"(own method) to "handleSubmit"(useForm method)
        <form onSubmit={handleSubmit(submit)} className="mt-3 grid grid-cols-2 sm:grid-cols-3">
            <div className="col-span-2 px-2">
                {/* Input is our own component, notice ...register of everyone of them*/}
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder= {post?.slug || 'Slug'}
                    className="mb-4"
                    disabled = {true}
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {/* BOG BOI RTE....notice args passed...control is passed from udeForm */}
                <RealTimeEditor label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            <div className="mt-3 col-span-1 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={services.previewFile(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm