import Navbar from "../component/nav";
import styles from "../styles/About.module.css"

export default function AboutPage() {
    let text =""

    for(let i = 0 ; 10 > i; i++) {
        text += i
    }
    
    return(
        <div className={styles.highlight}>
            <Navbar/>
            <h1>This is About Page</h1>
            {text}
        </div>
    )

}