import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
const axios = require('axios')

export default function Careers() {
    const [career, setCareer] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectCareer`,
                    baseURL: 'http://3.39.99.94:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setCareer(response.data)
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
                        <p>경력</p>
                    </div>
                    <div>
                        <Link href="http://3.39.99.94:3000/CreateCareer" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {career.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.comp_name}</p>
                            <p>{list.department}</p>
                            <p>{list.responsibilities}</p>
                            <p>{list.start.substring(0, 10)}</p>
                            <Link href={`http://3.39.99.94:3000/CareerSelect?ID=${list.ID}`} className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}