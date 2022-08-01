import Navbar from "../../component/nav"
import Link from "next/link"

export default function ListPostPage({posts}){
    return(
        <div>
            <Navbar/>
            <h1>Page List of Post</h1>
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
                posts.map(post =>{
                    return(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td><Link href={`/post/${post.id}`}>Detail</Link></td>
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
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0, 4),
        },
    }
}