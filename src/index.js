// handyFunctions
function upperFirst(str) {
  var end = str.slice(1)
  var firstLetter = str[0].toUpperCase()
  return firstLetter + end
}
function lowerFirst(str) {
  var end = str.slice(1)
  var firstLetter = str[0].toLowerCase()
  return firstLetter + end
}
// Assignment
function capitalize(str){
  return upperFirst(str)
}
function allCaps(str){
  return str.toUpperCase()
}
function capitalizeWords(str) {
  var words = str.split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(upperFirst(words[i]))
  }
  return list.join(' ')
}
function removeExtraSpaces(str){
  var words = str.split(' ')
  var list = []
  list.push(words[0].toLowerCase())
  for (var i = 1; i < words.length; i++) {
    list.push(upperFirst(words[i]))
  }
  return list.join('')
}
function camelCase(str) {
  var words = str.split(' ')
  var list = []
  list.push(words[0].toLowerCase())
  for (var i = 1; i < words.length; i++) {
    list.push(upperFirst(words[i]))
  }
  return list.join('')
}
function kebabCase(str, sep = '-') {
  var words = str.split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(lowerFirst(words[i]))
  }
  return list.join('-')
}
function snakeCase(str) {
  var words = str.split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(lowerFirst(words[i]))
  }
  return list.join('_')
}