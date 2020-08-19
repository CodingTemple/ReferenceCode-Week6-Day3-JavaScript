console.log(document.getElementsByTagName('h1')[0].className='color-change');

// Example Show Username
function displayUserInfo(user_info){
    element = document.getElementById('sampleText');
    element.innerHTML = user_info;
}

// let button = document.createElement('button');
// button.innerHTML = 'I am Alive!';
// document.body.append(button);

// // Getting Elements by Querying for a Specific Selector
// let buttonElement = document.querySelectorAll('button')[1];

// buttonElement.onclick = function showRandomText(){
//     let showText = 'Coding is fun';
//     let text = document.createElement('h3')
//     text.innerHTML = showText;
//     document.body.append(text)
// }
// console.log(buttonElement)

// Grab form from HTML using ID
const form = document.getElementById('testForm');

form.onsubmit = submitForm;

// Function to grab form data
function submitForm(event){

    event.preventDefault();

    console.log(document.getElementById('first-name').value);
    console.log(document.querySelector("#last-name").value);
}

// Submit form with regular button
function submitButtonForm(){
    console.log(document.getElementById('username').value)
    console.log(document.querySelector("#password").value)
}


// Get F1 Racer Info for JSON Data
function getJson(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData)
        let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
        let given_name_text = document.createElement('h3')
        given_name_text.innerHTML = givenName
        document.body.append(given_name_text)

        // Family Name
        let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
        let familyName_text = document.querySelector('#familyName')
        familyName_text.innerHTML = familyName

        // Get first 3 Constructors for F1 Cars
        for(let i = 0; i < 3; i++){
            let constructors_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let display_constructors = document.createElement('h1')
            display_constructors.innerHTML = constructors_name
            document.body.append(display_constructors)
        }
    })

    console.log(season,round)
}