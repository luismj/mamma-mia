import React, { Component } from "react"
import CategoryView from "./category-view"
import Grid from "@material-ui/core/Grid"
import { getCoursesFromFile } from "../../../utils/courseName"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CategoryItem from "./category-item"

export default class CategoryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesItems: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(props) {
    if (this.props !== props) {
      this.fetchData()
    }
  }

  fetchData = () => {
    this.setState({
      categoriesItems : getCoursesFromFile()
    })
  }

  handleNewCategory = () => {
    console.log(this.state.categoriesItems)
    const newCategory = "New Category"
    const newComponents = [...this.state.categoriesItems, newCategory];

    this.setState({
      categoriesItems: newComponents
    });

    console.log(this.state.categoriesItems)
  }

  render() {
    if (this.state.categoriesItems.length > 0) {
      return (
        <div className="order-container">
          <p>Displaying all available categories</p>
          <Grid container spacing={3}>
            <CategoryView name={this.state.categoriesItems}/>
          </Grid>
          <Button className="button default" variant="contained" size="small" color="default" onClick={this.handleNewCategory}>
            <AddIcon/> New Category
          </Button>
        </div>
      )
    } else {
      return (
        <div className="order-container">
          <p>No categories yet! Try adding a new one</p>
          <Button className="button default" variant="contained" size="small" color="default" onClick={this.handleNewCategory}>
              <AddIcon/> New Category
          </Button>
        </div>
      )
    }
  }
}
