const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprLen = expr.length;
    const expToTenSym = [];

    for(let count = 0; count < exprLen; count += 10){
        expToTenSym.push(expr.slice(count, count + 10));
    };
    
    const morse = [];

    for(const str of expToTenSym) {
        const strLen = str.length;
        let morseSym = '';
        if (str === '**********') {
            morse.push(' ');
            continue;
        }
        for (let count = 0; count < strLen; count += 2 ) {
            symb = str.slice(count, count + 2);
            if(symb != '00') {
              morseSym +=  symb === '10' ? '.' : '-';
            }
        }   
       morse.push(morseSym);
    };

    let result = '';

    for(let morseSymb of morse) {
       if(morseSymb.toString() === ' ') {
           result += ' ';
       } else {
       const letter = MORSE_TABLE[morseSymb];
       result += letter;
       }
    };

    return result;
};

module.exports = {
    decode
}