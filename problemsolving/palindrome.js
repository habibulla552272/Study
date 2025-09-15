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

const isPalindrom2 = (str) => {
    const reversed = str.split('').reverse()
    const reversed2=str.split('').reverse().join('')
    console.log('reverse',reversed)
    return str === reverse;
    return str === reversed2;
}

console.log(isPalindrom2('racecar'));
console.log(isPalindrom2('hello'));
console.log(isPalindrom2("rotator"));
console.log(isPalindrom('rotator'))


