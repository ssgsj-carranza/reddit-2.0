import { useSession } from 'next-auth/react';
import React from 'react'
import Avatar from './Avatar';

function PostBox() {
    const {data: session} = useSession();

  return (
    <form>
        <div className="flex items-center space-x-3">
            {/* Avatar */}
            <Avatar />
            <input type='text' 
                   placeholder={session ? 'Enter post title here' : 'Please sign in to post'} 
                   disabled={!session}
                   className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
            />
        </div>
    </form>
  )
}

export default PostBox