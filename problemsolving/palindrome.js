function reverse(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

function isPalindrom(str) {
    let rev = reverse(str);

    if (rev === str) {
        return true

    } else {
        return false;
    }
}

console.log(isPalindrom('peep'));
console.log(isPalindrom('hello'));
console.log(isPalindrom('rotator'))