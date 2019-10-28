import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
  margin: theme.spacing.unit,
},
input: {
  display: 'none',
},
});


class Configuration extends Component {
  state = {
    width: 5,
    height: 5,
    impassables: 1,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.props.onDimensionChange(name, event.target.value)
  };

    render() {
      const { classes } = this.props;
      return (
   <form className={classes.container} autoComplete="off">

    <h1>Mamma Mia Restaurant! </h1>
    {/*  <TextField
       id="standard-number"
       label="Filas"
       value={this.state.width}
       onChange={this.handleChange('width')}
       type="number"
       className={classes.textField}
       InputLabelProps={{
         shrink: true,
       }}
       margin="normal"
     /> */}
      <Button variant="contained" color="primary" 
			  style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
				Edit
		  </Button>
      <Button variant="contained" color="primary" 
			  style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
				AddCategory
		  </Button>
      <Button variant="contained" color="primary" 
			  style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
				AddDish
		  </Button>
      <Button variant="contained" color="primary" 
			  style={{width:170,backgroundColor:'#99004d',marginTop:20,}}>
				Save
		  </Button>
     {/* <TextField
       id="standard-number"
       label="Columnas"
       value={this.state.height}
       onChange={this.handleChange('height')}
       type="number"
       className={classes.textField}
       InputLabelProps={{
         shrink: true,
       }}
       margin="normal"
     />
      <TextField
       id="standard-number"
       label="No Pasables"
       value={this.state.impassables}
       onChange={this.handleChange('impassables')}
       type="number"
       className={classes.textField}
       InputLabelProps={{
         shrink: true,
       }}
       margin="normal"
     /> */}

      {/*   <h5>En "No Pasables", se debe ingresar la cantidad de tipos no pasables deseables para el laberinto</h5>*/}
   </form>
 );
}
}

export default withStyles(styles)(Configuration);
