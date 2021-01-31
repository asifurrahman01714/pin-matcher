//arguments is not array..it is an array like object

function addName(name1, name2) {
    console.log(arguments);
    let fullName = ' ';
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName + ' ' + element;
        
    }
    return fullName;
}

const name = addName('mohammad', 'asif', 'ur', 'rahman');
console.log(name);