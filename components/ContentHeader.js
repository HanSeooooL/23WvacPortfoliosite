export default function ContentHeader() {
    return (
        <>
            <div className="HeaderText">
                Header
            </div>

            <style jsx>{`
                @font-face{
                    font-family:'bitbit';
                    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
                }

                .HeaderText {
                    font-family: 'bitbit';
                    position: relative;
                    top: 25%;
                    padding-left: 10px;
                }
            `}</style>
        </>
    )
}