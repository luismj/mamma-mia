import React, { Component } from "react"
import CategoriesButton from "./categories-button"

export default class CategoriesButtonPanel extends Component {
  handleClick = course => {
    this.props.clickHandler(course)
  }

  render() {
    return this.props.courses.map((courseName, course) => (
      <CategoriesButton
        key={course}
        course={course}
        courseName={courseName}
        clickHandler={this.handleClick}
        className="steps"
        active={this.props.activeCourse === course}
      />
    ))
  }
}
