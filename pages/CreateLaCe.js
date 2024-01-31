import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"
import { getTodayFormInputDate } from "@/components/Scripts/etcscripts"

export default function CreateLaCe() {
    const router = useRouter()
    return(
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Language-Certification">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="LaCeProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="LaCeProps" method="POST" action="http://localhost:3001/api/insertLaCe" encType="multipart/form-data">
                    <input type="text" name="name" className={`${styles.title}`}/>
                    <p>
                        점수: <input type="text" name="score" className="Score" />
                    </p>
                    <p>
                        주관기관: <input type="text" name="host" className="Host" />
                    </p>
                    <p>
                        시험일자: <input type="date" name="acquisition_date" className="Acda" defaultValue={getTodayFormInputDate()}/>
                    </p>
                    <p>
                        자격증명서 <input type="file" name="myFiles" />
                    </p>
                </form>
            </div>
            <style jsx>
                {`
                    .Score{
                        
                    }

                    .Host {
                        width: 56vw;
                    }
                `}
            </style>
        </>
    )
}