const names = ['pesho', 'gosho', 'asan', 'sirene', 'pribivane'];

function isAllString(words) {
    for(var i=0; i < words.length; i++){
        if(typeof words[i] != "string") {
            return false;
        }
    }
    return true;
}

function capitalize(words) {
    return new Promise((resolve, reject) =>
    {
        if (isAllString(words)) {
            words = words.map(word => word.toUpperCase());
            resolve(words);
        } else {
            reject(Error("Promisse 1 failed"));
        }
    });
}

function sortWords(words) {
    return new Promise((resolve) => resolve(words.sort()));
}

capitalize(names)
    .then(result => sortWords(result))
    .then(finalResult => console.log('Got the final result: ' + finalResult))
    .catch(error => console.log('Exited with error ',error)
    );
