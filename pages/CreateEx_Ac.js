import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"

export default function CreateEx_Ac() {
    const router = useRouter()
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Extrality-Activites">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="Ex_AcProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="Ex_AcProps" method="POST" action="http://localhost:3001/api/insertEx_Ac" encType="multipart/form-data">
                    
                    <input type="text" name="title" className={`${styles.title}`}/>
                    <p>
                        주관기관: <input type="text" name="host" className={`${styles.host}`} />
                    </p>
                    <p>
                        수상여부: <input type="text" name="awarded" className={`${styles.awarded}`}/>
                    </p>
                    <p>
                        행사 기간: <input type="date" name="start" /> ~ <input type="date" name="finish" />
                    </p>
                    <p>
                        대회 사이트: <input type="text" name="link" className= {`${styles.link}`} />
                    </p>
                    
                </form>
            </div>
        </>
    )
}