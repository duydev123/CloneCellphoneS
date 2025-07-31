import React from "react";
import style from '../DisplayItem/Display.module.css'
//import component
import Card from "../Cards/Card";
const Display = ({meta,Data}) =>{
    return (
      <>
        <div className={style.ctn}>
          <div className={style.top}>
            <div className={style.title}>{meta.title}</div>
            <div className={style.btn_ctn}>
              { meta.tags.map((meta) => ( 
              <button>{meta}</button>
             )) }
            </div>
          </div>
          <div className={style.cards} >
            <Card Data={Data}/>
          </div>
        </div>
      </>
    );
};
export default Display;