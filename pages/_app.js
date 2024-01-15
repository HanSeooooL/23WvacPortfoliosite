import Layout from "@/components/layout";

export default function myApp({Component, pageProps}) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}