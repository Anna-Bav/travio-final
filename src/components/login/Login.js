import React, {useState, useEffect} from 'react';
import './Login.css';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/user';
import {Link} from 'react-router-dom';


export default function Login(props) {

    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    // const [emailMessage, setEmailMessage] = useState('Введите e-mail, указанный при регистрации')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const dispatch = useDispatch()


    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [emailError, passwordError])


        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неверный e-mail');
        } else {
            setEmailError('')
        }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8 || e.target.value.length > 14) {
                setPasswordError('Пароль должен быть не менее 8 и не более 14 символов')
                if(!e.target.value) {
                    setPasswordError('Пароль не может быть пустым')
                }
            } else {
                setPasswordError ('')
            }
        }
        

        const blurHandler = (e) => {
            switch (e.target.name) {
              case 'email':
                  setEmailDirty(true)  
                  break
             case 'password':
                 setPasswordDirty(true)
                 break
            } 
         }
        

    
   return(
       <div className='login'>
           <div className='login_inner'>
           {/* <div className='logo'>
               <Link to='/landing'><img src='/images/logo.svg'/></Link>
               </div> */}
            
               <div className='login_inner1'>
               <div className='login_title'>Авторизация в TRAV.IO</div>
               <div className='mail_adress'>Адрес электронной почты</div>
               <input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} className='input_mail' name='email' type='email'/>
               {(emailDirty && emailError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{emailError}</div>}

               <div className='mail_adress'>Пароль</div>
               <input  onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)}  className='input_password' name='password'  type='password'/>
               {(passwordDirty && passwordError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>}


               <div className='rememberMe'>
                    <div className='remember'><input className='check' type='checkbox'/>Запомнить меня</div>
                    <div className="forget">Забыли пароль?</div>
               </div>

               {/* {(emailDirty && emailError) && <div style={{color:'#FE1313', fontSize:'12px'}}>{emailError}</div>}
               {(passwordDirty && passwordError) && <div style={{color:'#FE1313', fontSize:'12px'}}>{passwordError}</div>} */}

               <button disabled={!formValid} onClick={() => dispatch(login(email,password))}  className='login_btn'>Войти</button>



               </div>

               <div className='login_inner2'>
               <div className='reg_text'>Еще нет аккаунта? Зарегистрируйтесь в TRAV.IO!</div>
               <button className='reg_button'>Зарегистрироваться</button>
               </div>


           {/* <div className='login_travio'> */}
              

               {/* <input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} className='input_mail' name='email' type='email' placeholder='E-mail'/> */}

               {/* {(emailMessage) && <div style={{color: 'rgb(196, 196, 196, 0.5)', fontSize:'10px'}}>{emailMessage}</div>} */}
           {/* {(emailDirty && emailError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{emailError}</div>} */}

           
               {/* <input  onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)}  className='input_password' name='password'  type='password' placeholder='Пароль'/>

               {(passwordDirty && passwordError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>} */}

               {/* <div className='rememberMe'>
                    <div><input type='checkbox'/>Запомнить меня</div>
                    <div>Забыли пароль?</div>
               </div> */}
               
                   {/* <button disabled={!formValid} onClick={() => dispatch(login(email,password))}  className='login_btn'>Войти</button> */}
               
           {/* </div> */}

           {/* <div className='reg_travio'>
               <div className='reg_text'>Еще нет аккаунта?
              Зарегистрируйтесь в TRAV.IO!</div>
               <button className='reg_btn'>Зарегистрироваться</button>
           </div> */}
           </div>
       </div>
   ) 
}