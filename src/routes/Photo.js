import { Link } from "react-router-dom"
import "./Photo.css"
export default function Photo(props) {
    const rid = props.location.state.rid;
    console.log(rid)
    return (
        <>
            <div className="uploadPhoto__store">{props.location.state.shop}</div>
            <div className="uploadPhoto__plz">대표 결제자 님은 배달 앱에서 아래와 같은 메뉴를 장바구니에 담고, 결제 페이지를 캡처한 후 업로드 해주세요.</div>
            <div className="uploadPhoto__uploadDiv">
                <label className="input-file-button" for="input-file"> 업로드
                </label>
                <input type="file" id="input-file" style={{display:"none"}}/>
            </div>
            <div></div>
            <div className="uploadPhoto__btnDiv"><Link to={{
                pathname: `/rooms/${rid}/time`,
                state: {
                    shop: props.location.state.shop,
                    rid: rid,
                }}}><button className="uploadPhoto__btn">다음</button></Link></div>
        </>
    )
}