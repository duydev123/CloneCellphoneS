//import
import React from "react";
// import conponents
import MenuList from "../MenuList/MenuList";
//import css
import style from '../ListDisplay/ListDisplay.module.css'
const ListDisplay = ({showmenu , setShowmenu}) => {
    return (
      <>
        {showmenu && (
          <div className={style.menu_ctn} onClick={() => setShowmenu(false)}>
            <div className={style.menu} onClick={(e) => e.stopPropagation()}>
              <MenuList />
            </div>
          </div>
        )}
      </>
    );
}
export default ListDisplay;