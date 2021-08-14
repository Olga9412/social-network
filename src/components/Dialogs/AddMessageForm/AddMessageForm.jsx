import { Field, reduxForm } from 'redux-form';
import { required,maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../FormsControls/FormsControls';





const maxLength=maxLengthCreator(100);
const AddMessageForm=(props)=>{
    return(
       <form onSubmit={props.handleSubmit} >
         <Field component={Textarea} name='newMessageText'
         validate={[required,maxLength]} placeholder='Enter message' />
           <button>send</button>
            </form>
            
    )
 }
export const AddMessageFormRedux=reduxForm({form:'dialog-add-message-form'})(AddMessageForm)