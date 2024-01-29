import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
import { displaydegree, displaystate } from "@/components/Scripts/etcscripts";
const axios = require('axios')

export default function Education() {
    const [data, setData] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectEducation`,
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
            <div className={`${styles.mainscreen}`}>
                <div className={`${styles.mainheader}`}>
                    <div>
                        <p>학력</p>
                    </div>
                    <div>
                        <Link href="http://localhost:3000/CreateEducation" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {data.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.name}</p>
                            <p>{displaydegree(list.degree)}</p>
                            <p>{displaystate(list.state)}</p>
                            <p>{list.graduate_date.substring(0, 10)}</p>
                            <Link href={`http://localhost:3000/EducationSelect?ID=${list.ID}`} className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}