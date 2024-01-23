import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles/createEx_Ac.module.css"

export default function CreateCareer() {
    return (
        <>
            <div className={`${styles.ButtonArea}`}>
                <Link href="/Careers">
                    <button className={`${styles.Button}`}><span>Back</span></button>
                </Link>
                <button className={`${styles.Button}`} form="CareerProps" type="submit"><span>게시</span></button>
            </div>
            <div className={`${styles.MainArea}`}>
                <form id="CareerProps" method="POST" action="https://localhost:3001/insertCareer">
                    <input type="text" name="comp_name" className={`${styles.title}`}/>
                    <p>
                        근무부서: <input type="text" name="department" className="Department"/>
                    </p>
                    <p>
                        담당업무: <input type="text" name="responsibilities" className="Responsibilities" />
                    </p>
                    <p>
                        근무기간 <input type="date" name="start" /> ~ <input type="date" name="finish" />
                    </p>
                    <p>
                        재직증명서 <input type="file" name="certificate" />
                    </p>
                </form>
            </div>

            <style jsx>
                {`
                    .Department {
                        width: 56vw;
                    }

                    .Responsibilities {
                        width: 56vw;
                    }
                `}
            </style>
        </>
    )
}