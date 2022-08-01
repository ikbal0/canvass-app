import { comments } from '../../../data/comments'
import Navbar from '../../../component/nav'

export default function DetailCommment({ comment }) {
    return (
        <div>
            <Navbar/>
            {comment.id}. {comment.text}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: {commentid: '1'}},
            { params: {commentid: '2'}},
            { params: {commentid: '3'}}
        ],
        fallback: false
    }
}

export async function getStaticProps(context){
    const { params } = context
    const { commentid } = params

    const comment = comments.find(
        (comment) => comment.id === parseInt(commentid)
    )
    console.log(comment)
    /** Don't do this
        const response = await fetch(`http:localhost:3000/api/comments/${commentid}`)
        const data = await response.json()
     */

    return {
        props: {
            comment
        }
    }
}