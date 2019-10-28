import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

  const style = theme => ({
    cell: {
      width: 50, //Tamaño de la celda
      height: 50,
      padding: "10px"
    },
  });
  
class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passable: false,
      value: 0
    }
  }

  handleMouseClick = () => {
    this.setState((prevState) => {
      let value = getNewValue(prevState.value,this.props.impassableTypes);
      let passable = getNewPassable(this.props.impassableTypes,value);
      return { value: value, passable: passable }
    }, () => {
      this.props.onMazeChange(this.props.width,this.props.height, this.state.value);
    });
  }

  render () {
    const { classes } = this.props;
    let backgroundColor = calculateBackgroundColor(this.state.value, this.state.passable);
    let cellStyle = { background: backgroundColor }
    return (
      <Button className={classes.cell} style={cellStyle} onClick={this.handleMouseClick}></Button>
    );
  }
}

function calculateBackgroundColor(value, passable){
  if (passable) return '#002b80'
  else {
    let newColor = value*3;
    return '#b222'+ newColor.toString(16) +'2'
  }
}

function getNewValue(currentState,impassableTypes){
  let position = impassableTypes.indexOf(currentState);

  if(currentState === impassableTypes.length) return 0;
  if (position >= 0 && position < impassableTypes.length-1) return impassableTypes[position+1];
  else return impassableTypes.length;
}

function getNewPassable(impassableTypes,state){
  return (!impassableTypes.includes(state))
}

export default withStyles(style)(Cell);

