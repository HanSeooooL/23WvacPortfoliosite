import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
const axios = require('axios')

export default function Contact() {
    const [data, setData] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectContact`,
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
                        <p>연락처</p>
                    </div>
                    <div>
                        <Link href="http://3.39.99.94:3000/CreateContact" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                        <Link href="http://3.39.99.94:3000/ManageContact" className={`${styles.Button}`}>
                            <button>관리</button>
                        </Link>
                    </div>
                </div>
                {data.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.category}</p>
                            <p>{list.detail}</p>
                            <Link href="http://3.39.99.94:3000/ContactSelect" className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}