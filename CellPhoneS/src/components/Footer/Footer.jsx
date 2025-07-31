import s from '../Footer/Footer.module.css'
//
import { Footercol2,Footercol3} from '../../Data/Menulistdata/footer';
//
const Footer = () => {
    return (
      <>
        <div className={s.ctn}>
          <div className={s.top}>
            <div className={s.col1}>
              <div className={s.title}>Tổng đài hỗ trợ miễn phí</div>
              <p>
                Mua hàng - bảo hành <b>1800.2097</b> (7h30 -22h00)
              </p>
              <p>
                Khiếu nại <b>1800.2063</b> (8h00 - 21h30)
              </p>
              <div className={s.title}>Phương thức thanh toán</div>
              <div className={s.payment}>
                <button>Apple Pay</button>
                <button>VN Pay</button>
                <button>Momo</button>
                <button>One Pay</button>
                <button>M Pos</button>
                <button>Redivo</button>
                <button>ZaloPay</button>
                <button>AlePay</button>
                <button>Fundiin</button>
              </div>
              <div className={s.title}>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</div>
              <div className={s.box}>
                <p>Nhận ngay voucher 10%</p>
                <p>
                  Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
                </p>
              </div>
              <form className={s.sale}>
                <label>Email</label>
                <input
                  placeholder="Nhập email của bạn"
                  type="text"
                  className={s.textinput}
                />
                <label>Số điện thoại</label>
                <input
                  placeholder="Nhập số điện thoại của bạn"
                  type="text"
                  className={s.textinput}
                />
                <div>
                  <input type="checkbox" />
                  <a href="">Tôi đồng ý với điều khoản của CellPhoneS</a>
                </div>
                <button type="submit">ĐĂNG KÝ NGAY</button>
              </form>
            </div>
            <div className={s.col2}>
              <div className={s.title}>Thông tin và chính sách</div>
              {Footercol2.map((Data) => (
                <>
                  <a className={s.link} href="">
                    {Data}
                  </a>
                </>
              ))}
            </div>
            <div className={s.col3}>
              <div className={s.title}>Dịch vụ và thông tin khác</div>
              {Footercol3.map((Data) => (
                <>
                  <a className={s.link} href="">
                    {Data}
                  </a>
                </>
              ))}
              <div className={s.title}>
                Mua sắm dễ dàng - Ưu đãi ngập tràn cùng app CellPhoneS
              </div>
            </div>
            <div className={s.col4}>
              <div className={s.title}>Kết nối với CellPhoneS</div>
              <div className={s.title}>Website Thành Viên</div>
              <p>Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính</p>
              <p>Trung tâm bảo hành uỷ quyền Apple</p>
              <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
              <p>Trang thông tin công nghệ mới nhất</p>
            </div>
          </div>
        </div>
        <div className={s.ctn_2}>
          <div className={s.bot}>
            <div className={s.grid_item}>
              <div>
                <p>Điện Thoại iPhone15</p>
                <p>Điện Thoai IP16</p>
              </div>
              <div>
                <p>iPhone 16 Pro Max</p>
              </div>
            </div>
            <div className={s.grid_item}>
              <div>
                <p>Điện Thoại</p> <p>Điện thoại iPhone</p> <p>Xiaomi</p>
              </div>
              <div>
                <p>Điện thoại Samsung Galaxy</p> <p>Điện thoại OPPO</p>
              </div>
            </div>
            <div className={s.grid_item}>
              <div>
                <p>Laptop</p> <p>Laptop Acer</p> <p>Laptop Dell</p>{" "}
                <p>Laptop HP</p>
              </div>
              <div>
                <p>Tivi</p> <p>Tivi Samsung</p> <p>Tivi Sony</p> <p>Tivi LG</p>
              </div>
            </div>
            <div className={s.grid_item}>
              <div>
                <p>Đồ gia dụng</p> <p>Máy hút bụi gia đình</p> <p>Build PC</p>
              </div>
              <div>
                <p>Lắp Đặt camera</p> <p>Back to school là gì</p>
              </div>
            </div>
          </div>
          <div className={s.footer_end}>
            Công ty TNHH Thương Mại Tổng Hợp HTV- GPĐKKD: 0108075931 cấp tại Sở
            KH & ĐT TP. Hà Nội. Địa chỉ văn phòng: 543 Nguyễn Trãi, phường Thanh
            Xuân Nam. quận Thanh Xuân, Thành phố Hà Nội, Việt Nam. <br/> Điện thoại:
            024.7303.0119.
          </div>
        </div>
      </>
    );
}
export default Footer;