import axios from "axios";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "@/styles/createEx_Ac.module.css"
import { useRouter } from "next/router";

export default function Careerupdate() {
    const router = useRouter()
    const queries = router.query;
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useLayoutEffect(() => {
        if(!router.isReady) return;
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/CareerSelect?ID=${router.query.ID}`,
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
                <Link href="/Careers">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="CareerProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
            <form id="CareerProps" method="POST" action="http://localhost:3001/api/updateCareer">
                    <input type="text" name="comp_name" className={`${styles.title}`} defaultValue={`${data[0]?.comp_name}`}/>
                    <p>
                        근무부서: <input type="text" name="department" className="Department" defaultValue={`${data[0]?.department}`}/>
                    </p>
                    <p>
                        담당업무: <input type="text" name="responsibilities" className="Responsibilities" defaultValue={`${data[0]?.responsibilities}`}/>
                    </p>
                    <p>
                        근무기간 <input type="date" name="start" defaultValue={`${data[0]?.start.substring(0, 10)}`}/> ~ <input type="date" name="finish" defaultValue={`${data[0]?.start.substring(0, 10)}`}/>
                    </p>
                    <input type="hidden" name="ID" defaultValue={`${router.query.ID}`} />
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