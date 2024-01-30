import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import styles from "@/styles/createEx_Ac.module.css"
import axios from "axios"
import { useRouter } from "next/router"

export default function LaCeupdate() {
    const router = useRouter()
    const queries = router.query;
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useLayoutEffect(() => {
        if(!router.isReady) return;
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/LaCeSelect?ID=${router.query.ID}`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e);            
            }
        })();
    }, [router.isReady])
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Language-Certification">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="LaCeProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="LaCeProps" method="POST" action="http://localhost:3001/api/updateLaCe">
                    <input type="text" name="name" className={`${styles.title}`} id="name" defaultValue={`${data[0]?.name}`}/>
                    <p>
                        테스트 주관기관: <input type="text" name="host" className="Host" defaultValue={`${data[0]?.host}`}/>
                    </p>
                    <p>
                        점수: <input type="text" name="score" className="Acda" defaultValue={`${data[0]?.score}`}/>
                    </p>
                    <p>
                        취득일자: <input type="date" name="acquisition_date" className="Acda" defaultValue={`${data[0]?.acquisition_date.substring(0, 10)}`}/>
                    </p>
                    <input type="hidden" name="ID" value={`${router.query.ID}`} className={`${styles.ID}`} />
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