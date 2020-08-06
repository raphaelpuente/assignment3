"use strict";
import { Paragraphs } from "./paragraphs.js";

/* Description: IIFE - Immediately Invokes Function Expression
   File: Assignment3
   Name: Raphael Puente 
   Id: 301075627 
   Webpage: https://raphaelpuente.github.io/assignment3/index.html*/

(function(){
    
    function getPageTitle(title) 
    {
        title = document.title;
        title = title.toLowerCase();
        console.log(`The title of this page is: ${title}`);
        return title; 
    }

    function highlightActiveLink(title) 
    {        
    
        let navAnchors = document.querySelectorAll("li a");
    
        for (const anchor of navAnchors) 
        {
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);
    
            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }
    }
    
    function loadHeader(title) 
    {
        console.info("Loading header...")

        let XHR = new XMLHttpRequest();

        XHR.open("GET", "./Views/Partials/header.html");

        XHR.send();
        
        XHR.addEventListener("readystatechange",function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let header = document.getElementsByTagName("header")[0];
                let headerData = XHR.responseText;
                header.innerHTML = headerData;
                highlightActiveLink(title);
            }
        });
    }

    function loadFooter() 
    {
        console.info("Loading footer...")
        
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./Views/Partials/footer.html");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) 
            {
                let footer = document.getElementsByTagName("footer")[0];
                let footerData = XHR.responseText;
                footer.innerHTML = footerData;
            }
        });
    }

    function addHomeParagraphs() {
        console.info("Home Paragraphs Loading...");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./Data/paragraphs.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let homeParagraphs = dataFile.homeParagraphs;
                console.log(homeParagraphs);
                let paragraphList = [];
                for (const record of homeParagraphs) {
                    let newParagraph = new Paragraphs();
                    newParagraph.setParagraph(record);
                    paragraphList.push(newParagraph);
                }
                console.log(paragraphList);
                let tableBody = document.getElementById("mainParagraphs");
                for (const para of paragraphList) {
                    let row = document.createElement('p');
                    row.innerHTML =
                        `
                    ${para.firstParagraph}
                    <br><br>
                    ${para.secondParagraph}
                    `;
                    tableBody.appendChild(row);
                }
            }
        });
    }

    function addProjectsParagraphs() {
        console.info("Projects paragraph Loading...");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./Data/paragraphs.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let projectParagraph = dataFile.projectParagraph;
                console.log(projectParagraph);
                let paragraphList = [];
                for (const record of projectParagraph) {
                    let newParagraph = new Paragraphs();
                    newParagraph.setParagraph(record);
                    paragraphList.push(newParagraph);
                }
                console.log(paragraphList);
                let tableBody = document.getElementById("initialParagraph");
                for (const para of paragraphList) {
                    let row = document.createElement('p');
                    row.innerHTML =
                        `
                    ${para.firstParagraph}
                    `;
                    tableBody.appendChild(row);
                }
            }
        });
    }
    
    function addProjectsExplanation() {
        console.info("Projects explanation Loading...");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./Data/paragraphs.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let projectsTable = dataFile.projectsTable;
                console.log(projectsTable);
                let paragraphList = [];
                for (const record of projectsTable) {
                    let newParagraph = new Paragraphs();
                    newParagraph.setParagraph(record);
                    paragraphList.push(newParagraph);
                }
                console.log(paragraphList);
                let tableBody = document.getElementById("projectsTable");
                for (const para of paragraphList) {
                    let row1 = document.createElement('tr');
                    row1.innerHTML =
                    `
                    <td style="width: 35%;"><a href="https://en.wikipedia.org/wiki/OXXO" target="_blank"><img src="./Assets/oxxo.jpg" alt="Project1" width="320px"></a></td>
                    <td>${para.firstParagraph}</td>
                    `;
                    tableBody.appendChild(row1);

                    let row2 = document.createElement('tr');
                    row2.innerHTML =
                    `
                    <td style="width: 35%;"><a href="http://studentweb.cencol.ca/rpuenter/finalproject///index.html" target="_blank"><img src="./Assets/web.jpg" alt="Project2" width="320px"></a></td>
                    <td>${para.secondParagraph}</td>
                    `;
                    tableBody.appendChild(row2);

                    let row3 = document.createElement('tr');
                    row3.innerHTML =
                    `
                    <td style="width: 35%;"><a href="http://beityala.com/" target="_blank"><img src="./Assets/beityala.jpg" alt="Project3" width="320px"></a></td>
                    <td>${para.thirdParagraph}</td>
                    `;
                    tableBody.appendChild(row3);
                }
            }
        });
    }
    

    function Start()
    {
        console.log("App started...");
        
        let title = document.title;
        title = getPageTitle(title);

        highlightActiveLink(title);
        
        loadHeader(title);

        switch (title) 
        {
            case "home":  
                addHomeParagraphs();
                break;
            case "contact":
                break; 
            case "projects":
                addProjectsParagraphs();
                addProjectsExplanation();
                break;
        }
        loadFooter();
    }

    window.addEventListener("load",Start);

})();


