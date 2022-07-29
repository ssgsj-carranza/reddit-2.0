import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import Avatar from './Avatar';
import {LinkIcon, PhotographIcon} from '@heroicons/react/outline';
import {useForm} from 'react-hook-form'

type FormData = {
    postTitle: string
    postBody: string
    postImage: string
    subreddit: string
}

function PostBox() {
    const {data: session} = useSession();
    const {register, setValue, handleSubmit, watch, formState: {errors}, } = useForm<FormData>();
    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

    const onSubmit = handleSubmit(async(formData) => {
        console.log(formData);
    })

  return (
    <form onSubmit={onSubmit} className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
        <div className="flex items-center space-x-3">
            {/* Avatar */}
            <Avatar />
            <input type='text' 
                   placeholder={session ? 'Enter post title here' : 'Please sign in to post'} 
                   disabled={!session}
                   className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
                   {...register('postTitle', {required: true})}
            />
            <PhotographIcon onClick={() => setImageBoxOpen(!imageBoxOpen)} 
                            className={`h-6 text-gray-300 cursor-pointer ${imageBoxOpen && 'text-blue-300'}`} 
            />
            <LinkIcon className='h-6 text-gray-300' />
        </div>
        {!!watch('postTitle') && (
            <div className='flex flex-col py-2'>
                {/* body */}
                <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Body:</p>
                    <input {...register('postBody')} 
                           type='text' 
                           placeholder='Text (optional)'
                           className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                    />
                </div>
                 {/* subreddit */}
                 <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Subreddit:</p>
                    <input {...register('subreddit', {required: true})} 
                           type='text' 
                           placeholder='Text (optional)'
                           className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                    />
                </div>
                {imageBoxOpen && (
                    <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Image URL:</p>
                    <input {...register('postImage')} 
                           type='text' 
                           placeholder='Optional...'
                           className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                    />
                </div>
                )}

                {/* errors */}
                {Object.keys(errors).length > 0 && (
                    <div className='space-y-2 p-2 text-red-500'>
                        {errors.postTitle?.type === 'required' && (
                            <p>- A Post Title is required</p>
                        )}
                        
                        {errors.subreddit?.type === 'required' && (
                            <p>- A subreddit is required</p>
                        )}
                    </div>
                )}
                {!!watch('postTitle') && (
                    <button type='submit' className='w-full rounded-full bg-blue-400 p-2 text-white'>Create Post</button>
                )}
            </div>
        )}
    </form>
  )
}

export default PostBox