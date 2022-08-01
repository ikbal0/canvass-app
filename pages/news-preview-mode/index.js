import Navbar from "component/nav"

export default function News({ data }) {
    return (
        <>
            <Navbar/>
            <h1 className='content'>{data}</h1>
        </>
    )
}

export async function getStaticProps(context) {
    console.log('runing getStaticProps', context.previewData)
    return {
        props: {
            data: context.preview
            ?'List of Draft articles'
            :'List of Published articles'
        }
    }
}