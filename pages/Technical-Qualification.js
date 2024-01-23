import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/project.module.css"
const axios = require('axios')

export default function Technical_Qualification() {
    const [project, setProject] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectTeQu`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setProject(response.data)
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
                        <p>op</p>
                    </div>
                    <div>
                        <Link href="http://localhost:3000/CreateTeQu" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {project.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.NAME}</p>
                            <p>{list.HOST}</p>
                            <p>{list.acquisition_date}</p>
                            <Link href="http://localhost:3000/TeQuSelect" className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}