//
import React from "react";
//
import style from '../Locate/Locate.module.css'
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
const Tinh = [
  "Hồ Chí Minh", "Hà Nội", "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh",
  "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau",
  "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
  "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", 
  "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên",
  "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn",
  "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận",
  "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh",
  "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
  "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh",
  "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

import { faXmark , faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
const Locate = ({locate,setLocate , select, setSelect}) => {
    return(
        <>
        {locate &&
            <div className={style.ctn} onClick={() => setLocate(false)}>
                <div className={style.locate} onClick={(e) => e.stopPropagation()}>
                    <div className={style.top}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={style.glass} />
                        <input placeholder="Nhập tên tỉnh thành" />
                        <div onClick={() => setLocate(false)}> <p>Đóng</p> <FontAwesomeIcon icon={faXmark} 
                        onClick={() => setLocate(false)}/> </div>
                    </div>
                    <div className={style.bot}>
                        <p className={style.description}>Vui lòng chọn tỉnh, thành phố để biết chính xác giá,
                             khuyến mãi và tồn kho</p>
                        <div className={style.cards}>
                            <> 
                            {Tinh.map((data) => (
                                <div key={data} className={style.card} onClick={() => setSelect(data)}>{data}
                                { select === data &&
                                <div><FontAwesomeIcon icon={faCheck} /></div>
                                }
                                </div>
                            ))}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
export default Locate;