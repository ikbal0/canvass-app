import { useRouter } from 'next/router'

import Navbar from "../../component/nav"
import Link from "next/link"

function MyPage(){
  const router = useRouter()
  const mypages = router.query.mypage

  return(
    <div>
      <Navbar />
      <h1>Catch Dynamic</h1>
      <h1>This is a {mypages} Page</h1>
      <Link href="/">Back</Link>
    </div>
  )
}

export default MyPage