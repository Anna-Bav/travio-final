import React from 'react';
import './News.css';



export default function News() {
    return(
             
         <div className='news'>
            <div className='news_inner'>

                <div className='news_eco'>
                <div className='news_travio'>Новости в мире эко и Travio</div>
                <button className='news_btn'>Смотреть все новости</button>
                </div>

                <div className='news_blocks'>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_1.svg'/></div>
                        <div className='news_title'>Мальдивы исчезнут, если не остановить изменение климата – президент страны</div>
                        <div className='news_text'>Мальдивские острова к концу этого столетия исчезнут, если не остановить изменение климата, заявил президент страны Ибрагим Солих, выступая на климатическом саммите COP26. В понедельник в шотландском Глазго...</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_2.svg'/></div>
                        <div className='news_title'>"Морские сопли" покрыли берега Мраморного моря – фото масштабной катастрофы</div>
                        <div className='news_text'>Экологическая катастрофа произошла у берегов Калифорнии возле города Хантингтон-Бич в воскресенье 3 октября. 477 тыс. литров, а это почти 3 тысячи баррелей...</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_3.svg'/></div>
                        <div className='news_title'>Засуха убивает. Так выглядит мир без воды</div>
                        <div className='news_text'>В результате засухи, вызванной жаркой погодой без дождей, а также хозяйственной деятельностью человека, происходит опустынивание земель планеты. Земля теряет воду, а вместе с ней и жизнь. Около 60 милли...</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_4.svg'/></div>
                        <div className='news_title'>Экозащитники выступают за запрет на запуск воздушных шаров в школах</div>
                        <div className='news_text'>Накануне последних звонков и выпускных вечеров гродненские экозащитники подняли больную тему – массовые запуски шариков в небо, которые часто делают школьники во время прощания со школой. Письма с просьб...</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_5.svg'/></div>
                        <div className='news_title'>Зрелище для туристов и ужас для экологов: как крошится ледник в Гренландии</div>
                        <div className='news_text'>Таяние ледников этого огромного острова влияет на уровень воды в мировом океане и климат во всем мире.
</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                    <div className='news_block'>
                        <div className='news_img'><img src='/images/news_6.svg'/></div>
                        <div className='news_title'>Не только деньги и драгоценности: что находят в пунктах сортировки мусора?</div>
                        <div className='news_text'>Ежегодно в Беларуси образуется более 60 миллионов тонн отходов. И эта цифра постоянно растет. Как в Беларуси из мусора собираются делать деньги, рассказали участники пресс-центре...</div>
                        <div className='news_date'>
                            <div className='news_date1'>09.02.2022</div>
                            <div className='news_date2'>Читать далее</div>
                        </div>
                    </div>

                </div>
            </div>
         </div>

       
   
     )
 }