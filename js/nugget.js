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

let previouResult = [];
//Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    //To test event listen is working
    //console.log(clicked)
   //Initialize getVerse function
    getVerse();
    // setLocalStorage();
    getLocalStorage();
    //renderVerse();

});
 
function getVerse() {
    fetch(`https://bible-api.com/${searchBar.value}`)
        .then(bibleObj => bibleObj.json())
        .then(verses => localStorage.setItem("myVerses",JSON.stringify(verses)))
        // .then(verses =>renderVerse(verses.text));
};


//A function to display search result from fetch 
function renderVerse(verses) {
    
    //set class name
    eachVerse.className = 'verseText';
    //Populate hml using innerHtml
    eachVerse.innerHTML = `
    ${verses[reference]}:
    <li>${verses[text]}</li>
    `
    //console.log(eachVerse);
    displayResult.appendChild(eachVerse);
  };

//utilizing browser local storage
//  function setLocalStorage() {
//     console.log(getVerse())
//     localStorage.setItem("myVerses",JSON.stringify(queryResult));
// };

 function getLocalStorage() {
 const data = JSON.parse(localStorage.getItem("myVerses"));
 console.log(data)
 if(!data) return;
 //console.log(data)
 previouResult= data;
 console.log(previouResult)
//  previouResult.array.forEach(verses => {
//     renderVerse(verses);
//  });
 
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
    localStorage.removeItem("myVerses")
    alert("Verse Deleted")})

const clearVerse =document.querySelector('.clearButton');
clearVerse.addEventListener('click',()=> {
    localStorage.clear()
    alert("Verses Cleared!")})