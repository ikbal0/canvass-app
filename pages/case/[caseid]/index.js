import Navbar from "../../../component/nav"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DynamicCasePage() {
    const router = useRouter()
    const caseid = router.query.caseid
    const detailedcasepath = `/case/${caseid}/detail`

    return(
        <div>
            <Navbar/>
            <h1>This is a Case {caseid} Page</h1>
            <ul className="nonListStyle">
                <li><Link href={detailedcasepath}>to Detail Case Page</Link></li>
                <li><Link href="/case">Back to Case Page</Link></li>
            </ul>
        </div>
    )
}