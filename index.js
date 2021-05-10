import React from 'react'
import ReactDOM, { render } from 'react-dom'
//import Question from './Question'
//import Questioncard from './Questioncard'
//import Form from './Form'

//import Main from './Main'
//import Addque from './Addque'
//import styles from './index.css'
//import Register  from './Register'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import App from './App'
import Header from './component/Header'
import Register from './component/Register'
import Home from './pages/Home'
import Login from './component/Login'



function Appl(){
    return(
      <div>
        
           <Router >
             <div>
           <Header/>       
        
        <switch>
                                <Route exact path='/home' component={withRouter(Home)} ></Route>
                                <Route exact path='/following' ></Route>
                                <Route exact path='/notification' component={withRouter(Notification)}></Route>
                                <Route exact path='/addque' ></Route>
                                <Route exact path='/register' component={withRouter(Register)}></Route>
                                <Route exact path='/login' component={withRouter(Login)}></Route>


                            </switch>
                            </div>
        </Router>
        </div>
          )
  
}

ReactDOM.render(<Appl/>,document.getElementById('content'))
