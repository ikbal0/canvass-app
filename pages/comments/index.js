import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../../component/nav'

export default function CommentsPage(){
    
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    //make a POST Request
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        fetchComments()
        console.log(data)
    }

    const deleteComment = async commentid => {
        const response = await fetch(`/api/comments/${commentid}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return(
        <>
            <Navbar/>
            <input 
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)} 
            />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            {comment.id} {comment.text}<Link href={`/comments/${comment.id}`} passHref><button className='btn btn-primary'>detail</button></Link>
                            <button className='btn btn-danger' onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}