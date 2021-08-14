import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Ava from './Ava';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps=(state)=>{
  return {
    newMessageText:state.dialogsPage.newMessageText,
    dialogItem:state.dialogsPage.dialogs,
    ava:state.dialogsPage.ava,
    dialogs:state.dialogsPage.dialogs,
    messages:state.dialogsPage.messages,
    

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    // updateNewMessageText:(text)=>{
    //   let action=updateNewMessageTextActionCreator(text);
    //     dispatch(action);
    // },
    addMessage:(newMessageText)=>{
      dispatch(addMessageActionCreator(newMessageText));
    },
  }
}


 export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
) (Dialogs);
            
         
             
 




 

   
 
    
        


    







   