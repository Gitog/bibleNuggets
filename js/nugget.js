// Testing js connection
console.log("Connected....");
//selecting html elements
const searchBar = document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const userInput = document.getElementById('user-input');
//Log elements we have selected to confirm they are working
// console.log(document);
// console.log(searchBar);
// console.log(searchButton);
 
function getVerse() {
    fetch(`https://bible-api.com/${searchBar.value}`)
        .then(references => references.json())
        .then(verses =>renderverse(verses.text))
}

//call getverse to test if its fetching correctlyl 
 //getVerse()

//A function to display search result from fetch 
function renderverse(text) {
  
    let eachVerse = document.createElement('ul')
    //set class name
    eachVerse.className = 'verseText';

    //Populate hml using innerHtml
    eachVerse.innerHTML = `
    <li>${text}</li>
    `
    console.log(eachVerse);
    document.getElementById('display-result').appendChild(eachVerse);

}

//Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    //To test event listen is working
    //console.log(clicked)

    //Reading and displaying user input verse
    userInput.innerHTML = searchBar.value.toUpperCase();
   //Initialize get verse function
    getVerse();

})
