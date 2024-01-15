import Link from "next/link";
import styles from "@/components/NavBar.module.css"
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <>
            <div className={`${styles.NavHeader}`}>
                <Link href="/" className={`${styles.NavHeaderText}`}>
                    Portfolio
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Project" className={`${router.pathname === "/Project" ? styles.active : styles.LinkText}`}>
                    프로젝트
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Extrality-Activites" className={`${router.pathname === "/Extrality-Activites" ? styles.active : styles.LinkText}`}>
                    대내외활동
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Careers" className={`${router.pathname === "/Careers" ? styles.active : styles.LinkText}`}>
                    경력
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Technical-Qualification" className={`${router.pathname === "/Technical-Qualification" ? styles.active : styles.LinkText}`}>
                    기술 자격증
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Language-Certification" className={`${router.pathname === "/Language-Certification" ? styles.active : styles.LinkText}`}>
                    어학 자격증
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Education" className={`${router.pathname === "/Education" ? styles.active : styles.LinkText}`}>
                    학력
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Link href="/Contacts" className={`${router.pathname === "/Contacts" ? styles.active : styles.LinkText}`}>
                    연락처
                </Link>
            </div>

            
        </>
    )
}