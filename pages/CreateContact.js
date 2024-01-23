import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"

export default function CreateContact() {
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Contact">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="ContactProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="ContactProps" method="POST" action="https://localhost:3001/insertContact">
                    <p>
                        유형: <select name="category">
                            <option value="instagram">Instagram</option>
                            <option value="facebook">FaceBook</option>
                            <option value="x">X</option>
                            <option value="mail">E-Mail</option>
                            <option value="phone">Phone</option>
                            <option value="etc">기타</option>
                        </select>
                    </p>
                    <p>
                        세부내용: <input type="text" name="detail" className={`${styles.awarded}`}/>
                    </p>
                </form>
            </div>
        </>
    )
}