import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import FoodType from '../types/food-type'
import Leaf from '@material-ui/icons/Leaf';

export default class OrderItem extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle)
  }

  render() {
    return (
      <Card
        className={`${this.props.className} ${this.props.selected ? "-selected" : ""}`}
      >
        <CardActionArea onClick={this.handleClick}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="item-title"
            >
              {this.props.itemTitle}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-desc"
            >
              {this.props.itemDescription}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-info"
            > 
              <Image source= {this.props.itemType.map(type => `${type}`)} /> //TODO: Use react-image lib and use the map to get the image's path
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-info"
            >
              Price: ${this.props.itemPrice}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}