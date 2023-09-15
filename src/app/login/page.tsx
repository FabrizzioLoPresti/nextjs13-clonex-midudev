import AuthButtonServer from '@/components/auth-button-server'

// type Props = {}

export default function LoginPage () {
  return (
    <section className='grid place-content-center min-h-screen gap-4'>
      <h1 className='text-center font-bold text-4xl'>Login in Clone X</h1>
      <AuthButtonServer />
    </section>
  )
}
