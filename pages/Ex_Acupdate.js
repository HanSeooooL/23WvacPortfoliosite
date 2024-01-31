import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/styles/createproject.module.css"
import Script from "next/script"
import { useRouter } from "next/router"
import { deleteCookie, getCookie, setCookie} from "@/components/Scripts/cookiehandle"

export default function Ex_Acupdate() {
    const params = useSearchParams()
    let router = useRouter()
    let ID = Number(params.get('ID'))
    useEffect(() => {
        document.getElementById('ID').value = getCookie('ID')
        document.getElementById('title').value = getCookie('title')
        document.getElementById("host").value = getCookie('host')
        document.getElementById("awarded").value = getCookie('awarded')
        document.getElementById("start").value = getCookie('start')
        document.getElementById("finish").value = getCookie('finish')
        document.getElementById("link").value = getCookie('link')
        document.getElementById("relprojectID").value = getCookie('RelProj')
    })
    return(
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Extrality-Activites">
                    <button className={`${styles.Button}`} onClick={() => {
                        deleteCookie('title')
                        deleteCookie('host')
                        deleteCookie('awarded')
                        deleteCookie('start')
                        deleteCookie('finish')
                        deleteCookie('link')
                    }}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="Ex_AcProps" type="submit" onClick={() => {
                    deleteCookie('title')
                    deleteCookie('host')
                    deleteCookie('awarded')
                    deleteCookie('start')
                    deleteCookie('finish')
                    deleteCookie('link')
                    deleteCookie('ID')
                }
                }><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="Ex_AcProps" method="POST" action="http://3.39.99.94:3001/api/updateEx_Ac">
                    
                    <input type="text" name="title" id="title" className={`${styles.title}`}/>
                    <p>
                        주관기관: <input type="text" name="host" id="host" className={`${styles.host}`} />
                    </p>
                    <p>
                        수상여부: <input type="text" name="awarded" id="awarded" className={`${styles.awarded}`}/>
                    </p>
                    <p>
                        행사 기간: <input type="date" name="start" id="start" /> ~ <input type="date" name="finish" id="finish" />
                    </p>
                    <p>
                        대회 사이트: <input type="text" name="link" id="link" className= {`${styles.link}`} />
                    </p>
                    <Link href="/checkRelProjectupdate">
                        <button className={`${styles.Button}`} style={{width: 130}} onClick={() => {
                            setCookie('title' ,document.getElementById("title").value, 5)
                            setCookie('host', document.getElementById("host").value, 5)
                            setCookie('awarded', document.getElementById("awarded").value, 5)
                            setCookie('start', document.getElementById("start").value, 5)
                            setCookie('finish', document.getElementById("finish").value, 5)
                            setCookie('link', document.getElementById("link").value, 5)
                        }}>
                            <span>연관 프로젝트</span>
                        </button>
                    </Link>
                    <input type="text" name='relprojectID' id='relprojectID'/>

                    <input type="text" name="ID" id="ID" />
                </form>
            </div>
            <Script src="../components/Scripts/cookiehandle.js" />
        </>
    )
}