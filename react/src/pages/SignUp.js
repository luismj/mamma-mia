import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";


class SignUp extends Component {
	render()  {
		return (
			<>
			<div>Quiero Registrarme.... dibujame un formulario de SignUp</div>
			  <Link to={'/register'}>
				  <Button className={withStyles.button}>
			        Register
			      </Button>
		      </Link>
		      <Link to={'/sign_in'}>
				  <Button className={withStyles.button}>
			        Go to SignIn
			      </Button>
		      </Link>
			</>
		);
	}
}

export default SignUp;
