import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class CategoryItem extends Component {
//  handleClick = () => { }
  handleRemoval = () => {

  }

  render() {
    return (
      <Card
        className={`${this.props.className} ${
          this.props.selected ? "-selected" : ""}`}
      >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="item-title inline"
            >
              {this.props.categoryTitle}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Edit category">
              <EditIcon/>
            </IconButton>
            <IconButton aria-label="Remove category" onClick={this.handleRemoval}>
              <DeleteIcon/>
            </IconButton>
          </CardActions>
      </Card>
    )
  }
}
