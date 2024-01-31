import { displaydegree, displaystate } from "@/components/Scripts/etcscripts"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EducationSelect() {
    const params = useSearchParams()
    let ID = params.get('ID')

    const [data, setData] = useState({})

    useEffect( () => {
        (async () => { 
            try {
                console.log(`ID: ${ID}`)
                const response = await axios({
                    method: 'get',
                    url: `/DB/EducationSelect?ID=${ID}`,
                    baseURL: 'http://3.39.99.94:3001/api',
                    timeout: 2000
                })
                console.log(response.data)
                setData(response.data)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])
    
    return (
        <>
            <div className="ButtonArea">
            <Link href="/Education">
                <button className="Button"><span>Back</span></button>
            </Link>
            <div>
                <Link href={`Educationupdate?ID=${ID}`}>
                    <button className="Button"><span>수정</span></button>
                </Link>
                <Link href={`http://3.39.99.94:3001/api/deleteEducation?ID=${ID}`}>
                    <button className="Button"><span>삭제</span></button>
                </Link>
            </div>
            </div>
            <div className="MainArea">
                <p className="Title">{data[0]?.name}</p>
                <p className="description">학위구분 : {displaydegree(data[0]?.degree)}</p>
                <p className="description">전공: {data[0]?.major}</p>
                <p className="description">수학구분: {displaystate(data[0]?.state)}</p>
                <p className="description">입학일자: {data[0]?.admission_date.substring(0, 10)}</p>
                <p className="description">졸업(예정)일자: {data[0]?.graduate_date.substring(0, 10)}</p>
                <Image src={`http://3.39.99.94:3001/files/${data[0]?.certificate}`} width={250} height={250} alt="certificate"/>
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