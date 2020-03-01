const firstDecade = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
};

const secondDecade = {
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen',
};

const decadesNumber = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
};

module.exports = function toReadable (number) {
    const arrayNumber = (number).toString().split('').reverse();
    const [ units, tens, hundreds ] = arrayNumber;
    let result = [];

    if (arrayNumber.length === 1 && units === '0') return 'zero';

    if ( tens === '1' ) {
        for (let key in secondDecade) {
            if(key === units) result.push(`${secondDecade[key]}`)
        }
    } else {
        for (let key in firstDecade) {
            if(key === units) result.push(`${firstDecade[key]}`)
        }
        for (let key in decadesNumber) {
            if(key === tens) result.push(`${decadesNumber[key]}`)
        }
    }

    for (let key in firstDecade) {
        if ( hundreds && key === hundreds ) result.push(`${firstDecade[key]} hundred`)
    }
    return result.reverse().join(' ')
};
