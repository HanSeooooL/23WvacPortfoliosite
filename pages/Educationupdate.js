import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import styles from "@/styles/createEx_Ac.module.css"

export default function Educationupdate() {
    const router = useRouter()
    const queries = router.query;
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useLayoutEffect(() => {
        if(!router.isReady) return;
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/EducationSelect?ID=${router.query.ID}`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e);            
            }
        })();
    }, [router.isReady])
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Education">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="EducationProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="EducationProps" method="POST" action="http://localhost:3001/api/updateEducation">
                    <input type="text" name="name" className={`${styles.title}`} id="name" defaultValue={`${data[0]?.name}`}/>
                    <p>
                        학위구분: <select name="degree" defaultValue={`${data[0]?.degree}`}>
                            <option value="1">학사</option>
                            <option value="2">석사</option>
                            <option value="3">박사</option>
                        </select>
                    </p>
                    <p> 전공: <input type="text" name="major" className={`${styles.awarded}`} defaultValue={`${data[0]?.major}`}/></p>
                    <p>
                        수학구분: <select name="state" defaultValue={`${data[0]?.state}`}>
                            <option value="1">졸업</option>
                            <option value="2">수료</option>
                            <option value="3">재학</option>
                            <option value="4">중퇴</option>
                        </select>
                    </p>
                    <p>입학일자: <input type="date" name="admis_date" defaultValue={`${data[0]?.admission_date.substring(0, 10)}`}/></p>
                    <p>졸업(예정)일자: <input type="date" name="grad_date" defaultValue={`${data[0]?.graduate_date.substring(0, 10)}`}/></p>
                    <input type="hidden" name="ID" value={`${router.query.ID}`} className={`${styles.ID}`} />
                </form>
            </div>
            <style jsx>
                {`
                    .Host {
                        width: 56vw;
                    }

                    .Acda {
                        
                    }
                `}
            </style>
        </>
    )
}