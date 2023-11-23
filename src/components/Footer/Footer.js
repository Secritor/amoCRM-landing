import style from '../Footer/Footer.module.css'
// icons
import phoneLogo from '../../assets/icons/phone.svg';
import whatsappLogo from '../../assets/icons/whatsapp-logo.svg';
import tgLogo from '../../assets/icons/tg-logo.svg';

const Footer = (props) => {
  return (
    <div className={style.container}>
      <div className={style.first}>
        <div className={style.about}>
          <p className={style.title}>О компании</p>
          <div className={style.about_items}>
            <button className={style.item}>Партнёрская программа</button>
            <button className={style.item}>Вакансии</button>
          </div>
          </div>
        <div className={style.meny}>
          <p className={style.title}>Меню</p>
          <div className={style.menu_grid}>
            <button className={style.grid_item}>Расчёт стоимости</button>
            <button className={style.grid_item}>Кейсы</button>
            <button className={style.grid_item}>Услуги</button>
            <button className={style.grid_item}>Благодарственные письма</button>
            <button className={style.grid_item}>Виджеты</button>
            <button className={style.grid_item}>Сертификаты</button>
            <button className={style.grid_item}>Интеграции</button>
            <button className={style.grid_item}>Блог на Youtube</button>
            <button className={style.grid_item}>Наши клиенты</button>
            <button className={style.grid_item}>Вопрос / Ответ</button>
          </div>
        </div>
      </div>

      <div className={style.contacts}>

        <p className={style.title}>Контакты</p>

        <div className={style.contacts_items}>
          <p>+7 555 555-55-55</p>

          <div className={style.contacts_icons}>
            <button> <img src={tgLogo} alt="telegtam-icon" /> </button>
            <button> <img src={phoneLogo} alt="viber-icon" /> </button>
            <button> <img src={whatsappLogo} alt="whatsapp-icon" /> </button>            
          </div>

          <p>Москва, Путевой проезд 3с1, к 902</p>
          
        </div>

        <div className={style.copyrights}>
          <p>©WELBEX 2022. Все права защищены.</p>
          <button>Политика конфиденциальности</button>
        </div>

      </div>

    </div>
  )
};

export default Footer;
