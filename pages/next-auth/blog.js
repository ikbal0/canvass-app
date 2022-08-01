import { getSession, useSession } from "next-auth/react"

export default function BlogAuthPage({ data }) {
    const {data: session} = useSession()
    console.log(session)
    return (
        <>
            <h1 className="content">Blog Page - {data}</h1>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return{
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/next-auth/blog',
                permanent: false,
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of perzonalized blogs' : 'List of free blogs'
        }
    }
}