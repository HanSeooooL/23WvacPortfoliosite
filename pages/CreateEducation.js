import Link from "next/link";
import styles from "@/styles/createEx_Ac.module.css";
import { getTodayFormInputDate } from "@/components/Scripts/etcscripts";

export default function CreateEducation() {
    return (
        <>
            <p id="result"></p>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Education">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="EducationProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="EducationProps" action="http://3.39.99.94:3001/api/insertEducation" method="POST" encType="multipart/form-data">
                    <input type="text" name="name" className={`${styles.title}`} defaultValue={`대학명을 입력하세요...`}/>
                    <p>
                        학위구분: <select name="degree">
                            <option value="1">학사</option>
                            <option value="2">석사</option>
                            <option value="3">박사</option>
                        </select>
                    </p>
                    <p> 전공: <input type="text" name="major" className={`${styles.awarded}`}/></p>
                    <p>
                        수학구분: <select name="state">
                            <option value="1">졸업</option>
                            <option value="2">수료</option>
                            <option value="3">재학</option>
                            <option value="4">중퇴</option>
                        </select>
                    </p>
                    <p>입학일자: <input type="date" name="admis_date" defaultValue={getTodayFormInputDate()}/></p>
                    <p>졸업(예정)일자: <input type="date" name="grad_date" defaultValue={getTodayFormInputDate()}/></p>
                    <p>제적증명서 <input type="file" name="myFiles" /></p>
                </form>
            </div>
            <script>
                
            </script>
        </>
    )
}