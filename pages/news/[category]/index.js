import Navbar from "../../../component/nav"

export default function ArticleListByCategory({articles, category}){
    return (
        <>
            <Navbar/>
            <h1>
                Showing news for category <i>{category}</i>
            </h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.idnews}>
                            <h2>
                                {article.idnews} {article.newstitle}
                            </h2>
                            <p>
                                {article.description}
                            </p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Rudy'])
    const { category } = params
    const response = await fetch(
        `http://localhost:8000/news?category=${category}`
    )
    const data = await response.json()
    console.log(`Pre-rendering News article for category ${category}`)

    return {
        props: {
            articles: data,
            category
        }
    }
}