import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Ava from './Ava';
import { Redirect } from 'react-router';
// import { Field, reduxForm } from 'redux-form';
// import { Textarea } from '../FormsControls/FormsControls';
// import { maxLengthCreator, required } from '../../utils/validators/validators';
import {AddMessageFormRedux} from './AddMessageForm/AddMessageForm';

const Dialogs=(props)=>{

let avaElements=props.ava.map(a=> <Ava ava={a.ava} />);

let dialogsElements=props.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);
 

let messagesElements=props.messages.map(m => <Message message={m.message}/>)

let newMessageElement=React.createRef();

// let OnAddMessage=()=>{
  
//    props.addMessage();
     
//     }
 let addNewMessage=(values)=>{
    
    props.addMessage(values.newMessageText);
 }
   //   let onMessageChange=()=> {
   //    let text=newMessageElement.current.value;
   //    props.updateNewMessageText(text);
     
   //    }

      if (props.isAuth===false) return <Redirect to={'/login'}/>;

 return (
    
        <div className={s.dialogs}>
        <div className={s.ava}>
        </div>
         {avaElements}
        <div className={s.dialogsItems}>
        
         
           {dialogsElements }
      </div>
        
         <div className={s.messages}>
             
            {messagesElements}  
            <AddMessageFormRedux onSubmit={addNewMessage} />
            
         </div>
       </div>
           
       )    
             
 }
//  const maxLength=maxLengthCreator(100);
//   const AddMessageForm=(props)=>{
//     return(
//        <form onSubmit={props.handleSubmit} >
//          <Field component={Textarea} name='newMessageText'
//          validator={[required,maxLength]} placeholder='Enter message' />
//            <button >Enter message</button>
//             </form>
            
//     )
//  }
// const AddMessageFormRedux=reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;     
        


    







   