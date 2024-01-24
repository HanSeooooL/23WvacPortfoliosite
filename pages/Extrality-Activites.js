import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
const axios = require('axios')

export default function Extrality_Activites() {
    const [Ex_Ac, setEx_Ac] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectEx_Ac`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setEx_Ac(response.data)
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
                        <p>대내외활동</p>
                    </div>
                    <div>
                        <Link href="http://localhost:3000/CreateEx_Ac" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {Ex_Ac.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.title}</p>
                            <p>{list.host}</p>
                            <p>{list.awarded}</p>
                            <p>{list.start.substring(0, 10)}</p>
                            <Link href="http://localhost:3000/Ex_AcSelect" className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}