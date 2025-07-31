import style from '../DisplayCard/Displaycard.module.css'
//
import React from 'react'
//
const DisplayCard = ({CardData,name,img}) => {
    return(
        <>
            <div className={style.ctn}>
                <p className={style.title}>{name}</p>
                <div className={style.grid}>
                    {
                        CardData.map((data) => (
                            <a href="" className={style.griditem}>
                                <img src={img} alt='Loading..'></img>
                                <p>{data}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default DisplayCard;