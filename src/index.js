// handyFunctions
function upperFirst(str) {
  if (str == ''){
    return ''
  }
  var end = str.slice(1)
  var firstLetter = str[0].toUpperCase()
  return firstLetter + end
}
function lowerFirst(str) {
  if (str == ''){
    return ''
  }
  var end = str.slice(1)
  var firstLetter = str[0].toLowerCase()
  return firstLetter + end
}
function removeElement(array, elem) {
  var index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
}
function ksCase(str, type) {
  if (str == ''){
    return ''
  }
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(lowerFirst(words[i]))
  }
  return list.join(type)
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
  var words = str.trim().split(' ')
  for (var i = words.length-1; i > -1; i--) {
    if (words[i]==''){
      removeElement(words, words[i])
    }
  }
  return words.join(' ')
}
function kebabCase(str) {
  return ksCase(str, '-')
}
function snakeCase(str) {
  return ksCase(str, '_')
}
function camelCase(str) {
  if (str == ''){
    return ''
  }
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  list.push(words[0].toLowerCase())
  for (var i = 1; i < words.length; i++) {
    list.push(upperFirst(words[i]))
  }
  return list.join('')
}
function shift(str, index=1) {
  if (str == ''){
    return ''
  }
  var end = str.slice(index)
  var firstLetter = str[0]
  return end+firstLetter
}
function makeHashTag(str) {
  if (str == ''){
    return ['']
  }
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  if (words.length>3){
    words.sort((a,b) => b.length - a.length);
    for (var i = 0; i < 3; i++) {
      list.push('#'+upperFirst(words[i]).toString())
    }
  }
  else{
    words.sort((a,b) => b.length - a.length);
    for (var i = 0; i < words.length; i++) {
      list.push('#'+upperFirst(words[i]).toString())
    }
  }
  return list
}
function isEmpty(str) {
  var words = str.trim().split('')
  for (var i = 0; i < words.length; i++) {
    if (words[i]!=('\t'||'\r'||'\n')){
      return false
    }
  }
  return true
}
module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebabCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty
}