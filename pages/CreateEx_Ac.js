import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"
import Script from "next/script"
import { setCookie, deleteCookie, getCookie } from "@/components/Scripts/cookiehandle"
import { useEffect, useState } from "react"
const axios = require('axios')
import { getKeyByValue } from "@/components/Scripts/etcscripts"

export default function CreateEx_Ac() {
    const router = useRouter()
    useEffect (() => {
        document.getElementById('title').value = getCookie('title')
        document.getElementById("host").value = getCookie('host')
        document.getElementById("awarded").value = getCookie('awarded')
        document.getElementById("start").value = getCookie('start')
        document.getElementById("finish").value = getCookie('finish')
        document.getElementById("link").value = getCookie('link')
    })
    return (
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
                }
                }><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="Ex_AcProps" method="POST" action="http://localhost:3001/api/insertEx_Ac">
                    
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
                    <Link href="/checkRelProject">
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
                    <input type="text" name='relprojectID' id='relprojectID' value={JSON.stringify(Object.keys(router.query))} />
                </form>
            </div>
            <Script src="../components/Scripts/cookiehandle.js" />
        
        </>
    )
}