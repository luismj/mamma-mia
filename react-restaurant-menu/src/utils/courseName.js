const courses = [ //TODO: get it from a JSON file
  "Hors d'oeuvres",
  "Soup",
  "Fish",
  "Salad",
  "Main Course",
  "Dessert"
]

function getCourseName(number) {
  return courses[number]
}

function getAllCourseNames() {
  return courses
}

export { getAllCourseNames, getCourseName }
