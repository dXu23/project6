var access_key = "30b43d760d7f4920bee1855c31bd9d1c";
var projects = [{"name": "Project 1", 
    description: "Basic HTML Page", 
    url: "https://dxu23.github.io/IT202/project1/index.html", 
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=" + access_key + "&format=jpeg&url=https://dxu23.github.io/IT202/project1/index.html"
},
{name: "Project 2", 
    description: "Company HTML page incorporating bootstrap into design.", 
    url: "https://dxu23.github.io/IT202/project2/index.html", 
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=" + access_key + "&format=jpeg&html=https://dxu23.github.io/IT202/project2/index.html"
},
{name: "Project 3", 
    description: "A food inspection website that uses the City of Chicago food inspection " +
    "Socrata API. It filters by inspection date, facility, zipcode, status, and zipcode.",
    url: "https://dxu23.github.io/IT202/project3/index.html",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=" + access_key + "&format=jpeg&url=https://dxu23.github.io/IT202/project3/index.html"
},
{name: "Project 4",
    description: "HTML Canvas game. ", 
    url: "https://dxu23.github.io/IT202/project4/index.html",
    img: "https://apileap.com/api/screenshot/v1/urltoimage?access_key=" + access_key + "&format=jpeg&"
},
{name: "Project 5",
    description: ""
},
{name: "Project 7",
    description: ""
}];

//console.log("Hello, world!");

var card = "<div class='card col-lg-3 col-sm-6' style='width: 20rem;'>" +
  "<img class='card-img-top' src='' alt='Card image cap'>" +
  "<div class='card-body'>" +
    "<h4 class='card-title'></h4>" +
    "<p class='card-text'></p><br>" +
    "<a href='#' class='btn btn-primary'>Link to project</a>" +
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
    cardjs.find(".card-body").append(projects[i].description);
    cardjs.find("a").attr("href", projects[i].url);
    $("#Projects").find("#it202-projects").append(cardjs);
    console.log(cardjs);
    //console.log(projects[i].name);
}