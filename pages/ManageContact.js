import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
const axios = require('axios')

export default function ManageContact() {
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
                    <Link href="/Extrality-Activites">
                    <button className={`${styles.Button}`} style={{width:60}}><span>Back</span></button>
                    </Link>
                    <div>
                        <button className={`${styles.Button}`} style={{width: 60}} form="checkedContact" type="submit">삭제</button>
                    </div>
                </div>
                <form id="checkedContact" method="POST" action="http://3.39.99.94:3001/api/deleteContact">
                {data.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <input type="checkbox" name="contact" value={list.ID} />
                            <label for={list.ID}>{list.category} {list.detail}</label>
                        </div>
                    )
                })}
                </form>
            </div>
        </>
    )
}