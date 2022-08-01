import { useState, useEffect } from 'react'
import Navbar from '../../component/nav'
export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboarData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:8000/dashboard')
            const data = await response.json()
            setDashboarData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

    if (isLoading) {
        return <h2>Laoding...</h2>
    }

    return (
        <>
            <Navbar/>
            <h2>Dashboard</h2>
            <h2>Post - {dashboardData.posts}</h2>
            <h2>Like - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </>
    )
}