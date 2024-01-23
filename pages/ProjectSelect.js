import axios from "axios"
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
            <div className="MainArea">
                <p className="Title">{data[0]?.title}</p>

            </div>
            <div>{data[0]?.description}</div>
            <div>{data[0]?.start}</div>
            <div>{data[0]?.finish}</div>
            <div>{data[0]?.Link}</div>

            <style jsx> {`
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
            `}
            </style>
        </>
    )
}