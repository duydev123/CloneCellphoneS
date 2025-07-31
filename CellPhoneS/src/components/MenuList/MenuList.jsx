import React, { useState } from "react";
// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobileScreen,faLaptop,faHeadphones,faClock,faHouse,faChargingStation,faDesktop,faArrowRotateBack,faTelevision,faArrowRotateBackward,faVolumeHigh,faNewspaper,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
//import component
import Tab from "./Tab/Tab";
//import content list
import { box,box1,box11,box2,box3,box4,box5,box6,box7,box8,box9,box10} from "../../Data/Menulistdata/listdata";
//
const ctn = ["ctn","ctn1","ctn2","ctn3","ctn4","ctn5","ctn6","ctn7"];
import style from '../MenuList/MenuList.module.css';
const MenuList = () => {

  const [showtabidx, setShowtabidx] = useState('');
  return (
    <div className={style.list}>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('1') } onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faMobileScreen} />
          </div>
          <span className={style.text}>Điện thoại, tablet</span>  
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
        { showtabidx === '1' &&
        <Tab ctn={ctn[0]} listdata={box} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('2')} onMouseLeave={() => setShowtabidx('')} >
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <span className={style.text}>Laptop</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
        { showtabidx === '2' &&
        <Tab ctn={ctn[1]} listdata={box1} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('3')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faHeadphones} />
          </div>
          <span className={style.text}>Âm thanh, mic thu âm</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '3' &&
        <Tab ctn={ctn[2]} listdata={box2} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('4')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <span className={style.text}>Đồng hồ, camera</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '4' &&
        <Tab ctn={ctn[0]} listdata={box3} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('5')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <span className={style.text}>Đồ gia dụng</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '5' &&
        <Tab ctn={ctn[0]} listdata={box4} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('6')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faChargingStation} />
          </div>
          <span className={style.text}>Phụ kiện</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '6' &&
        <Tab ctn={ctn[3]} listdata={box5} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('7')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faDesktop} />
          </div>
          <span className={style.text}>PC, màn hình, máy in</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '7' &&
        <Tab ctn={ctn[4]} listdata={box6} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('8')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faTelevision} />
          </div>
          <span className={style.text}>Tivi</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '8' &&
        <Tab ctn={ctn[5]} listdata={box7} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('9')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faArrowRotateBackward} />
          </div>
          <span className={style.text}>Thu cũ đổi mới</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '9' &&
        <Tab ctn={ctn[6]} listdata={box8} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('10')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faArrowRotateBack} />
          </div>
          <span className={style.text}>Hàng cũ</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '10' &&
        <Tab ctn={ctn[3]} listdata={box9} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('11')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faVolumeHigh} />
          </div>
          <span className={style.text}>Khuyến mãi</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '11' &&
        <Tab ctn={ctn[7]} listdata={box10} />
        }
      </div>
      <div className={style.list_ctn} onMouseEnter={() => setShowtabidx('12')} onMouseLeave={() => setShowtabidx('')}>
        <div className={style.left}>
          <div className={style.iconWrap}>
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
          <span className={style.text}>Tin công nghệ</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
         { showtabidx === '12' &&
        <Tab ctn={ctn[3]} listdata={box11} />
        }
      </div>
    </div>
  );
};
export default MenuList;
