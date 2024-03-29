import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from '../ProfileStatus'
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';


const ProfileInfo= (props) => {
  if (!props.profile) {
    return <Preloader />
  }

   return  (
  
     <div>
      {/* <div>
    <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>
    </div> */}
     <div className={s.descriptionBlock}>
       <img src={props.profile.photos.large}/>
       <div>
      <div>aboutMe</div>{props.profile.aboutMe}
      </div>
      <span>{props.profile.contacts.facebook}</span>
      <span>{props.profile.userId}</span>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    
   
   
   </div>
   )
  }
        

     

 export default ProfileInfo;