import Link from "next/link"
import Navbar from "../../component/nav"

export default function newsPage({ articles }){
    return(
        <>
            <Navbar/>
            <h1>News Page</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.idnews}>
                            <h2>
                                {article.idnews} {article.newstitle} || <Link href={`news/${article.category}`}>{article.category}</Link>
                            </h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:8000/news')
    const data = await response.json()
    console.log('Pre-rendering News article')

    return {
        props: {
            articles: data,
        }
    }
}