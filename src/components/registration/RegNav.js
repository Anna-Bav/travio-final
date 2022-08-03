import React, {useState} from 'react';
import './RegNav.css'



export default function RegNav(props){
   
    const {setSphere, setRequisites, setContacts} = props
    const [style1, setStyle1] = useState("regNavBtn");
    const [style2, setStyle2] = useState("regNavBtn");
    const [style3, setStyle3] = useState("regNavBtn");

    function setSpherePage(){
        setSphere(true)
        setRequisites(false)
        setContacts(false)
    }
    function setRequisitesPage(){
        setSphere(false)
        setRequisites(true)
        setContacts(false)
    }
    function setContactsPage(){
        setSphere(false)
        setRequisites(false)
        setContacts(true)

    }

    const changeStyle1 = () => {
        console.log("you just clicked");  
        setStyle1("regNavBtnClick");
      };
      const changeStyle2 = () => {
        console.log("you just clicked");  
        setStyle2("regNavBtnClick");
      };
      const changeStyle3 = () => {
        console.log("you just clicked");  
        setStyle3("regNavBtnClick");
      };
   
    return(

        

        <div className='regNav'>
            <button className={style1} onClick={() => {setSpherePage();changeStyle1();}}>Сфера деятельности</button>
            <button className={style2} onClick={() => {setRequisitesPage();changeStyle2();}}>Реквизиты</button>
            <button className={style3} onClick={() => {setContactsPage();changeStyle3();}}>Контактные лица и адреса</button>
        </div>



    )
}



    
    
    
  