import React, {useState} from 'react';
import './Landing.css';
import Header from '../landing/header/Header';
import Main from '../landing/main/Main';
import Work from '../landing/work/Work';
import Stimul from '../landing/stimul/Stimul';
import Mission from '../landing/mission/Mission';
import Partners from '../landing/partners/Partners';
import News from '../landing/news/News';
import Footer from '../landing/footer/Footer';
import Login from '../login/Login';
import Registration from '../registration/Registration';



export default function Landing(props) {
    const [popup, setPopup] = useState(false);
    const [popupReg, setPopupReg] = useState(false);





    return(
     <div className='landing'>




            {popup && <Login popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>}
            {popupReg && <Registration popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>}
             
           
         <Header popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>
        <Main />
        <Work />
        <Mission />
        <Stimul />
        <News />
        <Partners />
        <Footer />
     </div>
     )
 }