import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/project.module.css"
const axios = require('axios')

export default function CheckRelProject() {
    const [project, setProject] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectProject`,
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
                <div className={`${styles.ButtonArea}`}>
                    <Link href="/CreateEx_Ac">
                        <button className={`${styles.Button}`} style={{width: 60}}><span>Back</span></button>
                    </Link>
                    <button className={`${styles.Button}`} form="RelProjectssel" type="submit" style={{width: 60}}><span>완료</span></button>
                </div>
                <div className={`${styles.mainheader}`}>
                    <div>
                        <p>연관 프로젝트 선택</p>
                    </div>
                </div>
                <form id="RelProjectssel" method="GET" action="http://localhost:3000/CreateEx_Ac">
                {project.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <input type="checkbox" name='relproj' value={list.ID} />
                            <label for={list.ID}>{list.title}</label>
                        </div>
                    )
                })}
                </form>
            </div>
        </>
    )
}