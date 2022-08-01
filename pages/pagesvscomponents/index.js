import Navbar from "../../component/nav";
import { useRouter } from "next/router";

export default function StaticGenerationwithgetStaticPropsPage(){
    const router = useRouter()
    const clickHandler = () => {
        router.push('/pagesvscomponents/user')
    }


    return(
        <div>
            <Navbar/>
            <h1>Pages vs Components Page!</h1>
            <button onClick={clickHandler}>User</button>
        </div>
    )
}