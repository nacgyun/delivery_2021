import { Link } from "react-router-dom"
import "./Time.css"
export default function Time(props) {
    return(
        <>
            <div className="uploadPhoto__store">{props.location.state.shop}</div>
            <div className="uploadPhoto__plz">주문을 완료해주시고 예상 시간을 입력해주세요!</div>
            <form className="uploadPhoto__form">
                <input type="number" className="uploadPhoto__form-time"/>분
                <Link to={{
                    pathname: `/rooms/${props.location.state.rid}`,
                    state: {

                    }
                }
                }><button className="uploadPhoto__btn uploadPhoto__form-OK">확인</button></Link>
            </form>
        </>
    )
}