import { useRouter } from "next/router"
import Navbar from "../../../component/nav"

let apartements = [
    {
        name: "apartement A",
        type: "A",
        price: 800
    },
    {
        name: "apartement B",
        type: "B",
        price: 1100
    },
    {
        name: "apartement C",
        type: "C",
        price: 1800
    },
    {
        name: "apartement D",
        type: "D",
        price: 2800
    }
]

export default function FillteredValue({ apart }){
    const router = useRouter()
    const { valuefillter = [] } = router.query

    const val1 = valuefillter[0]
    const val2 = valuefillter[1]

    apartements = apartements.filter(apartement => apartement.price >= val1 && apartement.price <= val2)

    return(
        <div>
            <Navbar/>
            <h1>Filltered Value Page</h1>
            <h2>Minimal Value : {valuefillter[0]} and Max Value : {valuefillter[1]}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apartements.map(apar => {
                            return(
                                <tr key={apar.name}>
                                    <td>{apar.name}</td>
                                    <td>{apar.price}</td>
                                </tr>
                            )
                        })
                    }
            
                </tbody>
            </table>
        </div>
    )
}