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
  
class CellPreview extends Component {

  render () {
    const { classes } = this.props;
    let backgroundColor = calculateBackgroundColor(this.props.value, this.props.impassableTypes);
    let cellStyle = { background: backgroundColor }
    return (
      <Button className={classes.cell} style={cellStyle}></Button>
    );
  }
}

function calculateBackgroundColor(value, impassableTypes){
  if (isPassable(value,impassableTypes)) return '#002b80'
  else {
    let newColor = value*3;
    return '#b222'+ newColor.toString(16) +'2'
  }
}

function isPassable(value,impassableTypes){
  return (!impassableTypes.includes(value))
}

export default withStyles(style)(CellPreview);

