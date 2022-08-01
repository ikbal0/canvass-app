import Navbar from "../../../component/nav";

export default function DetailProduct({product}){
    return(
        <div>
            <Navbar/>
            <h1>Detail Product</h1>
            <table>
                <thead>
                    <tr>
                        <th>Content</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Id : {product.id}</td> 
                    </tr>

                    <tr>
                        <td>Title : {product.title}</td>
                    </tr>

                    <tr>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { detailpost: '1' } },
//         { params: { detailpost: '2' } },
//         { params: { detailpost: '3' } },
//         { params: { detailpost: '4' } },
//       ],
//       fallback: false,
//     }
//   }

export async function getStaticPaths(){
    const response = await fetch('http://localhost:8000/products')
    const data = await response.json()

    const paths = data.map(product =>{
        return{
            params: {
                detailproduct: `${product.id}`
            }
        }
    })

    return{
        paths: [
            { params: {detailproduct: '1'} }
        ],
        // paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`http://localhost:8000/products/${params.detailproduct}`)
    const data = await response.json()

    if (!data.id){
        return{
            notFound: true
        }
    }

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}