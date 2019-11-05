import React, { Component } from "react"
import getCourseItems from "../../../../utils/courseItem"
import CourseView from "./course-view"
import Grid from "@material-ui/core/Grid"

export default class CourseContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseItems: [],
      selectedItems: {}
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
    let { selectedItems } = this.state
    const jsonData = require("../../../../assets/data/fe-tech-data.json")
    const courseItems = getCourseItems(jsonData, this.props.course)

    if (Object.entries(selectedItems).length === 0) {
      jsonData.map(res => {
        return (selectedItems[res.courseType[0]] = [])
      })
    }
    this.setState({
      courseItems,
      selectedItems
    })
  }

  handleNextCourse = () => {
    const { selectedItems } = this.state
    const { course } = this.props
    if (Object.keys(selectedItems).length - 1 !== course) {
      this.props.changeCourse(course + 1)
    } else {
      this.props.summaryHandler()
    }
  }

  handleChangeOrder = () => {
    this.props.changeCourse()
    this.props.summaryHandler()
  }

  render() {
      return (
        <div className="order-container">
          <Grid container spacing={3}>
            <CourseView
              {...this.state}
              course={this.props.course}
              itemHandler={this.handleItems}
            />
          </Grid>
        </div>
      )
    }
  }
