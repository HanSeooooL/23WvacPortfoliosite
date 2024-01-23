import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"

export default function CreateTeQu() {
    const router = useRouter()
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Technical-Qualification">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="TeQuProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="TeQuProps" method="POST" action="https://localhost:3001/insertTeQu">
                    <input type="text" name="name" className={`${styles.title}`}/>
                    <p>
                        테스트 주관기관: <input type="text" name="host" className="Host" />
                    </p>
                    <p>
                        취득일자: <input type="date" name="acquisition_date" className="Acda" />
                    </p>
                    <p>
                        자격증명서: <input type="file" name="certificate" />
                    </p>
                </form>
            </div>
            <style jsx>
                {`
                    .Host {
                        width: 56vw;
                    }

                    .Acda {
                        
                    }
                `}
            </style>
        </>
    )
}