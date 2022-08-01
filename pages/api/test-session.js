import { getSession } from "next-auth/react"

export default async (req, res) => {
    const session = await getSession({ req })
    if (!session) {
        res.status(401).json({ error: 'Unautenticated user'})
    } else {
        res.status(200).json({ message: 'Success', session })
    }
}