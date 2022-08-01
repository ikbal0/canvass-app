import Navbar from "../../component/nav";
import { useRouter } from "next/router"

export default function NavProgrammatically(){
    const router = useRouter()
    const clickHandeler = () => {
        router.replace('/navprogrammatically/targetpath')
    }

    return(
        <div>
            <Navbar/>
            <h1>Navigating Programmatically Page</h1>
            <button onClick={clickHandeler}>Go to Target Page</button>
        </div>
    )
}