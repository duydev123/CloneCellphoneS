import React from "react";
//
import style from '../Tab/Tab.module.css'
//

const Tab = ({ctn,listdata}) => {
    return (
      <>
          <div className={style[ctn]}>
            {listdata.map((data) => (
              <>
                <div className={style.box}>
                  <div className={style.title}>{data.title} </div>
                  {data.content.map((ctn) => (
                    <div className={style.line}>{ctn}</div>
                  ))}
                </div>
              </>
            ))}
          </div>
      </>
    );
}
export default Tab;