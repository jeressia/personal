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
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},

{
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},

{
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildProjects = () => {
    let domString = '';
    projects.forEach ((project) => {
        domString += `<div class="projectDiv">`;
        domString += `<p class="pjtitle">${project.title}</p>`;
        domString += `<p><img class= "screenshot" src=${project.screenshot}></p>`;
        domString += `<p class="pjdescription">${project.description}</p>`;
        domString += `<p class="pjtech">${project.technologiesUsed}</p>`;
        domString += `<p class="pjlink">Check it out <a href={project.title}>HERE</a></p>`;
        domString += `<p class="pjlink1">View my <a href=${project.githubUrl}> code</a></p>`;
        domString += `</div>`;
   
        if (project.available === true) {
        printToDom('array',domString);
    }
});
};



const init = () => {
    buildProjects();
}

init();