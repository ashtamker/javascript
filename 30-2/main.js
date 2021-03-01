function makeAllCaps(array) {
    return new Promise(resolve => {
        resolve(array.map(word => word.toUpperCase()))
    });
}

function sortWords(array) {
    const hasOnlyString = array.reduce((hasOnlyString, word) => hasOnlyString && typeof word === 'string', true)
    return new Promise((resolve, reject) => {
        if(hasOnlyString)
            resolve(array.sort());
        else    
            reject("The array does not include only a words strings");
    });
}

sortWords(['if', 'you', 'went', 'shoot', 'shoot','dont', 'talk'])
.then(function(array) {
    console.log("sortWords Done");
    return makeAllCaps(array);
})
.then(function(array) {
    console.log("makeAllCaps Done")
    console.log(array)
})
.catch((err) => {
    console.log(err);
})