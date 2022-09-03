// Testing js connection
console.log("Connected....");
//selecting html elements
const searchBar = document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const displayResult =document.getElementById('display-result');
const previous =document.getElementById('previous-result');
let eachVerse = document.createElement('div')
//Log elements we have selected to confirm they are working
// console.log(searchBar);
// console.log(searchButton);

let him= {
    hname:"james",
    age: 13
}
 
function getVerse() {
    fetch(`https://bible-api.com/${searchBar.value}`)
        .then(references => references.json())
        .then(verses =>renderverse(verses.text));
};


//A function to display search result from fetch 
function renderverse(text) {
    //set class name
    eachVerse.className = 'verseText';
    //Populate hml using innerHtml
    eachVerse.innerHTML = `
    ${searchBar.value}
    <li>${text}</li>
    `
    console.log(eachVerse);
    displayResult.appendChild(eachVerse);
   // previous.appendChild(eachVerse);

};

//utilizing browser local storage
 function setLocalStorage() {
    localStorage.setItem("myVerses")
};

 function getLocalStorage() {
 const data = JSON.parse(localStorage.getItem("myVerses"));
 if(!data) return;
 //console.log(data)
 previous.innerHTML=renderverse(data);
 
};

//Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    //To test event listen is working
    //console.log(clicked)

    //Reading and displaying user input verse
    //userInput.innerHTML = searchBar.value.toUpperCase();
   //Initialize get verse function
    getVerse();
    // setLocalStorage()
    // getLocalStorage();

});

const shareB =document.querySelector('.shareButton');
shareB.addEventListener('click',()=> {
    // to-do
    // Implement Sharing 
    alert("Verse Shared")})

const deleteB =document.querySelector('.deleteButton');
deleteB.addEventListener('click',()=> {
    // to-do
    // Implement deleting from Previous verses 
    alert("Verse Deleted")})

const clearB =document.querySelector('.clearButton');
clearB.addEventListener('click',()=> {
    // to-do
    // Implement clearing all the verses in 'previus verses' 
    alert("Verses Cleared")})