const names = ['pesho', 'gosho', 'asan', 'sirene', 'pribivane'];

function isAllString(arr) {
    for(var i=0; i < arr.length; i++){
        if(typeof arr[i] != "string") {
            return false;
        }
    }
    return true;
}

function capitalize(words) {
    return new Promise((resolve, reject) =>
    {
        const check = isAllString(words);
        let uppercased = [''];
        if (check) {
            uppercased = words.map(word => word.toUpperCase());
        }

        if (check) {
            resolve(uppercased);
        } else {
            reject(Error("Promisse 1 failed"));
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) =>
    {
        const check = isAllString(words);

        if (check) {
            words.sort();
        }
        if (check) {
            resolve(words);
        } else {
            reject(Error("Promisse 2 failed"));
        }
    });
}

capitalize(names)
.then(result => {
    return sortWords(result);
})
.then(finalResult => {
    console.log('Got the final result: ' + finalResult);
})
.catch(error => {
    console.log('Exited with error ',error);
});


