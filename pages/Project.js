import { useEffect, useState } from "react"

export default function Projects() {
    
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:3003/api/DB/selectProject')
                .then(function(response) {
                    response.json()
                }).then((data) => setProjects(data))
    }, []) 
    
    return (
        console.log()
        
    )
}