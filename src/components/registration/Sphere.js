import React from "react";
import "./Sphere.css";
import Requisites from './Requisites';
import Contacts from './Contacts';


export default function Sphere(props) {
    const {sphere, requisites, contacts} = props
  return (
      <div className='selectFields'>

      {requisites && <Requisites/>}
      {contacts && <Contacts/>}
      {sphere && <div className='select'>

       
          {/* <div className='sphereText'>Сфера деятельности</div> */}

          <div className='selectSphere'>
            <div className='customer'>Производитель</div>
            <div className='processor'>Переработчик</div>


            {/* <select name="sel" id="Spec" style={{width:"100%", border:'none', borderBottom:'1px solid #A8A8A8', color:'#A8A8A8'}}>
                <option></option>
                <option value="processor">Переработчик отходов</option>
                <option value="customer">Заказчик</option>
          </select> */}

          </div>

          {/* <div className='sphereText'>Категория отходов</div> */}

          {/* <div><select name="sel" id="Spec" style={{width:"100%", border:'none', borderBottom:'1px solid #A8A8A8', color:'#A8A8A8'}}>
                <option></option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
                <option value="cardboard">Картон фильтрованный отработанный при изготовлени...</option>
          </select>
          </div> */}

        


      </div>}
      </div>

    
    
  );
}


