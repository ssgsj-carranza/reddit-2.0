import { useSession } from 'next-auth/react';
import React from 'react'
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

  return (
    <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
        <div className="flex items-center space-x-3">
            {/* Avatar */}
            <Avatar />
            <input type='text' 
                   placeholder={session ? 'Enter post title here' : 'Please sign in to post'} 
                   disabled={!session}
                   className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
                   {...register('postTitle', {required: true})}
            />
            <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`} />
            <LinkIcon className='h-6 text-gray-300' />
        </div>
        {!!watch('postTitle') && (
            <div>
                {/* body */}
                <div>
                    <p>Body</p>
                    <input {...register('postBody')} 
                           type='text' 
                           placeholder='Text'
                           className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                    />
                </div>
            </div>
        )}
    </form>
  )
}

export default PostBox