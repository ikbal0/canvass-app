import Image from 'next/image'
import Navbar from '../../component/nav'
import img from '../../public/1.jpg'

export default function PicPage() {
    return (
        <div>
            <Navbar/>
            <Image src={img} placeholder='blur' alt='pic' width='820' height='400'/>
            {
                ['1','2','3','4'].map((path) => {
                    return (
                        <div key={path} className='content'>
                            <Image src={`/${path}.jpg`} alt='pic' width='820' height='400'/>
                        </div>
                    )
                })
            }
        </div>
    )
}