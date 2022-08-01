import Navbar from '../../component/nav'
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:8000/dashboard')
    const data = await response.json()
    return data
}

export default function DashboardSWR(){
    const {data, error} = useSWR('dashboard', fetcher)

    if(error) return 'An error has occured'
    if(!data) return 'Loading...'

    return (
        <div>
            <Navbar/>
            <h2>Dashboard - SWR</h2>
            <h2>Post - {data.posts}</h2>
            <h2>Like - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )
}