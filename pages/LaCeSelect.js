import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function LaCeSelect() {
    const params = useSearchParams()
    let ID = params.get('ID')

    const [data, setData] = useState()
    useEffect(() => {
        (async() => {
            try {

            } catch (e) {
                console.error(e)
            }
        })();
    })

    return (
        <>
            
        </>
    )
}