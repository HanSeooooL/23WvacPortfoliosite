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
                    baseURL: 'http://3.39.99.94:3001/api',
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
                        <p>기술 자격증</p>
                    </div>
                    <div>
                        <Link href="http://3.39.99.94:3000/CreateTeQu" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {project.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.NAME}</p>
                            <p>{list.HOST}</p>
                            <p>{list.acquisition_date.substring(0, 10)}</p>
                            <Link href={`http://3.39.99.94:3000/TeQuSelect?NAME=${list.NAME}&HOST=${list.HOST}`} className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}