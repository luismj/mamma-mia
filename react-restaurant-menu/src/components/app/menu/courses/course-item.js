import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ContentEditable from 'react-contenteditable'
import Button from '@material-ui/core/Button';
import GlutenFree from "../../../../images/gluten_free.png"
import Veggie from "../../../../images/veggie.png"

export default class CourseItem extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle)
  }

  render() {
    return (
      <Card className={`${this.props.className} ${this.props.selected ? "-selected" : ""}`}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className="item-title">
            {this.props.itemTitle}
          </Typography>
          <Typography variant="body2" component="p" className="item-desc">
            {this.props.itemDescription}
          </Typography>
          <Typography variant="body2" component="p" className="item-info">
            Price: ${this.props.itemPrice}
          </Typography>
            {
              this.props.itemType.map((type,index) => {
                return (
                  <CardMedia className="type-image" component="img"	alt={`${type}`}	image={`${getImagePathFromType(type)}`}	key={index}/>
                )
              })
            }
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="default">
            <EditIcon/> Edit {/*!this.state.editable ? "Edit" : "Save"*/}
          </Button>
          <Button variant="contained" size="small" color="default">
            <DeleteIcon/> Remove
          </Button>
        </CardActions>
      </Card>
    )
  }
}

function getImagePathFromType(type){
  if (type === "veggie") return Veggie
  if (type === "gluten_free") return GlutenFree
}