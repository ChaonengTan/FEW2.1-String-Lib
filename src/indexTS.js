"use strict";
exports.__esModule = true;
/* eslint linebreak-style: ["error", "windows"] */
// handyFunctions
function upperFirst(str) {
    if (str === '') {
        return '';
    }
    var end = str.slice(1);
    var firstLetter = str[0].toUpperCase();
    return firstLetter + end;
}
function lowerFirst(str) {
    if (str === '') {
        return '';
    }
    var end = str.slice(1);
    var firstLetter = str[0].toLowerCase();
    return firstLetter + end;
}
function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
function removeExtraSpaces(str) {
    var words = str.trim().split(' ');
    for (var i = words.length - 1; i > -1; i -= 1) {
        if (words[i] === '') {
            removeElement(words, words[i]);
        }
    }
    return words.join(' ');
}
function ksCase(str, type) {
    if (str === '') {
        return '';
    }
    var words = removeExtraSpaces(str).split(' ');
    var list = [];
    for (var i = 0; i < words.length; i += 1) {
        list.push(lowerFirst(words[i]));
    }
    return list.join(type);
}
// Assignment
function capitalize(str) {
    return upperFirst(str);
}
function allCaps(str) {
    return str.toUpperCase();
}
function capitalizeWords(str) {
    var words = str.split(' ');
    var list = [];
    for (var i = 0; i < words.length; i += 1) {
        list.push(upperFirst(words[i]));
    }
    return list.join(' ');
}
function kebabCase(str) {
    return ksCase(str, '-');
}
function snakeCase(str) {
    return ksCase(str, '_');
}
function camelCase(str) {
    if (str === '') {
        return '';
    }
    var words = removeExtraSpaces(str).split(' ');
    var list = [];
    list.push(words[0].toLowerCase());
    for (var i = 1; i < words.length; i += 1) {
        list.push(upperFirst(words[i]));
    }
    return list.join('');
}
function shift(str, index) {
    if (index === void 0) { index = 1; }
    if (str === '') {
        return '';
    }
    var end = str.slice(index);
    var firstLetter = str[0];
    return end + firstLetter;
}
function makeHashTag(str) {
    if (str === '') {
        return [''];
    }
    var words = removeExtraSpaces(str).split(' ');
    var list = [];
    if (words.length > 3) {
        words.sort(function (a, b) { return b.length - a.length; });
        for (var i = 0; i < 3; i += 1) {
            list.push("#" + upperFirst(words[i]).toString());
        }
    }
    else {
        words.sort(function (a, b) { return b.length - a.length; });
        for (var i = 0; i < words.length; i += 1) {
            list.push("#" + upperFirst(words[i]).toString());
        }
    }
    return list;
}
function isEmpty(str) {
    var words = str.trim().split('');
    for (var i = 0; i < words.length; i += 1) {
        if (words[i] !== ('\t' || '\r' || '\n')) {
            return false;
        }
    }
    return true;
}
exports["default"] = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    removeExtraSpaces: removeExtraSpaces,
    kebabCase: kebabCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag,
    isEmpty: isEmpty
};
