import Navbar from "../../component/nav";
import { useRouter } from "next/router";

export default function StaticGenerationwithgetStaticPropsPage(){
    const router = useRouter()
    const clickHandler = () => {
        router.push('/sgwgsp/user')
    }


    return(
        <div>
            <Navbar/>
            <h1>Static Generation with getStaticProps Page!</h1>
            <button onClick={clickHandler}>User</button>
        </div>
    )
}