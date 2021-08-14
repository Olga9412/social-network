import react from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../FormsControls/FormsControls';
import { connect } from 'react-redux';
import  {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../FormsControls/FormsControls.module.css';

const LoginForm=({handleSubmit,error})=>{
 
    return (
       <form onSubmit={handleSubmit} >
           <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input} />
           
           <div>
               <Field placeholder={'Password'} validate={[required]} name={'password'} 
               type={'password'} component={Input} />
               <div>
                   <div>
                      <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
                   </div>
                   {error && <div className={styles.formSummaryError}>{error}</div>}
                  <button >log in</button>
               </div>
           </div>
           </form>
      )
}         
       
   


const LoginReduxForm=reduxForm({form:'login'})(LoginForm)
    


const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile/'}/>
    }
    return <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>
}   
 const mapStateToProps=(state)=>({
     isAuth:state.auth.isAuth,
 })

 
  export default connect(mapStateToProps,{login})(Login);     
    


