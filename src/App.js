import React from 'react';
import  './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import {Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/login/login';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/Preloader/Preloader';
import { Suspense } from 'react';
import ProfileContainer from './components/Profile/ProfileContainer';
const  DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'));




class App extends React.Component {
componentDidMount() {
      this.props.initializeApp();
   
    }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    
 return( 
 
   <div className='app-wrapper'>
    <HeaderContainer/>
    <Nav/>
    <div className='app-wrapper-content'>
   
      <Route path='/dialogs' 
        render={()=>{
        return <Suspense fallback={<Preloader/>}>
        <DialogsContainer />
        </Suspense>
      }}/> 
      <Route path='/login' render={()=><LoginPage />}/> 
                                                                  
      <Route path='/profile/:userId?'
        render={()=><ProfileContainer />}/> 
      <Route path='/users'render={()=> <UsersContainer />}/>
      <Route path='/news'component={News}/>
      <Route path='/music'component={Music}/>
      <Route path='/settings'component={Settings}/>
    
     </div>
       </div>
  )   
}
}
const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})


export default compose(
          withRouter,
          connect(mapStateToProps,{initializeApp})) (App);   
  

     
     
   
      
     

       

         
   
      
      
     
       




    
       
         
       
       
        
       
    
      
     
    


     

    
   

