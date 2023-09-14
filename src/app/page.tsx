import AuthButton from '@/components/auth-button'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select('*')
  return (
    <main className="container mx-auto h-screen">
      <AuthButton />
      <h1 className='font-bold text-4xl'>Hola Mundo</h1>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  )
}
