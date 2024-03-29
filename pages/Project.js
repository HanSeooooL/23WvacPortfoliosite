import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/project.module.css"
const axios = require('axios')

export default function Projects() {
    const [project, setProject] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/selectProject`,
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
                        <p>프로젝트</p>
                    </div>
                    <div>
                        <Link href="http://3.39.99.94:3000/CreateProject" className={`${styles.Button}`}>
                            <button>+</button>
                        </Link>
                    </div>
                </div>
                {project.map((list) => {
                    return (
                        <div key={list.ID} className={`${styles.datascreen}`}>
                            <p>{list.title}</p>
                            <p>{list.start.substring(0, 10)}</p>
                            <p>{list.finish.substring(0, 10)}</p>
                            <Link href={`${list.link}`} target="_blank">
                                <button className="imgbutton"></button>
                            </Link>
                            <Link href={`http://3.39.99.94:3000/ProjectSelect?ID=${list.ID}`} className={`${styles.Button}`}>
                                <button>✓</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}