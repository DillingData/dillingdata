var content3 = document.getElementById("who");
var content = document.getElementById("content");
var content2 = document.getElementById("contactUs")
var development = document.getElementById("developmentContent");
var management = document.getElementById("projectManagement");
//var security = document.getElementById("security");

window.onload = init; 

function init() {
    content3.style.display = "none";
    content.style.display = "none";
    development.style.display = "none";
    management.style.display = "none";
    security.style.display = "none";
}

function test() {
    if (content3.style.display === "none") {
        content3.style.display = "block";
        if (development.style.display || management.style.display || security.style.display === "block") {
            development.style.display = "none";
            management.style.display = "none";
            security.style.display = "none";
        }
    } else {
        content3.style.display = "none";
    }
}

function ShowHideCardBody() {
    if (content.style.display === "none") {
        content.style.display = "block";
        content2.classList.remove("col-xl-1");
        content2.classList.add("col-xl-2");

    } else {
        content.style.display = "none";
        content2.classList.remove("col-xl-2");
        content2.classList.add("col-xl-1");
    }
}
/*
function NetworkSecurity() {
    if (security.style.display === "none") {
        security.style.display = "block";
        if (management.style.display || content3.style.display || development.style.display === "block") {
            management.style.display = "none";
            content3.style.display = "none";
            development.style.display = "none";  
        }
    } else {
        security.style.display = "none";
    }
}
*/
function WebDevelopment() {
    if (development.style.display === "none") {
        development.style.display = "block";
        if (management.style.display || content3.style.display || security.style.display === "block") {
            management.style.display = "none";
            content3.style.display = "none";
            security.style.display = "none"
        }
    } else {
        development.style.display = "none";
    }
}

function ProjectManagement() {
    if (management.style.display === "none") {
        management.style.display = "block";
        if (development.style.display || content3.style.display || security.style.display === "block") {
            development.style.display = "none";
            content3.style.display = "none";
            security.style.display = "none";
        }
    } else {
        management.style.display = "none";
    }
}