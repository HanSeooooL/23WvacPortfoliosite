import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
const axios = require('axios')

export default function Language_Certification() {
    const [data, setData] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectLaCe`,
                    baseURL: 'http://3.39.99.94:3001/api',
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
            <div className={`${styles.mainscreen}`}>
                <div className={`${styles.mainheader}`}>
                    <div>
                        <p>어학자격증</p>
                    </div>
                    <div>
                        <Link href="http://3.39.99.94:3000/CreateLaCe" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {data.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.name}</p>
                            <p>{list.score}</p>
                            <p>{list.host}</p>
                            <p>{list.acquisition_date.substring(0, 10)}</p>
                            <Link href={`http://3.39.99.94:3000/LaCeSelect?ID=${list.ID}`} className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}