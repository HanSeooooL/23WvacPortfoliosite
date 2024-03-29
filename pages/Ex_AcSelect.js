import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Extrality-Activites.module.css"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookie, getCookie } from "@/components/Scripts/cookiehandle";

export default function Ex_AcSelect() {
    const params = useSearchParams()
    let ID = params.get('ID')
    const [data, setData] = useState([])
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/Ex_AcSelect?ID=${ID}`,
                    baseURL: 'http://3.39.99.94:3001/api',
                    timeout: 2000
                })
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])
    
    return (
        <>
            <div className="ButtonArea">
            <Link href="/Extrality-Activites">
                <button className="Button"><span>Back</span></button>
            </Link>
            <div>
                <Link href={`Ex_Acupdate`}>
                    <button className="Button" onClick={() => {
                        let relpro = []
                        setCookie('title' ,document.getElementById("title").value, 5)
                        setCookie('host', document.getElementById("host").value, 5)
                        setCookie('awarded', document.getElementById("awarded").value, 5)
                        setCookie('start', document.getElementById("start").value, 5)
                        setCookie('finish', document.getElementById("finish").value, 5)
                        setCookie('ID', data[0]?.ID)
                        for(let i = 0; i < data.length; i++) {
                            relpro.push(String(data[i].Pro_ID))
                        }
                        setCookie('RelProj', relpro, 5)
                    }}><span>수정</span></button>
                </Link>
                <Link href={`http://3.39.99.94:3001/api/deleteEx_Ac?ID=${ID}`}>
                    <button className="Button"><span>삭제</span></button>
                </Link>
            </div>
            </div>
            <div className="MainArea">
                <p className="Title">{data[0]?.title}</p>
                <p className="description">주관기관: {data[0]?.host}</p>
                <p className="description">수상여부: {data[0]?.awarded}</p>
                <p className="description">수행기간: {data[0]?.start.substring(0, 10)} ~ {data[0]?.finish.substring(0, 10)}</p>
                <input type="hidden" id="title" Value={data[0]?.title} />
                <input type="hidden" id="host" Value={data[0]?.host} />
                <input type="hidden" id="awarded" Value={data[0]?.awarded} />
                <input type="hidden" id="start" Value={data[0]?.start.substring(0, 10)} />
                <input type="hidden" id="finish" Value={data[0]?.finish.substring(0, 10)} />
                <div>
                    <p>연관 프로젝트</p>
                    {data.map((list) => {
                        return (
                            <div key={list.Pro_ID} className={`${styles.datascreen}`}>
                                {list.Pro_title}
                                <Link href={`http://3.39.99.94:3000/ProjectSelect?ID=${list.Pro_ID}`} className={`${styles.Button}`}>
                                    <button>✓</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                
            </div>
            <style jsx> {`
                .ButtonArea {
                    display: flex;
                    justify-content: space-between;
                }
                .Button {
                    font-size: 0.8rem;
                    width: 60px;
                    margin: 10px;
                }

                .MainArea {
                    padding-left: 5vw;
                    padding-top: 1vw;
                }

                .Title {
                    font-size: xx-large;
                    margin: 20px 0px;
                    border-width: 0 0 1px;
                    width: 70vw;
                }

                .description {
                    margin-top: 10px;
                }

                .createdate {
                    border: 1px black;
                }

                .imgbutton {
                    background: url( "../public/github_icon.png" ) no-repeat;
                    border: none;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                }
            `}
            </style>
        </>
    )
}