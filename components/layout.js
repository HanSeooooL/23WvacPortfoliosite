import ContentHeader from "./ContentHeader";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                <div className="NaviArea">
                    <NavBar />
                </div>
                <div className="ContentsArea">
                    <div className="ContentHeader">
                        <ContentHeader />
                    </div>
                    <div className="MainArea">
                        <div className="_MainArea">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    grid-template-rows: 1fr;
                    width: 100%;
                    height: 100%;
                    background: gray;
                    padding: 0px;
                }
                
                .NaviArea {
                    background: linear-gradient(to top, purple, aqua);
                    background-size: cover;
                    padding: 0px;
                    
                }
                
                .ContentsArea {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 30px 1fr;
                    height: 100vh;
                }

                .MainArea {
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 10px;
                    border-radius: 20px / 20px
                    height: 100vh;
                }

                ._MainArea{
                    background: white;
                    height: 100vh;
                }

                .ContentHeader {
                    width: 100wh;
                    background:white;
                    border-bottom: solid 2px black;
                }
                
                
            `}
            </style>
        </>
    )
}