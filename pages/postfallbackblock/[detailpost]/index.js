import Navbar from "../../../component/nav";

export default function DetailPost({post}){
    return(
        <div>
            <Navbar/>
            <h1>Detail Post falback Blocking</h1>
            <table>
                <thead>
                    <tr>
                        <th>Content</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Id : {post.id}</td> 
                    </tr>

                    <tr>
                        <td>Title : {post.title}</td>
                    </tr>

                    <tr>
                        <td>{post.body}</td>
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
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()

    // const paths = data.map(post =>{
    //     return{
    //         params: {
    //             detailpost: `${post.id}`
    //         }
    //     }
    // })

    return{
        paths: [
            { params: {detailpost: '1'} },
            { params: {detailpost: '2'} },
            { params: {detailpost: '3'} },
            { params: {detailpost: '4'} },
        ],
        // paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.detailpost}`)
    const data = await response.json()

    if(!data.id){
        return{
            notFound: true,
        }
    }

    return {
        props: {
            post: data
        },
    }
}