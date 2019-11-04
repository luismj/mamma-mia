import React, { Component } from "react"
import CategoryItem from "./category-item"
import Grid from "@material-ui/core/Grid"

export default class CategoryView extends Component {
  render() {
    return this.props.name.map((res,index) => (
      <Grid item xs={4} key={index}>
        <CategoryItem id={index} categoryTitle={res} className="order-item"/>
      </Grid>
    ))
  }
}
