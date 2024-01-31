import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/styles/createproject.module.css"

export default function Projectupdate() {
    const params = useSearchParams()
    let ID = Number(params.get('ID'))
    const [data, setData] = useState([{ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'}])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/projectSelect?ID=${ID}`,
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
        <div className={`${styles.ButtonArea}`}>
            <Link href="/Project">
                    <button className={`${styles.Button}`}><span>Back</span></button>
            </Link>
            <button className={`${styles.Button}`} form="ProjectProps" type="submit"><span>수정</span></button>
        </div>
        <div className={`${styles.MainArea}`}>
            <form id="ProjectProps" action="http://3.39.99.94:3001/api/updateProject" method="POST">
                <p>
                    <input type="text" name="Title" className={`${styles.title}`} defaultValue={`${params.get('title')}`}/>
                </p>
                <p>
                    설명<br/>
                    <textarea name="Description" className={`${styles.description}`} defaultValue={`${params.get('description')}`} />
                </p>
                <p>
                    GitHub: <input type="text" name="github" className={`${styles.githubLink}`} defaultValue={`${params.get('link')}`} />
                </p>
                    제작 기간: <input type="date" name="date" defaultValue={`${params.get('start')}`} /> ~ <input type="date" name="date" defaultValue={`${params.get('finish')}`}/>
                <div className={`${styles.uploadfiles}`}>
                </div>
                <input type="text" name="ID" value={`${ID}`} className={`${styles.ID}`} />
            </form>
        </div>
        </>
    )
}