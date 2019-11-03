import React, { Component } from "react"
import CategoryView from "./category-view"
import Grid from "@material-ui/core/Grid"
import { getCoursesFromFile } from "../../../utils/courseName"

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

  handleItems = (id, itemTitle) => {

  }

  render() {
    if (this.state.categoriesItems.length > 0) {
      return (
        <div className="order-container">
          <p>Displaying all available categories</p>
          <Grid container spacing={3}>
            <CategoryView
              name={this.state.categoriesItems}
            />
          </Grid>
          <button className="button default" onClick={this.handleNextCourse}>ADD NEW CATEGORY</button>
        </div>
      )
    } else {
      return (
        <div className="order-container">
          <p>No categories yet! Try adding a new one</p>
          <button className="button default" onClick={this.handleNextCourse}>ADD NEW CATEGORY</button>
        </div>
      )
    }
  }
}
