import React from 'react';
import './Main.css';



export default function Main() {
    return(
             
         <div className='main'>
             <div className='main_inner'>

                <div className='main_inner1'>

                    <div className='main_travio'>Travio</div>

                    <div className='mains'>
                        <div className='m1'>
                        <img src='/images/1.svg'/>
                        <div className='mains_text1'>Объединяет в одном месте производителей и переработчиков отходов</div>
                        </div>

                        <div className='m1'>
                        <img src='/images/2.svg'/>
                        <div className='mains_text2'>Позволяет размещать заявки на переработку отходов в “2 клика” и выбрать лучшее предложение</div>
                        </div>
                        <div className='m1'>
                        <img src='/images/3.svg'/>
                        <div className='mains_text3'>Предоставляет гибкую систему критериев при выборе исполнителей</div>
                        </div>
                        <div className='m1'>
                        <img src='/images/4.svg'/>
                        <div className='mains_text4'>Позволит реализовывать продукцию из вторичного  сырья через внутреннюю торговую площадку</div>
                        </div>
                    </div>

                </div> 
                
                <div className='main_inner2'>
                    <img src='/images/main_img.svg'/>
                </div> 

             </div>
           
         </div>

       
   
     )
 }