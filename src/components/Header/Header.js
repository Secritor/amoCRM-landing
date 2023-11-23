import style from '../Header/Header.module.css'


// icons
import logo from '../../assets/icons/logo_welbex.svg';
import phoneLogo from '../../assets/icons/phone.svg';
import whatsappLogo from '../../assets/icons/whatsapp-logo.svg';
import tgLogo from '../../assets/icons/tg-logo.svg';


const Header = () => {


  return (
    <div className={style.header}>
      <div className={style.circle_purple}></div>
      <div className={style.header_items}>

        <div className={style.header_logo}>
            <img src={logo} alt="logo-icon"/>
            <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <div className={style.header_navigations}>

            <button><p>Услуги</p></button>
            <button><p>Виджеты</p></button>
            <button><p>Интеграции</p></button>
            <button><p>Кейсы</p></button>
            <button><p>Сертификаты</p></button>

        </div>
        <div className={style.header_links}>

            <p>+7 555 555-55-55</p>
            <div className={style.header_links_icon}>
                <button>
                    <img src={tgLogo} alt="telegram-icon"/>
                </button>
                <button>
                    <img src={phoneLogo} alt="viber-icon"/>
                </button>
                <button>
                    <img src={whatsappLogo} alt="whatsapp-icon"/>
                </button>
            </div>
            

        </div>

      </div>

    </div>
  )
};

export default Header;
