import Footer from "../../component/layout/footer"
import Navbar from "../../component/nav"

export default function PerpageLayoutAbout() {
    return (
        <>
            <Navbar/>
            <h1 className='content'>Per-page Layout - About</h1>
        </>
    )
}

PerpageLayoutAbout.getLayout = function PageLayout(page) {
    return(
        <>
            {page}
            <Footer/>
        </>
    )
}