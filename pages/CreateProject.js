import styles from "@/styles/createproject.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
export default function CreateProject() {
    const router = useRouter()
    return (
        <>
        <div className={`${styles.ButtonArea}`}>
            <Link href="/Project">
                    <button><span>Back</span></button>
                </Link>
        </div>
        <div className={`${styles.MainArea}`}>
            <form>
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
            </form>
        </div>
        </>
    )
}