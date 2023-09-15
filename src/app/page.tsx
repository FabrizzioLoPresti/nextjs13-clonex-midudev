import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthButtonServer from '@/components/auth-button-server'
import PostList from '@/components/post-list'
import { type Post } from '@/types/types'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user: users(name, user_name, avatar_url)')

  return (
    <main className="container mx-auto h-screen">
      <section className="flex flex-col items-center max-w-[600px] mx-auto border-l border-r border-white/30 min-h-screen">
        <AuthButtonServer />
        <PostList posts={posts as Post[]} />
      </section>
    </main>
  )
}
