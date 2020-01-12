// import moment here; use this package in each function
const moment = require('moment');
const today = () => {
  // write code for dates.today
  return moment().format('dddd')

}

const calendar = () => {
  // write code for dates.calendar
 const date = moment().format("MMM DD, YYYY")
 console.log("Date: " + date)
 return date
}

const currentTime = () => {
  // write code for dates.currentTime
  const mom = moment().format("hh:mm:ss A")
  return mom
}

module.exports = {
  today,
  calendar,
  currentTime
}