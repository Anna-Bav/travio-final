import React from 'react';
import './Mission.css';



export default function Mission() {
    return(
             
         <div className='mission'>

             <div className='mission_1'>
                 <div className='mission_1_inner'>
                 <div className='our_mission'>Наша миссия</div>
                 <div className='mission_text'>Это воспитание среди пользователей TRAV.IO чувства ответственности к окружающей среде и экологии.</div>
                 <button className='mission_btn'>Присоединиться</button>
                 </div>
             </div>

             <div className='mission_2'>
             <img src='/images/mission.png'/>
             </div>



           
         </div>

       
   
     )
 }