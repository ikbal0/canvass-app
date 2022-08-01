import Navbar from "../../component/nav";
import Link from "next/link";

export default function CasePage(){


    return(
        <div>
            <Navbar/>
            <h1>This is a Case Page</h1>
            <ul>
                <li><Link href="/case/1">Case 1 Page</Link></li>
                <li><Link href="/case/2">Case 2 Page</Link></li>
                <li><Link href="/case/3">Case 3 Page</Link></li>
            </ul>
        </div>
    )
}