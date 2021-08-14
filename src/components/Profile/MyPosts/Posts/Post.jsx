import React from 'react';
import s from './Post.module.css';

const Post= (props) => {
  
 
   return (
   <div className={s.item}>
     <img src="https://freesvg.org/img/Male-Avatar.png"></img>
    {props.message}
  <div>
    <span>{props.countlike}likes</span>
  </div>
   </div>  
 
  ) 
}
 export default Post;