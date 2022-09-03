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


//Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    //To test event listen is working
    //console.log(clicked)
   //Initialize getVerse function
    getVerse();
    setLocalStorage();
    //getLocalStorage();

});
 
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
    ${searchBar.value}:
    <li>${text}</li>
    `
    //console.log(eachVerse);
    displayResult.appendChild(eachVerse);
   // previous.appendChild(eachVerse);

};

//utilizing browser local storage
 function setLocalStorage() {
    let queryResult = getVerse()
    console.log(queryResult)
    localStorage.setItem("myVerses",JSON.stringify(queryResult));
};

 function getLocalStorage() {
 const data = JSON.parse(localStorage.getItem("myVerses"));
 console.log(data)
 if(!data) return;
 //console.log(data)
 data.forEach(scripture => {
    renderverse(scripture)
 });
 
};


const shareVerse =document.querySelector('.shareButton');
shareVerse.addEventListener('click',()=> {
    // to-do
    // Implement Sharing a verse 
    alert("Verse Shared")})

const deleteVerse =document.querySelector('.deleteButton');
deleteVerse.addEventListener('click',()=> {
    // to-do
    // Implement deleting from 'Previous verses'
    alert("Verse Deleted")})

const clearVerse =document.querySelector('.clearButton');
clearVerse.addEventListener('click',()=> {
    // to-do
    // Implement clearing all the verses in 'previus verses' 
    alert("Verses Cleared")})