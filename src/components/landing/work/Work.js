import React from 'react';
import './Work.css';



export default function Work() {
    return(
             
         <div className='work'>
             <div className='work_inner'>

                <div className='work_inner1'>
                    Преимущества Travio 
                </div>
                <div className='work_inner2'>

                    <div className='work_innerBenefit1'>

                        <div className='header1'>
                            <img src='/images/head1.svg'/>
                            <div className='header1_head'>Заголовок</div>
                            <div className='header1_text'>Объединяет в одном месте производителей и переработчиков отходов</div>
                        </div>

                        <div className='header1'>
                            <img src='/images/head2.svg'/>
                            <div className='header1_head'>Заголовок</div>
                            <div className='header1_text'>Позволяет размещать заявки на переработку отходов в “2 клика” и выбрать лучшее предложение</div>
                        </div>

                        <div className='header1'>
                            <img src='/images/head3.svg'/>
                            <div className='header1_head'>Заголовок</div>
                            <div className='header1_text'>Позволит реализовывать продукцию из вторичного  сырья через внутреннюю торговую площадку</div>
                        </div>

                    </div>

                    <div className='work_innerBenefit2'>

                        <div className='header2'>
                            <img src='/images/head4.svg'/>
                            <div className='header1_head'>Заголовок</div>
                            <div className='header1_text'>Предоставляет гибкую системую критериев при выборе исполнителей</div>
                        </div>

                        <div className='header2'>
                            <img src='/images/head5.svg'/>
                            <div className='header1_head'>Заголовок</div>
                            <div className='header1_text'>Накапливайте бонусные баллы и получайте скидки на экотовары у наших партнёров</div>
                        </div>

                    </div>



                    {/* <div className='simply'>
                        <div className='simply_btns'>
                        <button className='simply_btn1'>Размещение заявки</button>
                        <button className='simply_btn2'>Отклики</button>
                        <button className='simply_btn3'>Выбор предложения</button>
                        </div>
                        <div className='this_simply'>Это просто</div>
                        <div className='simply_text'>Разместите заявку на переработку отходов и выберите наиболее удобное и выгодное для вас предложение.</div>
                        <button className='simply_join'>Присоединиться</button>
                    </div>

                    <div className='work_img'> <img src='/images/work_img.svg'/></div> */}

                </div>

            </div>
         </div>

       
   
     )
 }