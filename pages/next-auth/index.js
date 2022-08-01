import Navbar from '../../component/nav'
import { useSession } from 'next-auth/react'

export default function HomePage(){
    const { data: session, status } = useSession()
    return(
        <>
            <h2 className='content'>{session ?`${session.user.name},`: ''}Welcome to Personal Template</h2>
            <Navbar/>
        </>
    )
}