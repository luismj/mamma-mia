import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./SignIn.css";
import SocialButton from './SocialButton'
import { Redirect } from 'react-router-dom';

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      currentProvider: ''
    }
    this.nodes = {}

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)
  }

  setNodeRef (provider, node) {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  onLoginSuccess (user) {
    console.log(user)

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  }

  onLoginFailure (err) {
    console.error(err)

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  render () {
		let children

    if (this.state.logged) {
      children = 	
			<div>
			<Redirect to="/showMaze" />		
			</div>
    } else {
			children = <div>
			<div><h1>Iniciar Sesion</h1></div>
			{/* 	<div>
        <SocialButton
          provider='facebook'
          appId='2278364415755752'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'facebook')}
          key={'facebook'}
        >
          Iniciar sesion con Facebook
        </SocialButton></div> */}
     {/*    <div><SocialButton
          provider='google'
          appId='177073706787-738bk8cptmf57vn9nencoprig0e0r9d0.apps.googleusercontent.com'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          onLogoutFailure={this.onLogoutFailure}
          getInstance={this.setNodeRef.bind(this, 'google')}
          key={'google'}
        >
          Iniciar sesion con Google
        </SocialButton></div> */}
     {/*    <div><SocialButton
          autoCleanUri
          provider='instagram'
          appId='f74ba16560494c2696b1250a60951092'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'instagram')}
					key={'instagram'}
					redirect='/showMaze'
        >
          Iniciar sesion con Instagram
        </SocialButton></div> */}
      		<div>
					<div>
						<Link to={'/'}>
						 <Button variant="contained" color="primary"
						 style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
								 Home
							 </Button>
						 </Link>
					</div>
					<div>
						 <Link to={'/register'}>
							 <Button variant="contained" color="primary" 
							 style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
								 Crear cuenta
							 </Button>
						 </Link>
					</div>
					<div>
						 <Link to={'/login'}>
							 <Button variant="contained" color="primary"
							 style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
								 <b>Iniciar sesion</b>
							 </Button>
						 </Link>
					</div>	 
				</div>
				</div>
    }

		return (<div><div> {children} </div></div>
			)
  }
}
