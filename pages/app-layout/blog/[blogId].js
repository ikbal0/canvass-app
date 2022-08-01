import Head from 'next/head'
import Navbar from '../../../component/nav'

export default function Blog ({ title, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <Navbar/>
            <h1 className='content'>Blog Article</h1>
            <p>Mauris enim tortor, ullamcorper vitae scelerisque quis, dictum ac tellus. Nam maximus ligula ac blandit viverra. Integer varius dictum mauris nec porttitor. 
            Nam vulputate nunc nunc, non posuere mauris posuere non. Aenean tortor ex, faucibus sed nisi in, finibus tincidunt sem. Nulla vitae feugiat erat. Vestibulum 
            dictum bibendum consectetur. Nunc arcu risus, mattis in leo sed, tincidunt venenatis quam. Vestibulum at nibh egestas, pulvinar magna vel, finibus eros. Etiam 
            dignissim mollis dolor a imperdiet. Phasellus aliquet ex metus, nec suscipit dui commodo in.
            </p>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            title: 'Blog title',
            description: 'Article description'
        }
    }
}