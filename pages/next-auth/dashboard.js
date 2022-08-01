import { useState, useEffect } from "react"
import { getSession, signIn } from "next-auth/react"

export default function DashboadAuthPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, [])

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        <>
            <h1 className="content">Dashboard Page</h1>
        </>
    )
}