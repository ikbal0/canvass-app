import { useRouter } from "next/router"
import Navbar from "../../../component/nav"

export default function RoutePage() {
    const router = useRouter()
    const { value = [] } = router.query

    if (value.length === 2) {
        return(
            <div>
                <Navbar/>
                <h1>Viewing Value 1 : {value[0]} and Value 2 : {value[1]}</h1>
            </div>
        )
    } else if(value.length === 1) {
        return(
            <div>
                <Navbar/>
                <h1>Viewing Value {value[0]}</h1>
            </div>
        )
    }

    return (
    <div>
        <Navbar/>
        <h1>Catch Route Page!</h1>
    </div>
    )
}