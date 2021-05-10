import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout.js'


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            prn:''

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({[name]:value})
    }

    handleSubmit(){
        fetch('http://127.0.0.1:5000/register',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:this.state.username,
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response=>response.json)
        .then(json=>{
            const accessToken = json.access_token;
        this.props.onLogin(accessToken);
      
        })

    }

    render(){
        return(
            <div>
                   
                <form onSubmit={this.handleSubmit} action='/login'>
                    <input type='text' name='username' placeholder='USERNAME'value={this.state.username} onChange={this.handleChange} /><br/>
                    <input type='email' name='email' placeholder='kp@gmail.com'value={this.state.email} onChange={this.handleChange} /><br/>
                    <input type='text' name='prn' placeholder="2018BTECS00051" value={this.state.prn} onChange={this.handleChange} /><br />
                    <input type='password' name='password' placeholder='Password'value={this.state.password} onChange={this.handleChange} /><br />
                    <input type="text" name="year" placeholder="2nd year" value={this.state.year} onChange={this.handleChange}/><br />
                    <button type='submit'>Submit</button> 
                </form>
                 
                {console.log(this.state.username)}
                {console.log(this.state.email)}
                {console.log(this.state.password)}
            </div>
        )
    }
            

}
export default Register




