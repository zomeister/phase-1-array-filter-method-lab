// Code your solution here
function findMatching(arr, str) {
  return arr.filter(element => element.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(arr, str) {
  return arr.filter(element => element.slice(0, str.length ) === str)
}

function matchName(arr, str) {
  return arr.filter(element => element.name === str)
}

