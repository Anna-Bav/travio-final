import React from 'react';
import './Main.css';



export default function Main() {
    return(
             
         <div className='main'>
             <div className='main_inner'>

                <div className='main_inner1'>

                    <div className='main_travio'>Как работает Travio</div>

                    <div className='mains'>
                        <div className='m1'>
                        <div className='main_number'>1</div>
                        <div className='mains_text1'>
                            <div className='main_textHeader'>Размести заявку</div>
                            <div className='mainText'>Разместите заявку на переработку отходов и выберите подходящее для вас предложение</div>
                        </div>
                        </div>

                        <div className='m1'>
                        <div className='main_number'>2</div>
                        <div className='mains_text2'>
                            <div className='main_textHeader'>Получи отклик</div>
                            <div className='mainText'>В оперативный срок получите отклик от перерабатывающих организаций</div>
                        </div>
                        </div>
                        <div className='m2'>
                        <div className='main_number'>3</div>
                        <div className='mains_text3'>
                            <div className='main_textHeader'>Выберите лучшее предложение</div>
                            <div className='mainText'>Выберите наиболее удобное и выгодное предложение по заданным вами критериям</div>
                        </div>
                        </div>
                        {/* <div className='m1'>
                        <img src='/images/4.svg'/>
                        <div className='mains_text4'>Позволит реализовывать продукцию из вторичного  сырья через внутреннюю торговую площадку</div>
                        </div> */}
                    </div>

                </div> 
                
                {/* <div className='main_inner2'>
                    <img src='/images/main_img.svg'/>
                </div>  */}

             </div>
           
         </div>

       
   
     )
 }