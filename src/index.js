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
function removeElement(array, elem) {
  var index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
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
  console.log(words)
  for (var i = words.length; i > 1; i--) {
    if (words[i]==''){
      removeElement(words, words[i])
    }
  }
  return words.join(' ')
}
function kebabCase(str) {
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(lowerFirst(words[i]))
  }
  return list.join('-')
}
function snakeCase(str) {
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  for (var i = 0; i < words.length; i++) {
    list.push(lowerFirst(words[i]))
  }
  return list.join('_')
}
function camelCase(str) {
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  list.push(words[0].toLowerCase())
  for (var i = 1; i < words.length; i++) {
    list.push(upperFirst(words[i]))
  }
  return list.join('')
}
function shift(str, index=1) {
  var end = str.slice(index)
  var firstLetter = str[0]
  return end+firstLetter
}
// create Func
console.log('running func')
function makeHashTag(str) {
  var words = removeExtraSpaces(str).split(' ')
  var list = []
  if (words.length>3){
    console.log(words)
    words.sort((a,b) => b.length - a.length);
    console.log(words)
    for (var i = 0; i < words.length; i++) {
      list.push(upperFirst(words[i]))
    }
  }
  return list.join('')
}
console.log(makeHashTag('hello world foo   aaaaaaaaaa    bar!'))