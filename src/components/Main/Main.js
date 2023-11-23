import style from '../Main/Main.module.css'

const Main = (props) => {
  return (
    <div className={style.content}>
      <div className={style.content_wrapper}>
        <div className={style.circle_red}></div>
      
        <div className={style.left_side}>
          <div className={style.left_side_title}>
            <h1>Зарабатывайте больше <span className={style.styled_fonts}><h1>с WELBEX</h1></span></h1>
            <p>Развиваем и контролируем продажи за вас</p>
          </div>
        </div>

        <div className={style.right_side}>
          <div className={style.right_side_title}>
            
            <h3>Вместе с <span className={style.styled_fonts}>бесплатной <br /></span> <span className={style.styled_fonts}>консультацией</span> мы дарим:</h3>
          
            <div className={style.grid}>
              <div className={style.grid_item}>
                <h3></h3>
                <p>30 готовых решений</p>
              </div>

              <div className={style.grid_item}>
                <h3></h3>
                <p>с показателями вашего бизнеса</p>
              </div>

              <div className={style.grid_item}>
                <h3></h3>
                <p>отдела продаж и CRM системы</p>
              </div>

              <div className={style.grid_item}>
                <h3></h3>
                <p>использования CRM</p>
              </div>
            </div>
          </div>

            <button className={style.right_side_btn}>Получить консультацию</button>
          </div>
      </div>
    </div>
  )
};

export default Main;
