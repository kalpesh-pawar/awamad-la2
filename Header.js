import React from 'react'
import ReactDOM from'react-dom'
import styles from '../index.css'
import withRouter from 'react-router'
import {BrowserRouter as Router,Route,Link,Switch, BrowserRouter} from 'react-router-dom'
//import Register from './component/Register';
import Home from '../pages/Home';
import {Redirect} from 'react-router'


class Header extends React.Component{
    constructor(){
        super()
        this.state={
            searchbar:'',
            Logged_stat:localStorage.getItem('token') ? true:false,
            redirect:false
        }
        this.handleChnage=this.handleChnage.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
        this.renderLogout=this.renderLogout.bind(this)
    }

handleChnage(e){
    const {name,value}=e.target
    this.setState({[name]:value})

}
handleSubmit(e){
    console.log('hi')
}

renderLogout(){
    if(this.state.redirect){
        console.log('ex')
        return  <Redirect to='/home' />    }
}
handleLogout=e=>{
    e.preventDefault()
    localStorage.removeItem('token')
    fetch("http://127.0.0.1:5000/home",{    
        headers:{
            'Content-Type':`application/json`,
            'Authorization':`Bearer`
        }
    })
    .then(res=>res.json())
    .then(value=>console.log(value))
    window.location.reload()
}

    render(){
        const style={};
            if(this.state.Logged_stat)
            {
                style.display='none'
            }
            const s={};
            if(!this.state.Logged_stat){
                s.display='none'
            }
            
            
        
        return( 
            
            
                <header className=''>
                    <nav style={{backgroundColor:' rgb(44, 44, 44)',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div >
                            <ul className='ul'>
                                <li  ><a  style={{color:"red", fontFamily: "Times New Roman"}}><Link style={{color:"red", fontFamily: "Times New Roman",fontSize:'1cm'}} to='/'>Floura</Link></a></li>
                                <li ><Link to='/home'>Home</Link></li>
                                <li ><Link to='/following'>Following</Link></li>
                                <li><Link to='/notification'>Notification</Link></li>
                                <div className='search'>  
                                    <li><input type='text' placeholder='search ' name='searchbar' value={this.state.searchbar} onChange={this.handleChnage}/></li>
                                    <button type='submit' onClick={this.handleSubmit} >Search</button>
                                </div>
                                <li><Link to='/addque'>Add Question</Link></li>
                                {console.log(this.state.searchbar)}
                               
                                <li><Link to='/register' style={style} >Register</Link></li>
                                <li><Link to='/login' style={style} >Login</Link></li>
                                <li><Link to='/home' style={s} onClick={this.handleLogout}>Logout</Link>
                                </li>


                            </ul>
                         
                            
                        </div>
                    </nav>

                </header>
               
        ) 
        
        
    }
}


export default Header