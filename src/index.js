const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' '
};

function decode(expr) {
    if (typeof expr != 'string') return new Error('It is wrong type!');
    const dot = 10;
    const dash = 11;
    let splitedStr = splitterStr(expr);
    let chars = charsDecoder(splitedStr);
    let DecodedMorseSrting = MorseCharsDecoder(chars);

    function splitterStr(str) {
        let arrFromStr = [];
        let i = 0;
        while (i < str.length) {
            arrFromStr.push(str.slice(i, i + 10));
            i = i + 10;
        }
        return arrFromStr;
    }

    function charsDecoder(arr) {
        let sym = [];

        arr.forEach(item => {
            let arrP = [];
            let arrElem = [];
            let i = 0;
            if (item == '**********') return sym.push(' ');
            while (i < item.length) {
                arrP.push(item.slice(i, i + 2));
                i = i + 2;
            }

            arrP.forEach(elem => {
                if (elem == dot) arrElem.push('.');
                if (elem == dash) arrElem.push('-');
            })
            sym.push(arrElem.join(''))
        });
        return sym;
    }

    function MorseCharsDecoder(arr) {
        let decArr = [];

        arr.forEach(item => {
            if (item == ' ') return decArr.push(' ');
            for (let key in MORSE_TABLE) {
                if (key == item) decArr.push(MORSE_TABLE[key]);
            }
        });
        return decArr.join('')
    }

    return DecodedMorseSrting;

    /* Chars Coder:

    arrFromStr.forEach(i => {
            coderArr = coderArr.concat(coding(i));
        });
    
    
        function coding(char) {
            if(char == ' ') return '**********';
            let str = String(char);
            let code = [];
    
            for(let key in MORSE_TABLE) {
                if(MORSE_TABLE[key] == str) {
                    let keyArr = key.split('');
                    keyArr.forEach(item => {
                        if(item == '.') code.push(10);
                        if(item == '-') code.push(11);
                    });
                }
            }
            code = code.join('');
            if(code.length < 10) {
                code = code.split('').reverse();
                for(let i = 0; 10 > code.length; i++) {
                    code.push(0);
                }
            }
            code = code.reverse().join('');
            return code;
        }
        return coderArr.join('');
    */

}

module.exports = {
    decode
}