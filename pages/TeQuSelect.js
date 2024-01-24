import axios from "axios"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function TeQuSelect() {
    const params = useSearchParams()
    let name = params.get('NAME')
    let host = params.get('HOST')
    
    
    const [data, setData] = useState({ID: 'error', title: 'error', descripton: 'error', start: 'error', finish: 'error', link: 'error'})
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/TeQuSelect?NAME=${name}&HOST=${host}`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e);            
            }
        })();
    })
    return (
        <>
            <div className="ButtonArea">
            <Link href="/Technical_Qualification">
                <button className="Button"><span>Back</span></button>
            </Link>
            <div>
                <Link href={`Projectupdate?title=$`}>
                    <button className="Button"><span>수정</span></button>
                </Link>
                <Link href={`http://localhost:3001/api/deleteTeQu?NAME=${data[0]?.NAME}&HOST=${data[0]?.HOST}`}>
                    <button className="Button"><span>삭제</span></button>
                </Link>
            </div>
            </div>
            <div className="MainArea">
                <p className="Title">{data[0]?.NAME}</p>
                <p className="description">발급기관: {data[0]?.HOST}</p>
                <p className="description">발급날짜: {data[0]?.acquisition_date.substring(0, 10)}</p>
                
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