import React from "react";
//
import style from '../../components/Cards/Card.module.css'
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
//
// array object

const Card = ({Data}) => {
  return (
    <>
      {Data.map((product) => (
        <div className={style.card}>
          <a className={style.link}>
            <div className={style.tags}>
              <div className={style.tag1}>Giảm {product.sale}%</div>
              <div className={style.tag2}>Trả góp 0%</div>
            </div>
            <div className={style.img_ctn}>
              <img src={product.image} alt="Loading.." />
            </div>
          </a>
          <div className={style.info}>
            <div className={style.name}>
              {product.name}
            </div>
            <div className={style.price}>
              <p>{product.price}</p>
              <p>{product.baseprice}</p>
            </div>
            <div className={style.member}>Smember giảm đến {product.member}</div>
            <div className={style.student}>S-student giảm thêm {product.student}</div>
            <div className={style.description}>
              {product.description}
            </div>
            <div className={style.rating}>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <p> 4.9</p>
              </div>
              <button>
                <FontAwesomeIcon icon={faHeart} />
                <p>Yêu Thích</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
