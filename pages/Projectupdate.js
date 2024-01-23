import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/styles/createproject.module.css"

export default function Projectupdate() {
    const params = useSearchParams()
    let ID = Number(params.get('ID'))
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/projectSelect?ID=${ID}`,
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
        <div className={`${styles.ButtonArea}`}>
            <Link href="/Project">
                    <button className={`${styles.Button}`}><span>Back</span></button>
            </Link>
            <button className={`${styles.Button}`} form="ProjectProps" type="submit"><span>수정</span></button>
        </div>
        <div className={`${styles.MainArea}`}>
            <form id="ProjectProps" action="http://localhost:3001/api/updateProject" method="POST" encType="multipart/form-data">
                <p>
                    <input type="text" name="Title" className={`${styles.title}`} value={`${data[0]?.title}`}/>
                </p>
                <p>
                    설명<br/>
                    <textarea name="Description" className={`${styles.description}`} />
                </p>
                <p>
                    GitHub: <input type="text" name="github" className={`${styles.githubLink}`} />
                </p>
                    제작 기간: <input type="date" name="date" /> ~ <input type="date" name="date" />
                <div className={`${styles.uploadfiles}`}>
                    첨부파일 <br />
                    <input type="file" name="myFiles" multiple/>
                </div>
            </form>
        </div>
        </>
    )
}