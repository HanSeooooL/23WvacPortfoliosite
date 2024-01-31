import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"
import Script from "next/script"
// 🍅 최상단에 dynamic 불러오기
import dynamic from "next/dynamic";

export default function CreateContact() {
    return (
        <>
            <p id="result"></p>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Contacts">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="ContactProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="ContactProps" action="http://3.39.99.94:3001/api/insertContact" method="POST">
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
            <script>
                
            </script>
        </>
    )
}