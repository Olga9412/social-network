import React from 'react';
import  s from './Nav.module.css'; 
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar';


const Nav= (props) => {


  
    return (
    <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
    </div> <div className={`${s.item} ${s.active}`}>
      <NavLink to='/dialogs'>Messages</NavLink>
    </div> <div className={s.item}>
    <NavLink to='/users'>Users</NavLink>
    </div> <div className={s.item}>
      <NavLink to='/news'>News</NavLink>
    </div> <div className={s.item}>
      <NavLink to='/music'>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings'>Settings</NavLink>
    </div >
   
   
    <div className={s.sidebar}>Friends{props.sidebar}</div>
      
        
     
    </nav>
    )
     
}
 export default Nav;