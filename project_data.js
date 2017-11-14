var access_key = "30b43d760d7f4920bee1855c31bd9d1c";
var projects = [{"name": "Project 1", 
    description: "Basic HTML Page", 
    projectUrl: "https://dxu23.github.io/IT202/project1/index.html", 
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project1",
    tools: "html, css",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project1/index.html"
},
{name: "Project 2", 
    description: "Company HTML page incorporating bootstrap into design.", 
    projectUrl: "https://dxu23.github.io/IT202/project2/index.html", 
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project2",
    tools: "html, css, bootstrap",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project2/index.html"
},
{name: "Project 3", 
    description: "A food inspection website that uses the City of Chicago food inspection " +
    "Socrata API. It filters by inspection date, facility, zipcode, status, and zipcode.",
    projectUrl: "https://dxu23.github.io/IT202/project3/index.html",
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project3",
    tools: "html, css, bootstrap, API",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project3/index.html"
},
{name: "Project 4",
    description: "HTML Canvas game. ", 
    projectUrl: "https://dxu23.github.io/IT202/project4/index.html",
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project4",
    tools: "html, canvas",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project4/index.html"
},
{name: "Project 5",
    description: "Weather app with service worker", 
    projectUrl: "https://dxu23.github.io/IT202/project5/index.html",
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project5",
    tools: "html, service workers", 
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project5/index.html"
    
},
{name: "Project 7",
    description: "Airhorn web app with service worker", 
    projectUrl: "https://dxu23.github.io/IT202/project7/index.html",
    repoUrl: "https://github.com/dXu23/IT202/tree/master/project7",
    tools: "html, service workers",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=30b43d760d7f4920bee1855c31bd9d1c&format=jpeg&html=https://dxu23.github.io/IT202/project7/index.html"
}];

//console.log("Hello, world!");

var card = "<div class='card col-lg-3 col-sm-6' style='width: 20rem;'>" +
  "<img class='card-img-top' src='' alt='Card image cap'>" +
  "<div class='card-body'>" +
    "<h4 class='card-title'></h4>" +
    "<p class='card-text'></p><br>" +
    "<a href='' id = 'project-link' class='card-link'>Link to project</a>" +
    "<a href='' id = 'repo-link' class='card-link'>Link to project</a>" +
  "</div>" +
"</div>";

console.log(projects.length);
for (var i = 0; i < projects.length; i++) {
    var cardjs = $(card);
    console.log("i: " + i);
    console.log("projects.length: " + projects.length);
    console.log(projects[i].name);
    console.log(projects[i].description);
    cardjs.find(".card-title").append(projects[i].name);
    cardjs.find("img").attr("src", projects[i].img);
    cardjs.find(".card-body").append(projects[i].description);
    cardjs.find("#project-link").attr("href", projects[i].projectUrl);
    cardjs.find("#repo-link").attr("href", projects[i].repoUrl);
    $("#Projects").find("#it202-projects").append(cardjs);
    console.log(cardjs);
    //console.log(projects[i].name);
}