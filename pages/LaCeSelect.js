import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import axios from "axios"

export default function LaCeSelect() {
    const params = useSearchParams()
    let ID = params.get('ID')

    const [data, setData] = useState({})
    useEffect(() => {
        (async() => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/DB/LaCeSelect?ID=${ID}`,
                    baseURL: 'http://localhost:3001/api',
                    timeout: 2000
                });
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e)
            }
        })();
    }, [])

    return (
        <>
            <div className="ButtonArea">
            <Link href="/Language-Certification">
                <button className="Button"><span>Back</span></button>
            </Link>
            <div>
                <Link href={`Projectupdate?title=$`}>
                    <button className="Button"><span>수정</span></button>
                </Link>
                <Link href={`http://localhost:3001/api/deleteLaCe?ID=${ID}`}>
                    <button className="Button"><span>삭제</span></button>
                </Link>
            </div>
            </div>
            <div className="MainArea">
                <p className="Title">{data[0]?.name}</p>
                <p className="description">점수: {data[0]?.score}</p>
                <p className="description">발급기관: {data[0]?.host}</p>
                <p className="description">시험일자: {data[0]?.acquisition_date.substring(0, 10)}</p>
                <Image src={`http://localhost:3001/files/${data[0]?.certificate}`} width={250} height={250} alt="certificate"/>
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