import React from "react";
//
import style from '../Signboard/SignBoard.module.css'
import char from '../../assets/Icon/char.png'
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//
const SignBoard = ({signboard, setSignboard}) =>{
    return (
      <>
      { signboard &&
        <div className={style.main_ctn} onClick={() => setSignboard(false)}>
          <div className={style.ctn} onClick={(e) => e.stopPropagation()}>
            <div className={style.tilte}>Smember</div>
            <div className={style.exit} onClick={() => setSignboard(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={style.icon}>
              <img src={char} alt="Loading.." />
            </div>
            <div className={style.line}>
              Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.
            </div>
            <div className={style.btn_ctn}>
              <button>Đăng ký</button>
              <button>Đăng nhập</button>
            </div>
          </div>
        </div>
    }
      </>
    );
}
export default SignBoard