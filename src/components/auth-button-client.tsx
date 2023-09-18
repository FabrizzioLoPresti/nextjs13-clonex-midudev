'use client'

import { useRouter } from 'next/navigation'
import {
  type Session,
  createClientComponentClient
} from '@supabase/auth-helpers-nextjs'
import { Button } from '@nextui-org/react'
import { GithubIcon } from './github-icon'

interface Props {
  session: Session | null
}

const AuthButton = ({ session }: Props) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.BACKEND_URL}/auth/callback`
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <nav className="flex flex-row items-center justify-between">
      {session === null
        ? (
        <Button onClick={handleSignIn}>
          <GithubIcon />
          Sign in with GitHub
        </Button>
          )
        : (
        <Button onClick={handleSignOut}>Sign out</Button>
          )}
    </nav>
  )
}

export default AuthButton
