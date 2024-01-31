import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/createEx_Ac.module.css"

export default function TeQuupdate() {
    const params = useSearchParams()
    let name = params.get('NAME')
    let host = params.get('HOST')
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/TeQuSelect?NAME=${name}&HOST=${host}`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e);            
            }
        })();
    }, [])
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Technical-Qualification">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="TeQuProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="TeQuProps" method="POST" action="http://localhost:3001/api/updateTeQu">
                    <input type="text" name="name" className={`${styles.title}`} defaultValue={`${params.get('NAME')}`}/>
                    <p>
                        테스트 주관기관: <input type="text" name="host" className="Host" defaultValue={`${params.get('HOST')}`}/>
                    </p>
                    <p>
                        취득일자: <input type="date" name="acquisition_date" className="Acda" defaultValue={`${params.get('acquisition_date')}`}/>
                    </p>
                    <input type="hidden" name="ex_name" value={`${name}`} />
                    <input type="hidden" name="ex_host" value={`${host}`} />
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