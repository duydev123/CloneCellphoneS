import style from '../Displayimg/Displayimg.module.css'
//
import tempimg from '../../assets/Icon/displayimg.webp'
const Displayimg = ({title}) => {
    return (
      <>
        <div className={style.ctn}>
          <p className={style.title}>{title}</p>
          <div className={style.grid}>
            <a href="" className={style.link}>
              <img src={tempimg} alt="Loading.." />
            </a>
            <a href="" className={style.link}>
              <img src={tempimg} alt="Loading.." />
            </a>
            <a href="" className={style.link}>
              <img src={tempimg} alt="Loading.." />
            </a>
            <a href="" className={style.link}>
              <img src={tempimg} alt="Loading.." />
            </a>
          </div>
        </div>
      </>
    );
}
export default Displayimg;