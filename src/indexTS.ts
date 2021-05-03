/* eslint linebreak-style: ["error", "windows"] */
// handyFunctions
function upperFirst(str: string) {
  if (str === '') {
    return '';
  }
  const end = str.slice(1);
  const firstLetter = str[0].toUpperCase();
  return firstLetter + end;
}
function lowerFirst(str: string) {
  if (str === '') {
    return '';
  }
  const end = str.slice(1);
  const firstLetter = str[0].toLowerCase();
  return firstLetter + end;
}
function removeElement(array: string[], elem: string) {
  const index: number = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
}
function removeExtraSpaces(str: string) {
  const words: string[] = str.trim().split(' ');
  for (let i = words.length - 1; i > -1; i -= 1) {
    if (words[i] === '') {
      removeElement(words, words[i]);
    }
  }
  return words.join(' ');
}
function ksCase(str: string, type: string) {
  if (str === '') {
    return '';
  }
  const words = removeExtraSpaces(str).split(' ');
  const list = [];
  for (let i = 0; i < words.length; i += 1) {
    list.push(lowerFirst(words[i]));
  }
  return list.join(type);
}
// Assignment
function capitalize(str: string) {
  return upperFirst(str);
}
function allCaps(str: string) {
  return str.toUpperCase();
}
function capitalizeWords(str: string) {
  const words = str.split(' ');
  const list = [];
  for (let i = 0; i < words.length; i += 1) {
    list.push(upperFirst(words[i]));
  }
  return list.join(' ');
}
function kebabCase(str: string) {
  return ksCase(str, '-');
}
function snakeCase(str: string) {
  return ksCase(str, '_');
}
function camelCase(str: string) {
  if (str === '') {
    return '';
  }
  const words = removeExtraSpaces(str).split(' ');
  const list: string[] = [];
  list.push(words[0].toLowerCase());
  for (let i = 1; i < words.length; i += 1) {
    list.push(upperFirst(words[i]));
  }
  return list.join('');
}
function shift(str: string, index = 1) {
  if (str === '') {
    return '';
  }
  const end = str.slice(index);
  const firstLetter = str[0];
  return end + firstLetter;
}
function makeHashTag(str: string) {
  if (str === '') {
    return [''];
  }
  const words = removeExtraSpaces(str).split(' ');
  const list: string[] = [];
  if (words.length > 3) {
    words.sort((a, b) => b.length - a.length);
    for (let i = 0; i < 3; i += 1) {
      list.push(`#${upperFirst(words[i]).toString()}`);
    }
  } else {
    words.sort((a, b) => b.length - a.length);
    for (let i = 0; i < words.length; i += 1) {
      list.push(`#${upperFirst(words[i]).toString()}`);
    }
  }
  return list;
}
function isEmpty(str: string) {
  const words = str.trim().split('');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] !== ('\t' || '\r' || '\n')) {
      return false;
    }
  }
  return true;
}
export default {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebabCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
};
