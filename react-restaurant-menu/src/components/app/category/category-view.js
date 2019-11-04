import React, { Component } from "react"
import CategoryItem from "./category-item"
import Grid from "@material-ui/core/Grid"

export default class CategoryView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesList: this.props.name
    };
    this.updateCategoriesList = this.updateCategoriesList.bind(this)
  };

  updateCategoriesList = (updatedCategory) => {
    var newCategories = [...this.props.name]

    if (updatedCategory.deleted) 
      newCategories.splice(updatedCategory.categoryID,1)
    else if (newCategories.length-1 < updatedCategory.categoryID)
        newCategories.push(updatedCategory.html);
      else 
        newCategories[updatedCategory.categoryID] = updatedCategory.html

    console.log("categories after anything: " + newCategories) // Array of categories is updated up to this point
    this.setState({ categoriesList: newCategories });         // However, state is never updated here (TODO: CHECK THIS)
    console.log(this.state)
  }

  render() {
    return this.props.name.map((res,index) => (
      <Grid item xs={4} key={index}>
        <CategoryItem id={index} categoryTitle={res} className="order-item" updateCategoriesList={this.updateCategoriesList}/>
      </Grid>
    ))
  }
}
