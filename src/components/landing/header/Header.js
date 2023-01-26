import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';


export default function Header(props) {
    const {popup, setPopup, popupReg, setPopupReg} = props;




    return(
             
         <div className='header'>
           {/* <div className='header_inner'> */}

               <div className='header_inner1'>

               <div className='header_inn1'>

                   <div className='logo'>

                   <img src='/images/logo_green.svg'/>
                   <div className='search'>
                       <div className='input_search'><input type='text' placeholder='Поиск' />  
                       {/* <FaSearch className='imgSearch'/> */}
                       </div>
                       {/* <Link to='/registration'> */}
                        <button className='reg_btn' onClick={() => setPopupReg(!popupReg)}>Зарегистрироваться</button>
                        {/* </Link> */}
                       {/* <Link to='/login'> */}
                        <button className='log_btn' onClick={() => setPopup(!popup)}>Войти</button>
                        {/* </Link> */}
                       </div>
                   </div>

                   <div className='nav'>
                       
                       {/* <div className='navs'> */}
                           <div className='navs'>Как работает</div>
                           <div className='navs'>Список переработчиков</div>
                           <div className='navs'>Рейтинг и статистика</div>
                           <div className='navs'>FAQ</div>
                           <div className='navs'>Новости</div>
                           <div className='navs'>Контакты</div>
                       {/* </div> */}

                   </div>
                   </div>

               </div>

               <div className='header_inner2'>
               <div className='header_inn2'>

                <div className='travio_inner'>
                <div className='travio'>Travio</div>
                   <div className='opis'>Платформа, призванная упростить процесс переработки отходов для предприятий </div>
                    <button className='join'>Присоединиться</button>
                </div>

                <div  className='header_img'>
                <img src='/images/header_img.svg'/>
                </div>


                   
               </div>
            </div>

           </div>
           
            

          
     

       
   
     )
 }