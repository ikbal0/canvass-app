import Head from "next/head";
import Footer from '../../component/layout/footer'
import Navbar from "../../component/nav";

export default function HeadComponentAboutPage() {
    return(
        <>
            <Head>
                <title>About Page</title>
                <meta name='description' content='Tutorial web development' />
            </Head>
            <Navbar/>
            <h2 className='content'>Head Component About Page</h2>
        </>
    )
}

HeadComponentAboutPage.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}