import { useSession } from 'next-auth/react';
import React from 'react'

function PostBox() {
    const {data: session} = useSession();

  return (
    <form>
        <div>
            {/* Avatar */}
            <input type='text' 
                   placeholder={session ? 'Enter post title here' : 'Please sign in to post'} 
                   disabled={!session}
            />
        </div>
    </form>
  )
}

export default PostBox