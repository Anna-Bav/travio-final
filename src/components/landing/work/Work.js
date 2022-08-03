import React from 'react';
import './Work.css';



export default function Work() {
    return(
             
         <div className='work'>
             <div className='work_inner'>

                <div className='work_inner1'>
                    <div className='work_inner1_inn'>Как работает Travio</div>
                </div>
                <div className='work_inner2'>

                    <div className='simply'>
                        <div className='simply_btns'>
                        <button className='simply_btn1'>Размещение заявки</button>
                        <button className='simply_btn2'>Отклики</button>
                        <button className='simply_btn3'>Выбор предложения</button>
                        </div>
                        <div className='this_simply'>Это просто</div>
                        <div className='simply_text'>Разместите заявку на переработку отходов и выберите наиболее удобное и выгодное для вас предложение.</div>
                        <button className='simply_join'>Присоединиться</button>
                    </div>

                    <div className='work_img'> <img src='/images/work_img.svg'/></div>

                </div>

            </div>
         </div>

       
   
     )
 }