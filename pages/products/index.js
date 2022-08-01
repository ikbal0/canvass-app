import Navbar from "../../component/nav"
import Link from "next/link"

export default function ListPostPage({products}){
    return(
        <div>
            <Navbar/>
            <h1>Page List of Product</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
            {
                products.map(product =>{
                    return(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><Link href={`/products/${product.id}`}>Detail</Link></td>
                        </tr>
                    )
                })
            }
            
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps(){
    console.log("regenerate")
    const response = await fetch('http://localhost:8000/products')
    const data = await response.json()

    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}