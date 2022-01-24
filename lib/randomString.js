const numbers = "0123456789";
const charLowerCase = "abcdefghijklmnopqrstuvwxyz";
const charUpperCase = charLowerCase.toUpperCase();
const asciiSymbols="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const binary = "01";
const hexLowerCaseAlphabets = "abcdef";
const hexUpperCaseAlphabets = hexLowerCaseAlphabets.toUpperCase();
const octal = "01234567";

const randomString = (options = {
    length : 32,
    type : '',
    charset : '',
    capitalization : ''
} || '' || 0) => {
    
    // Get and Initialize Options
    let length = typeof options == 'string' ? 32 : typeof options == 'number' ? options : (options?.length || 32);
    let type = (typeof options?.type == 'string' && options?.type?.trim() == '') ? 'alphanumeric' : (options?.type || 'alphanumeric');
    let chars = typeof options == 'string' ? options : options?.charset || '';
    let capitalization = options?.capitalization || '';

    // Throw error if length is NaN
    if(isNaN(length)) throw 'Length of string is NaN';

    // Set length to the greatest integer less than or equal to its numeric argument
    length = Math.floor(length);
    
    // Set the Character Set
    let charSet = '';
    switch (type) {
        case 'alphabetic':
            charSet = capitalization?.toLowerCase() == 'lowercase' ? charLowerCase : capitalization?.toLowerCase() == 'uppercase' ? charUpperCase :  (charLowerCase + charUpperCase)
            break;
    
        case 'alphanumeric':
            charSet = (capitalization?.toLowerCase() == 'lowercase' ? charLowerCase : capitalization?.toLowerCase() == 'uppercase' ? charUpperCase :  (charLowerCase + charUpperCase)) + numbers
            break;
    
        case 'numeric':
            charSet = numbers
            break;

        case 'hex':
            charSet = (capitalization?.toLowerCase() == 'lowercase' ? hexLowerCaseAlphabets : capitalization?.toLowerCase() == 'uppercase' ? hexUpperCaseAlphabets :  (hexLowerCaseAlphabets + hexUpperCaseAlphabets)) + numbers
            break;

        case 'binary':
            charSet = binary
            break;

        case 'octal':
            charSet = octal
            break;

        case 'ascii-printable':
            charSet = numbers + asciiSymbols + (capitalization?.toLowerCase() == 'lowercase' ? charLowerCase : capitalization?.toLowerCase() == 'uppercase' ? charUpperCase :  (charLowerCase + charUpperCase))
            break;
                            
        default:
            charSet = (capitalization?.toLowerCase() == 'lowercase' ? charLowerCase : capitalization?.toLowerCase() == 'uppercase' ? charUpperCase :  (charLowerCase + charUpperCase)) + numbers
            break;
    }

    // Checks if Custom characters are used
    charSet = (typeof chars == 'string' && chars?.trim() !== '') ? capitalization?.toLowerCase() == 'lowercase' ? chars.trim().toLowerCase() : capitalization?.toLowerCase() == 'uppercase' ? chars.trim().toUpperCase() : chars.trim() : charSet;

    // Initialize Result 
    let result = '';

    // Generate Random strings and store in result
    for (let i = length; i > 0; --i) result += charSet[Math.round(Math.random() * (charSet.length - 1))];

    // Return random string
    return result;
  }

module.exports = randomString;