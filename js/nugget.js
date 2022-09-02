// Testing js connection
console.log("Connected....");
//selecting html elements
let searchBar = document.querySelector('input');
let searchButton = document.querySelector('button');
//Log elements we have selected to confirm they are working
console.log(searchBar);
console.log(searchButton);

function getVerse() {
    fetch('https://bible-api.com/jn 3:16')
        .then(verses => verses.json())
        .then(reference => console.log(reference))
}

//call getverse to test if its fetching correctly
getVerse()