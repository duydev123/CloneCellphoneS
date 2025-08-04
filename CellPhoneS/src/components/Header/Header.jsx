import style from './Header.module.css'
// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faFile,faPhone,faMobile } from '@fortawesome/free-solid-svg-icons';
import { faTable,faAngleDown ,faLocationPin ,faCartShopping,faCircleUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
// import component
import ListDisplay from '../ListDisplay/ListDisplay';
import SignBoard from '../Signboard/SignBoard';
import Locate from '../Locate/Locate';
// useState
import React from 'react';
import { useState } from 'react';
const Header = () => {
    const [showmenu,setShowmenu] = useState(false);
    const [signboard, setSignboard] = useState(false);
    const [locate,setLocate] = useState(false);
    const [select , setSelect] = useState('Hồ Chí Minh');
    //html
    return (
      <>
        <div className={style.main_ctn}>
          <div className={style.top}>
            <div className={style.textWrapper}>
              <p className={style.textmove}>
                *Sản phẩm Chính Hãng - Xuất VAT đầy đủ * Giao nhanh - Miễn phí
                cho đơn 300k * Thu cũ giá ngon - lên đời tiết kiệm *Sản phẩm
                Chính Hãng - Xuất VAT đầy đủ * Giao nhanh - Miễn phí cho đơn
                300k * Thu cũ giá ngon - lên đời tiết kiệm
              </p>
            </div>
            <div className={[style.topnav,style.top_ctn].join(" ")}>
              <FontAwesomeIcon icon={faHouse} />
              <p>Cửa hàng gần bạn</p>
            </div>
            <div className={[style.topnav,style.top_ctn].join(" ")}>
              <FontAwesomeIcon icon={faFile} />
              <p>Tra cứu đơn hàng</p>
            </div>
            <div className={[style.topnav,style.top_ctn].join(" ")}>
              <FontAwesomeIcon icon={faPhone} />
              <p>1800 2097</p>
            </div>
            <div className={[style.topnav,style.top_ctn].join(" ")}>
              <FontAwesomeIcon icon={faMobile} />
              <p>Tải ứng dụng</p>
            </div>
          </div>
          <div className={style.bot}>
            <p className={style.title}>Clone CellphoneS</p>
            <p className={style.logo}>S</p>
            <div className={[style.toplist, style.bot_ctn].join(" ")} onClick={() => setShowmenu(true)}>
              <FontAwesomeIcon icon={faTable} />
              <p className={style.bot_text}>Danh mục</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={[style.locate, style.bot_ctn].join(" ")} onClick={() => setLocate(true)}>
              <FontAwesomeIcon icon={faLocationPin} />
              <p className={style.bot_text}>{select} </p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={[style.search_bar, style.bot_ctn].join(" ")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input placeholder="Bạn muốn mua gì hôm nay?"></input>
            </div>
            <div className={[style.locate_m, style.bot_ctn].join(" ")} onClick={() => setLocate(true)}>
              <FontAwesomeIcon icon={faLocationPin} />
              <p className={style.bot_text}>Xem giá tại <br/>{select} </p>
            </div>
            <div className={[style.stock, style.bot_ctn].join(" ")}>
              <p className={style.bot_text}>Giỏ hàng</p>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className={[style.stock_m, style.bot_ctn].join(" ") } onClick={() => setSignboard(true)}>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div
              className={[style.login, style.bot_ctn].join(" ")}
              onClick={() => {
                setSignboard(true);
              }}
            >
              <p>Đăng nhập</p>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
          </div>
        </div>
        <ListDisplay showmenu={showmenu} setShowmenu={setShowmenu} />
        <SignBoard signboard={signboard} setSignboard={setSignboard} />
        <Locate
          locate={locate}
          setLocate={setLocate}
          select={select}
          setSelect={setSelect}
        />
      </>
    );
}
export default Header;