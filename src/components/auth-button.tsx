'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@nextui-org/react'
import { GithubIcon } from './github-icon'

// interface Props {}

const AuthButton = () => {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className='flex flex-row items-center justify-between'>
      <Button onClick={handleSignIn}>
        <GithubIcon />
        Sign in with GitHub
      </Button>

      <Button onClick={handleSignOut}>
        Sign out
      </Button>
    </nav>
  )
}

export default AuthButton
