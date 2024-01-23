'use client'

export default function DeleteButton(props) {
    return (
        <>
            <button className="Button" onclick={onRemove()}>삭제</button>
        </>
    )
}

const onRemove = () => {
    if (typeof window !== "undefined") {
        // Client-side-only code
        if (window.confirm("정말 삭제합니까?")) {

            alert("삭제되었습니다.");
      
          } else {
      
            alert("취소합니다.");
      
          }
    }
    // or
    if (typeof window === 'undefined') return;

}