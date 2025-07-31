//import components
import Header from '../components/Header/Header'
import Display from '../components/DisplayItem/Display'
import MenuList from '../components/MenuList/MenuList';
import Displayimg from '../components/Displayimg/Displayimg';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import css module
import style from "./Home.module.css";
//
import right1 from '../assets/Homepage/right1.png'
import right2 from "../assets/Homepage/right2.png";
import right3 from "../assets/Homepage/right3.png";
//
import phukien from '../assets/Icon/phukien.webp'
import phukienpc from '../assets/Icon/phukienpc.webp'
import docu from '../assets/Icon/docu.webp'
//
import { useState } from 'react';
//
import pic1 from '../assets/Homepage/pic1.png'
import pic2 from "../assets/Homepage/pic2.webp";
import pic3 from "../assets/Homepage/pic3.webp";
import pic4 from "../assets/Homepage/pic4.png";
import pic5 from "../assets/Homepage/pic5.webp";
import pic6 from "../assets/Homepage/pic6.webp";
import pic7 from "../assets/Homepage/pic7.webp";
// data
import { PhoneData, PhoneMeta } from '../Data/PhoneData/Phone';
import { LaptopData, LaptopMeta } from '../Data/PhoneData/laptop';
import { PCData, PCMeta } from '../Data/PhoneData/pc';
import { TabletData, TabletMeta } from '../Data/PhoneData/Tablet';
import { HeadphoneData, HeadphoneMeta } from '../Data/PhoneData/Headphone';
import { SmartwatchData, SmartwatchMeta } from '../Data/PhoneData/Watch';
import { HomeApplianceData, HomeApplianceMeta } from '../Data/PhoneData/Homeitem';
import { TVData, TVMeta } from '../Data/PhoneData/Tivi';
import {Phoneitem , Pcitem , Olditem} from '../Data/Menulistdata/Home'
//Accessory
import DisplayCard from '../components/DisplayCard/Displaycard';
const Home = () =>{
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
      if (index < 6) setIndex(index + 1);
    };

    const prevSlide = () => {
      if (index > 0) setIndex(index - 1);
    };

    return (
      <>
        <Header />
        <div className={style.ctn}>
          <div className={style.head}>
            <MenuList />
            <div className={style.middle}>
              <div className={style.image_container}>
                <div
                  className={style.image}
                  style={{ transform: `translateX(-${index * 805}px)` }}
                >
                  <img src={pic1} alt="loading img.." />
                  <img src={pic2} alt="loading img.." />
                  <img src={pic3} alt="loading img.." />
                  <img src={pic4} alt="loading img.." />
                  <img src={pic5} alt="loading img.." />
                  <img src={pic6} alt="loading img.." />
                  <img src={pic7} alt="loading img.." />
                </div>
                <div className={style.btn_slide}>
                  <button onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
              <div className={style.btn_ctn}>
                <button onClick={() => setIndex(1)}>
                  Galaxy Z7 Series <br /> mở bán quà khủng
                </button>
                <button onClick={() => setIndex(1)}>
                  IPHONE 16 PRO MAX <br /> Mua ngay
                </button>
                <button  onClick={() => setIndex(2)}>
                  Oppo RENO14 <br /> Mua ngay
                </button>
                <button onClick={() => setIndex(3)}>
                  REDMI PAD2 <br />
                  Giá chỉ từ 5.39 triệu
                </button>
                <button onClick={() => setIndex(4)}>
                  MUA ĐIỆN THOẠI <br />
                  Tặng combo voucher
                </button>
                <button onClick={() => setIndex(5)}>
                  HUEWEI MATEPAD <br />
                  Giá chỉ 6.36 triệu
                </button>
                <button onClick={() => setIndex(6)}>
                  TIVI XIAOMI 2026 <br />
                  Giá cực ưu đãi
                </button>
                <button onClick={() => setIndex(7)}>
                  ACER NITRO V <br />
                  Giá ưu đãi
                </button>
              </div>
            </div>
            <div className={style.right}>
              <div>
                <img src={right1} alt="loading.."></img>
              </div>
              <div>
                <img src={right2} alt="loading.."></img>
              </div>
              <div>
                <img src={right3} alt="loading.."></img>
              </div>
            </div>
          </div>
          <Display meta={PhoneMeta} Data={PhoneData} />
          <Display meta={LaptopMeta} Data={LaptopData} />
          <Display meta={PCMeta} Data={PCData} />
          <Display meta={TabletMeta} Data={TabletData} />
          <Display meta={HeadphoneMeta} Data={HeadphoneData} />
          <Display meta={SmartwatchMeta} Data={SmartwatchData} />
          <Display meta={HomeApplianceMeta} Data={HomeApplianceData} />
          <Display meta={TVMeta} Data={TVData} />
          <DisplayCard name="PHỤ KIỆN" img={phukien} CardData={Phoneitem} />
          <DisplayCard
            name="LINH KIỆN MÁY TÍNH"
            img={phukienpc}
            CardData={Pcitem}
          />
          <DisplayCard name="HÃNG CŨ" img={docu} CardData={Olditem} />
          <Displayimg title="ƯU ĐÃI SINH VIÊN" />
          <Displayimg title="ƯU ĐÃI THANH TOÁN" />
          <Displayimg title="CHUYÊN TRANG THƯƠNG HIỆU" />
          <Displayimg title="TIN CÔNG NGHỆ" />
        </div>
        <Footer />
      </>
    );
}
export default Home;