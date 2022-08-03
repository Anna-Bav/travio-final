import React, {useState, useEffect} from 'react';
import './Registration.css';
import {Navlink, Redirect, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registration} from '../../actions/user';
import RegTitle from './RegTitle';
import RegNav from './RegNav';
import Sphere from './Sphere';





export default function Registration()  {
    const [step, setStep] = useState('1')
    
   
    
    const Step1 = () => {
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
        const [confirmPassword, setConfirmPassword] = useState("")
        const [confPassword, setConfPassword] = useState("")
        const [emailDirty, setEmailDirty] = useState(false)
        const [passwordDirty, setPasswordDirty] = useState(false)
        const [confirmPasswordBool, setConfirmPasswordBool] = useState(false)
        const [emailError, setEmailError] = useState('Емейл не может быть пустым')
        const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
        const [formValid, setFormValid] = useState(false)
        const dispatch = useDispatch()
        const [colorType, setColorType] = useState('#333333');
        const [colorLatin, setColorLatin] = useState('#333333');
        const [colorNumber, setColorNumber] = useState('#333333');
        const [colorSpecial, setColorSpecial] = useState('#333333');
        const [colorLower, setColorLower] = useState('#333333');
        const [colorUpper, setColorUpper] = useState('#333333');
        const [colorCircle1, setColorCircle1] = useState('#333333');
        const [colorCircle2, setColorCircle2] = useState('#333333');
        const [colorCircle3, setColorCircle3] = useState('#333333');
        const [colorCircle4, setColorCircle4] = useState('#333333');
        const [colorCircle5, setColorCircle5] = useState('#333333');
        const [colorCircle6, setColorCircle6] = useState('#333333');
        const [colorCircle, setColorCircle] = useState('#333333');

        const [passwordConfirm, setPasswordConfirm] = useState();



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
            setEmailError('Некорректный email');
            if (e.target.value.length === 0) {
                setEmailError('Email не может быть пустым');
            }
        } else {
            setEmailError('')
        }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8 || e.target.value.length > 14) {
                setPasswordError('Некорректный пароль')
                setColorType('red');
                setColorCircle1('red');
                if(!e.target.value) {
                    setPasswordError('Пароль не может быть пустым')
                }
            } else {
                setPasswordError ('')
                setColorType('green');
                setColorCircle1('green')
            }

       const regexp1 = /([a-zA-Z])/;
            if (regexp1.test(e.target.value)) {
                // console.log('1', regexp1.test(e.target.value))
                setColorLatin('green')
                setColorCircle2('green')
            } else {
                // console.log('2', regexp1.test(e.target.value))
                setColorLatin('red')
                setColorCircle2('red')
                setPasswordError('Некорректный пароль')
            }

             
            const regexp2 = /([0-9])/;
            if (regexp2.test(e.target.value)) {
               setColorNumber('green')
               setColorCircle3('green')
            } else {
               setColorNumber('red')
               setColorCircle3('red')
               setPasswordError('Некорректный пароль')
            }

            const regexp3 = /([$&+,:;=?@#|'<>.^*()%!-])/;
            if (regexp3.test(e.target.value)) {
               setColorSpecial('green')
               setColorCircle4('green')
            } else {
               setColorSpecial('red')
               setColorCircle4('red')
               setPasswordError('Некорректный пароль')
            }

            const regexp4 = /([a-z])/;
            if (regexp4.test(e.target.value)) {
               setColorLower('green')
               setColorCircle5('green')
            } else {
               setColorLower('red')
               setColorCircle5('red')
               setPasswordError('Некорректный пароль')
            }

            const regexp5 = /([A-Z])/;
            if (regexp5.test(e.target.value)) {
                setColorUpper('green')
                setColorCircle6('green')
            } else {
                setColorUpper('red')
                setColorCircle6('red')
                setPasswordError('Некорректный пароль')
            }
            if (e.target.value.length === 0) {
                console.log('length')
                setPasswordError("Пароль не может быть пустым")
            }
        }
          
         
            const passwordConfirmation = (e) => {
                if (password != e.target.value) {
                    setConfirmPassword('Пароли не совпадают')
                    setConfirmPasswordBool(true)
                    setConfPassword(e.target.value)
                } else {
                    setConfPassword(e.target.value)
                    setConfirmPasswordBool(false)
                    setConfirmPassword('')
                }
                // console.log (password)
                // console.log (e.target.value)
                // if (e.target.value == password) {
                //     setPasswordConfirm('')
                // } else {
                //     setPasswordConfirm('Пароли не совпадают')
                }
                
                   
        const blurHandler = (e) => {
            if (password != confPassword) {
                setConfirmPassword('Пароли не совпадают')

            } else {
                setConfirmPassword('')
            }
            switch (e.target.name) {
                case 'email':
                    setEmailDirty(true)
                    break
                case 'password':
                    setPasswordDirty(true)
                    break
                case 'confPassword':
                    setConfirmPasswordBool(true)
                    console.log('confPass')
                    break
            }
        }
        //     console.log('ann')
        //     switch (e.target.name) {
        //       case 'email':
        //           setEmailDirty(true)  
        //           break
        //      case 'password':
        //          setPasswordDirty(true)
        //          break
        //     } 
        //  }
     
        return (
            <div className='registration'>
                <div className='registration_inner'>

                <div className='reg_inner1'>
              Регистрация нового пользователя
              </div>    

            <div className='reg_inner2'>
              <div className='mail_adress'>Адрес электронной почты</div>
              
              <input 
               type='email' 
               onChange = {emailHandler} 
               value={email}
               onBlur = {blurHandler} 
               className="reg_mail" 
               name='email' />
              {(emailDirty && emailError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{emailError}</div>}
             
              <div className='mail_adress'>Пароль</div>
             
              <input
               type='password'
               onChange = {e => passwordHandler(e)}
               value={password} 
               onBlur = {e => blurHandler(e)} 
               className="reg_password" 
               name='password'   />
              {(passwordDirty) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>}
              

              <div className='mail_adress'>Подтвердить пароль</div>
             
              <input 
               type='password'
               onChange = {e => passwordConfirmation(e)}  
               onBlur = {e => blurHandler(e)} 
               value={confPassword}                          
               className="reg_password" 
               name='confPassword'   />
              {(confirmPasswordBool && confirmPassword) && <div style={{color:'#EF3125', fontSize:'10px'}}>{confirmPassword}</div>}

              

              <div className='pass_must'>
                  <div className='must_title'>Пароль должен:</div>
                  
                  {/* <div >
                      <div className='visualBtn' 
                      style={{position:"relative",
                        width: "10px",
                        height: "10px",
                        border: "1px solid black",
                        borderRadius: "50%"}}>
                      <svg style={{width:"10px", height:"10px", position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                          <path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/>
                  <path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/>
                  </svg>
                  </div >содержать не менее 8 и не более 14 символов;</div> */}
                  <div className='must_text' style={{color:colorType}}>
                      <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle1,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                        содержать не менее 8 и не более 14 символов;
                    </div>

                  <div className='must_text' style={{color:colorLatin}}>
                  <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle2,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                      состоять из букв латинского алфавита (aA-zZ);
                    </div>

                  <div className='must_text' style={{color:colorNumber}}>
                  <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle3,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                      содержать не менее одной арабской цифры (0-9);
                    </div>

                  <div className='must_text' style={{color:colorSpecial}}>
                  <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle4,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                      содержать один из спецсимволов [!] [@] [#] [$] [%] [^] [&] [*];
                      </div>

                  <div className='must_text' style={{color:colorLower}}>
                  <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle5,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                      не менее одной латинской буквы в нижнем регистре;
                    </div>

                  <div className='must_text' style={{color:colorUpper}}>
                  <div style={{width: "10px", 
                                   height: "10px", 
                                   borderColor: colorCircle6,
                                   borderWidth: "1px",
                                   borderStyle: 'solid',
                                   borderRadius: "50%"}}>
                        </div>
                      не менее одной латинской буквы в верхнем регистре.
                    </div>

              </div>
              
              <div className='rules'>
                  <div>Продолжая, я подтверждаю, что я ознакомился с </div>
                  <div><a href='#'>Правилами пользования сервисом</a>, <a href='#'>Политикой конфидитенциальности</a></div>
              </div>
              
              {/* <button disabled={!formValid} onClick={() => registration(email,password)} className='registr_btn'>Продолжить</button> */}
             <ButtonVar step={step}/>
              </div>

            </div>
          
       </div>
    )                                                       
}

const Step2 = () => {
    const [sphere, setSphere] = useState(true)
    const [requisites, setRequisites] = useState(false)
    const [contacts, setContacts] = useState(false)
 
    return (
        <div  className='registration'>




            <div className='registration_inner2'>
                <div className='registration_inner2_inner'>
                    <RegTitle />
                    {/* <div>Регистрация нового пользователя</div> */}

                    <RegNav setSphere={setSphere} setRequisites ={setRequisites} setContacts={setContacts} />

                    {/* <div>
                    <button >Сфера деятельности</button>
                    <button >Реквизиты</button>
                    <button >Контактные лица и адреса</button>
                    </div> */}


                    <Sphere sphere={sphere} requisites={requisites} contacts={contacts} />


            {/* <select name="sel" id="Spec" style={{width:"100%", backgroundColor:"white", marginBottom:"20px", marginTop:"20px"}}>
                <option disabled>Выберите пользователя</option>
                <option value="Чебурашка">Разработчик</option>
                <option value="Чебурашка">Заказчик</option>
            </select> */}


            <ButtonVar step={step}/>

                </div>
            </div>
        </div>
    )
}


const Step3 = () => {
    return (
        <div  className='registration'>
            

            <ButtonVar step={step}/>
            
            
        </div>
    )
}

function StepperRegBtn() {


    if ((Number(step)) < 3) {
        setStep(`${String((Number(step) + 1))}`)
    } else {
        setStep('4')
    }


    console.log(step)
}

function StepperReg(props) {
    switch (props.step) {
        case '1':
            return <Step1/>
            break
        case '2':
            return <Step2/>
            break
        case '3':
            return <Step3/>
            break
        case '4':
            return <Redirect
                to={{
                    pathname: "/",

                }}
            />
            break
    }
}

function ButtonVar() {
    if((Number(step)) == 3){
        return <button onClick={StepperRegBtn}>Завершить регистрацию</button>
    }else {
        return <button className='registr_btn' onClick={StepperRegBtn}>Продолжить</button>
    }
}


return (
    <div>

        <StepperReg step={step}/>
         {/* <ButtonVar step={step}/>  */}
        {/*<button onClick={StepperRegBtn}>Следующая страница</button>*/}
    </div>
);



}