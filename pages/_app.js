import Layout from "@/components/layout";
import '../styles/global.css'

export default function MyApp({Component, pageProps}) {
    return(
        <Layout>
            <title>포트폴리오 사이트</title>
            <Component {...pageProps} />
        </Layout>
    )
}