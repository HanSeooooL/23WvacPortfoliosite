import Link from "next/link";
import styles from "@/components/NavBar.module.css"
import { useRouter } from "next/router";
import Image from "next/image";

export default function NavBar() {
    const router = useRouter();
    return (
        <>
            <div className={`${styles.NavHeader}`}>
                <Link href="/Project" className={`${styles.NavHeaderText}`}>
                    Portfolio
                </Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/project_iconnn.png" width={20} height={20}/>
                <Link href="/Project" className={`${router.pathname === "/Project" || router.pathname === "/CreateProject" ? styles.active : styles.LinkText}`}> 프로젝트</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/Trophy_icon.png" width={20} height={20}/>
                <Link href="/Extrality-Activites" className={`${router.pathname === "/Extrality-Activites" || router.pathname === "/CreateEx_Ac" ? styles.active : styles.LinkText}`}> 대내외활동</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/business_iconn.png" width={20} height={20}/>
                <Link href="/Careers" className={`${router.pathname === "/Careers" ? styles.active : styles.LinkText}`}> 경력</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/Technical_Qualification_icon.png" width={20} height={20}/>
                <Link href="/Technical-Qualification" className={`${router.pathname === "/Technical-Qualification" ? styles.active : styles.LinkText}`}> 기술 자격증</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/Language_icon.png" width={20} height={20}/>
                <Link href="/Language-Certification" className={`${router.pathname === "/Language-Certification" ? styles.active : styles.LinkText}`}> 어학 자격증</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/Education_cion.png" width={20} height={20}/>
                <Link href="/Education" className={`${router.pathname === "/Education" ? styles.active : styles.LinkText}`}> 학력</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/Phone_icon.png" width={20} height={20}/>
                <Link href="/Contacts" className={`${router.pathname === "/Contacts" ? styles.active : styles.LinkText}`}> 연락처</Link>
            </div>
            <div className={`${styles.LinkStyle}`}>
                <Image src="/resume_icon.png" width={20} height={20} />
                <Link href={`http://3.39.99.94:3010`} className={`${router.pathname === "/selectResume" ? styles.active : styles.LinkText}`} target="_blank"> 이력서 생성</Link>
            </div>
        </>
    )
}