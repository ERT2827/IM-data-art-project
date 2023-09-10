var pages = [{
    ID: 1,
    location: "/index.html",
    text: "Home"
},{
    ID: 2,
    location: "/HTML/learning.html",
    text: "Learning"
},{
    ID: 3,
    location: "/HTML/art.html",
    text: "Art"
},{
    ID: 4,
    location: "/HTML/design.html",
    text: "Design"
},{
    ID: 5,
    location: "/HTML/blog.html",
    text: "Blog"
},]

//top bar

var topBarArea = document.querySelector(".navArea");

    displayTopBar(pages);

function displayTopBar(pageses){
    // var displayTopBar = pageses.map(function (pageses){
    //     return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
    //   }).join(" ");

    // topBarArea.innerHTML = displayTopBar;

    var wrapr = document.querySelector('.wrapper');

    var nav = document.createElement('nav');
    nav.classList.add('logo');
    var logoLink = document.createElement('a');
    logoLink.href = "index.html";
    var img = document.createElement('img');
    img.src = "/multimedia/Logo.png";
    img.alt = "Logo";

    var ul = document.createElement('ul');
    ul.classList.add('navArea');

    
    wrapr.append(nav);
    nav.append(logoLink);
    logoLink.append(img);
    wrapr.append(ul);

    var linkList = document.querySelector('.navArea')

    var displayTopBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
    }).join(" ");

    linkList.innerHTML = displayTopBar;

    
}

//Sidebar

var sideBarArea = document.getElementById("sideChick");

if(sideBarArea != null){
    displaysideBar(pages);
}

function displaysideBar(pageses) {
    var displaysideBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
    }).join(" ");

    sideBarArea.innerHTML = displaysideBar;
}

//to top

var toTopper = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        toTopper.classList.add("active");
    }else{
        toTopper.classList.remove("active");
    }
})

//active page display
var activePage = window.location.pathname;
var navLinks = document.querySelectorAll('nav a')
    .forEach(link => {
        if(link.href.includes(`${activePage}`)){
            link.classList.add('currentPage');
        }
    })