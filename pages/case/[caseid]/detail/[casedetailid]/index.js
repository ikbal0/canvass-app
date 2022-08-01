import Link from "next/link"
import { useRouter } from "next/router"
import Navbar from "../../../../../component/nav"

export default function DynamicDetailCasePage() {
    const router = useRouter()
    const {caseid, casedetailid} = router.query
    const maindetailcasepage = `/case/${caseid}/detail`

    return(
        <div>
            <Navbar/>
            <h1>This is a Case {caseid} Detail {casedetailid} Page</h1>
            <ul className="nonListStyle">
                <li><Link href={maindetailcasepage}>Back to Main Detail Case Page</Link></li>
            </ul>
        </div>
    )
}