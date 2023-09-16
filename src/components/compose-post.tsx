import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'

interface Props {
  avatarUrl: string
}

const ComposePost = ({ avatarUrl }: Props) => {
  return (
    <form action="" className="flex flex-row gap-x-4 w-full p-4 border-b border-white/20">
      <Image src={avatarUrl} alt='User Avatar' width={48} height={48} className='rounded-full w-10 h-10 object-contain' />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="post"
          id="post"
          rows={4}
          className="w-full text-2xl bg-black placeholder-gray-500 p-2"
          placeholder="What is happening?!"
        />
        <button className="bg-sky-300 font-bold rounded-full px-5 py-2 self-end">
          Post
        </button>
      </div>
    </form>
  )
}

export default ComposePost
