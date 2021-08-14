import React from 'react';
import  s from './Nav.module.css'; 




const Sidebar= (props) => {

    return (
    
    <div className={props.sidebar}>
      <span>{props.ava}</span>
      <span>{props.name}</span>
      <span>{props.id}</span>
    </div>
    

    
   
    )
     
}
 export default Sidebar;