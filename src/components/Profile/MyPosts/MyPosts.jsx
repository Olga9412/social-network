import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../FormsControls/FormsControls';
import { maxLengthCreator,required } from '../../../utils/validators/validators';


const maxLength=maxLengthCreator(10);

const AddNewPostForm=(props)=>{
  return(
   <form onSubmit={props.handleSubmit}>
     <Field component={Textarea} name='newPostText' placeholder={'Post message'} validate={[required,maxLength]}/>
     <button ></button>
   </form>
  )
}
const AddNewPostFormRedux=reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts= (props) => {

  
  let postsElements=props.posts.map(p=> <Post message={p.message} countlike={p.countlike}/>)
  let newPostElement=React.createRef();
  
  let OnAddPost=(values)=>{
    props.addPost(values.newPostText);
   
    
  }
  
  
  //  let onPostChange=()=> {
  //   let text=newPostElement.current.value;
  //   props.updateNewPostText(text);
  //   }
  
     return (
   <div className={s.postsBlock}>
    <h3>My Posts</h3> 
    <AddNewPostFormRedux onSubmit={OnAddPost}/>
   <div className={s.posts}>
   
    {postsElements}
  
  
     
   </div>
   </div>  
    ) 
  }
 export default MyPosts;