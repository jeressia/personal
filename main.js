const projects = [
{
    title: "Product Cards", 
    screenshot: "https://github.com/jeressia/Product-Cards/blob/master/productcards.png?raw=true", 
    description: "Product cards using html, css, and flexbox for positioning", 
    technologiesUsed: "HTML, CSS, Version Control with Github",
    available: true,
    url: "https://github.com/jeressia/Product-Cards",
    githubUrl: "https://github.com/jeressia/Product-Cards",
  },

{
    title: "Pet Adoption", 
    screenshot: "https://github.com/jeressia/pet-adoption/blob/master/petadoption.png?raw=true", 
    description: "Pet adoption page using html, css, and javascript", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jeressia/pet-adoption", 
    githubUrl: "google.com",
},


{
    title: "Temperature Converter", 
    screenshot: "https://github.com/jeressia/temperature-converter/raw/master/screenshot.png?raw=true", 
    description: "This app uses javascript to convert temperatures entered by users from Celsius to Fahrenheit and Fahrenheit to Celsius.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jeressia/temperature-converter", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeressia/temperature-converter"
},

{
    title: "Sorting Hat", 
    screenshot: "https://github.com/jeressia/sorting-hat/raw/master/sortinghat.png?raw=true", 
    description: "A user is able to enter their name and be assigned one of four houses from Harry Potter. The student's name and newly assigned class will then appear as a card. The user has the option to expel a student and delete their card from the list of other students.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github, and Bootstrap 4",
    available: true,
    url: "https://github.com/jeressia/sorting-hat", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeressia/sorting-hat"
},

{
    title: "Favorite Places", 
    screenshot: "https://github.com/jeressia/favoriteplaces/raw/master/Screen%20Shot%202019-04-05%20at%207.54.18%20PM.png?raw=true", 
    description: "Filter my favorite places and see my favorite things about each domestic or international destination", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/jeressia/favoriteplaces", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeressia/favoriteplaces"
},
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
//Begin Project Builder//
const buildProjects = () => {
    let domString = '';
    projects.forEach ((project) => {
        domString += `<div class="card bg-dark d-flex justify-content-center mt-5 mr-5" style="width: 18rem;">`
        domString += `<h5 class="card-title">${project.title}</h5>`
        domString += `<img src=${project.screenshot} class="card-img-top" alt="...">`
        domString += `<div class="card-body">`
        domString += `<p class="card-text">${project.description}</p>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<p class="card-link">View my <a href=${project.githubUrl}> code</a></p>`
        domString += `</div>`
        domString += `</div>`
   
        if (project.available === true) {
        printToDom('array',domString);
    }
});
};
//^^End Project Builder^^//
//Hide Divs//
const hideBioDiv = () => {
    document.getElementById('bioDiv').style.display = 'none';
    };

const hideTechDiv = () => {
    document.getElementById('techDiv').style.display = 'none';
    };

const hideProjectDiv = () => {
        document.getElementById('projectDiv').style.display = 'none';
        };   
//^^End Hide Divs//
//Show Divs//
const showBioDiv = (e) => {
    if (bioDiv.style.display === "none") {
        bioDiv.style.display = "block";
        // techDiv.style.display = "none";
        projectDiv.style.display = "none";
        ;
      } else {
        bioDiv.style.display = "none";
      }
 }

const showTechDiv = (e) => {
    if (techDiv.style.display === "none") {
        techDiv.style.display = "block";
      } else {
        techDiv.style.display = "none";
      }
};

const showProjectDiv = (e) => {
    if (projectDiv.style.display === "none") {
        projectDiv.style.display = "block";
        bioDiv.style.display = "none";
      } else {
        projectDiv.style.display = "none";
      }
};
//^^End Show Divs^^//

//Begin Event Listeners//
const eventListener = () => {
    document.getElementById('bioLink').addEventListener('click',showBioDiv);
    // document.getElementById('techLink').addEventListener('click',showTechDiv);
    document.getElementById('projectLink').addEventListener('click',showProjectDiv);
}
//^^End Event Listeners^^//


const init = () => {
    buildProjects();
    hideBioDiv();
    // hideTechDiv();
    hideProjectDiv();
    eventListener();
    
}

init();