import styles from "@/styles/createproject.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import "react-datepicker/dist/react-datepicker.css";
export default function CreateProject() {
    const router = useRouter()
    return (
        <>
        <div className={`${styles.ButtonArea}`}>
            <Link href="/Project">
                    <button className={`${styles.Button}`}><span>Back</span></button>
            </Link>
            <button className={`${styles.Button}`} form="ProjectProps" type="submit"><span>게시</span></button>
        </div>
        <div className={`${styles.MainArea}`}>
            <form id="ProjectProps" action="http://localhost:3001/api/insertProject" method="POST" encType="multipart/form-data">
                <p>
                    <input type="text" name="Title" className={`${styles.title}`} />
                </p>
                <p>
                    설명<br/>
                    <textarea name="Description" className={`${styles.description}`} />
                </p>
                <p>
                    GitHub: <input type="text" name="github" className={`${styles.githubLink}`} />
                </p>
                    제작 기간: <input type="date" name="date" /> ~ <input type="date" name="date" />
                <div className={`${styles.uploadfiles}`}>
                    첨부파일 <br />
                    <input type="file" name="myFiles" multiple/>
                </div>
            </form>
        </div>
        </>
    )
}