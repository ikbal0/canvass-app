import Navbar from "../../../../component/nav"
import { useRouter } from "next/router"
import Link from "next/link"

export default function DetailCasePage(){
    const router = useRouter()
    const caseid =router.query.caseid
    const detailcasepath1 = `/case/${caseid}/detail/1`
    const detailcasepath2 = `/case/${caseid}/detail/2`
    const detailcasepath3 = `/case/${caseid}/detail/3`
    return(
        <div>
            <Navbar/>
            <h1>This is a Detailed Case Page</h1>
            <ul>
                <li><Link href={detailcasepath1}>detail 1</Link></li>
                <li><Link href={detailcasepath2}>detail 2</Link></li>
                <li><Link href={detailcasepath3}>detail 3</Link></li>
            </ul>
        </div>
    )
}