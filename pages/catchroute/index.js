import Navbar from "../../component/nav"
import Link from "next/link"

export default function routeMainpage() {
    return (
    <div>
        <Navbar/>
        <h1>Catch Route Page!</h1>
        <Link href="/catchroute/1000/1000">Pass Value</Link>
    </div>
    )
}