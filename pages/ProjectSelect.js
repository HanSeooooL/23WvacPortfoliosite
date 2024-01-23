import axios from "axios"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProjectSelect() {
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
            <div className="ButtonArea">
            <Link href="/Project">
                <button className="Button"><span>Back</span></button>
            </Link>
            <div>
                <Link href={`Projectupdate?ID=${ID}`}>
                    <button className="Button"><span>수정</span></button>
                </Link>
                <Link href={`http://localhost:3001/api/deleteProject?ID=${ID}`}>
                    <button className="Button"><span>삭제</span></button>
                </Link>
            </div>
            </div>
            <div className="MainArea">
                <p className="Title">{data[0]?.title}</p>
                <p className="description">{data[0]?.description}</p>
                <Link href={`${data[0]?.link}`}>
                    <button className="imgbutton"></button>
                </Link>
                <div className="createdate">
                    <p>제작기간<br/>{data[0]?.start} ~ {data[0]?.finish}</p>
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
                    width: 60vw;
                    height: 20vw;
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