import React from 'react';
import './Footer.css';



export default function Footer() {
    return(
             
         <div className='footer'>
            <div className='footer_inner'>

                <div className='footer_inner1'>

                    <div className='aboutUs'>
                        <div className='aboutUs1'>О нас</div>
                        <div className='aboutUs2'>О Travio</div>
                        <div className='aboutUs2'>Контакты</div>
                        <div className='aboutUs2'>Обратная связь</div>
                    </div>

                    <div className='help'>
                        <div className='aboutUs1'>Помощь</div>
                        <div className='aboutUs2'>Правила использования сайта</div>
                        <div className='aboutUs2'>Частые вопросы</div>
                        <div className='aboutUs2'>Вопросы переработчика</div>
                        <div className='aboutUs2'>Вопросы производителя</div>
                        <div className='aboutUs2'>Задать вопрос</div>
                        <div className='aboutUs2'>Политика конфиденциальности</div>
                    </div>

                    <div className='docs'>
                        <div className='aboutUs1'>Юридические документы</div>
                        <div className='aboutUs2'>Документ</div>
                        <div className='aboutUs2'>Документ</div>
                        <div className='aboutUs2'>Документ</div>
                        <div className='aboutUs2'>Документ</div>
                    </div>

                </div>

                <div className='footer_inner2'>
                <img src='/images/footer_logo.svg'/>
                <div className='rights'>© 2021 Trav.io <div>Все права защищены.</div></div>
                <div className='socials'><img src='/images/footer_telegram.svg'/><img src='/images/footer_instagram.svg'/></div>
                </div>

            </div>
         </div>

       
   
     )
 }