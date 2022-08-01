import Navbar from "../../component/nav";
import Link from "next/link";

export default function FilterPage(){
    return(
        <div>
            <Navbar/>
            <h1>Fillter Page</h1>
            <Link href="/valuefillter/2000/8000">Pass value to fillter</Link>
        </div>
    )
}