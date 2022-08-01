import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

function Navbar() {
  const {data: session, status } = useSession()
  // console.log({ session, status })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Tast App</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href='/next-auth'>
            <a>Home</a>
          </Link>
        </li>
        {status === "authenticated" && (
          <li>
            <Link href='/next-auth/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href='/next-auth/blog'>
            <a>Blog</a>
          </Link>
        </li>
        {status !== "authenticated" && (
          <li>
            <Link href='/api/auth/signin'>
            <a onClick={e => {
                e.preventDefault()
                signIn()
              }}> Sign In </a>
            </Link>
          </li>
        )}
          
          {status === "authenticated" && (
            <li>
            <Link href='/api/auth/signout'>
            <a onClick={e => {
                e.preventDefault()
                signOut()
              }}>   Sign Out </a>
            </Link>
          </li>
          )}
      </ul>
    </nav>
  )
}

export default Navbar