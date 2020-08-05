/* Description: IIFE - Immediately Invokes Function Expression
   File: Assignment2
   Name: Raphael Puente 
   Id: 301075627 
   Webpage: https://raphaelpuente.github.io/assignment2/index.html*/

(function(){
    
    
        function Start()
    {
        console.log('My app started...')
            
        //#region - Applying nav-link active to all navbar elements
        let title = document.title;
        title = title.toLowerCase();
    
        console.log(`The title of the page is ${title}`);
    
        let navAnchors = document.querySelectorAll("li a");
    
        for (const anchor of navAnchors) {
    
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);
    
            if ((title === "home") && (anchorString === "index") || (title === anchorString)) {
                anchor.className = "nav-link active";
            }
        }
        //#endregion

        //#region - Putting text in my index page through strings
        if (title === "home") {
            let jumbotron = document.getElementsByClassName("jumbotron")[0];
            let myGreeting = document.createElement("p");
            myGreeting.textContent = "I was born and raised in an industrial city called Monterrey, in the northern part of Mexico. I have a bachelor's degree in Marketing and Advertisement from TecMilenio University. I graduated in 2014 and I had 6 years of experience working as a buyer for FEMSA, one of the biggest companies in Mexico that owns OXXO, a chain of convenience stores with more than 18,000 locations accross Mexico, Colombia, Chile, Peru and the United States.";
            jumbotron.appendChild(myGreeting);

            let jumbotron2 = document.getElementsByClassName("jumbotron")[0];
            let whoAmI = document.createElement("p");
            whoAmI.textContent = "Then, I decided to change the course of my professional carreer and since January 2020, I arrived to Canada and now I'm sturying Software Engineering Technician at Centennial College. My goal is to work for a big company and to become a front-end developer.";
            jumbotron2.appendChild(whoAmI);
        }
        //#endregion
    
        //#region - Putting text in my projects page through strings
        if (title === "projects") {
            let jumbotron3 = document.getElementsByClassName("jumbotron")[0];
            let myProjects = document.createElement("p");
            myProjects.textContent = "As you can notice through my introduction, I'm pretty new when it comes to Software Engineering, so I don't have a lot of projects to brag about, here are some of my favorie thing I've done so far, either from my previous job, my past school assignments or for personal purposes";
            jumbotron3.appendChild(myProjects);
        }
        //#endregion

        //#region - Creating text objects in my projects' table
        if (title === "projects") {

            let projectsTable1 = document.getElementsByTagName("tr")[0];
            let projectOne = document.createElement("td");
            projectOne.textContent = "In my previous job I was a buyer an negotiatior and I was in charge of the salty snacks category, which includes chips, nuts, popcorn and seeds. One of my most important projects was increasing the sales volume, and through the incorporation of regional suppliers, I was able to grow sales for more than 4% (which is a huge amount for a category as solid as salty snacks). Sorry I can't provide more information, I'm not supposed to show the data due confidenciality matters, but I promise it was harder than it sounds, but it was lots of fun! You can learn more about OXXO by clicking in the picture.";
            projectsTable1.appendChild(projectOne);

            let projectsTable2 = document.getElementsByTagName("tr")[1];
            let projectTwo = document.createElement("td");
            projectTwo.textContent = "When I first started to study this new carreer, I was unsure if I should become a web developer or what would be more suitable for me. As I progressed through the carreer, it's been clear to me that my marketing and design knowledge, could work okay if I become a web developer. I still have a really big road ahead of me, I have so much to learn, but I hold really dear the project I did for my web design class last semester. It feels like it's the seed of something big I expect to harvest soon. You can see my assignment by clicking in the picture in the left.";
            projectsTable2.appendChild(projectTwo);

            let projectsTable3 = document.getElementsByTagName("tr")[2];
            let projectThree = document.createElement("td");
            projectThree.textContent = "My third project is divided into two phases: First I need to say I am very fond to grammar and spelling, and I am actually really good at it (in Spanish, which is my native language, of course... I'm sorry if I have too many mistakes in English, I'm doing my best!) I took several courses to become a style corrector. And second, even though I never studied it, I also know a little bit about design. I know how to use Photoshop, Illustrator, and mostly, InDesign (I used Illustrator to create my logo, hope you liked it!). So I am proud of working as a free-lance style corrector and designer for several mexican companies that produce books. Libreria Beityala is one of my customers, you can visit their page through the link in the pic.";
            projectsTable3.appendChild(projectThree);

        }
        //#endregion

    }

    window.addEventListener("load",Start);

})();


