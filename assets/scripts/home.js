const navTabs = document.getElementsByClassName("nav__tab");

const previews = document.getElementsByClassName("preview");

const previewsVideogames = document.getElementsByClassName("preview--videogame");
const previewsExperiments = document.getElementsByClassName("preview--experiment");
const previewsWebsites = document.getElementsByClassName("preview--website");
const about = document.querySelector(".about");

console.log(about)

initTabs();

function initTabs() {
    setTabActive(navTabs[0])
    setPreviewActive(previewsVideogames)
    
    setPreviewInactive(previewsExperiments)
    setPreviewInactive(previewsWebsites)
    about.classList.add("about--inactive")

    for(let i = 0; i < navTabs.length; i++){
        let navTab = navTabs[i];
    
        navTab.addEventListener('click', function(){
            setTabActive(navTab)

            switch(navTab.innerHTML){
                case "Video Games":
                    setPreviewActive(previewsVideogames)

                    setPreviewInactive(previewsExperiments)
                    setPreviewInactive(previewsWebsites)
                    about.classList.add("aboout--inactive")
                    break;
                
                case "Experiments":
                    setPreviewActive(previewsExperiments)

                    setPreviewInactive(previewsVideogames)
                    setPreviewInactive(previewsWebsites)
                    about.classList.add("about--inactive")
                break;

                case "Websites":
                    setPreviewActive(previewsWebsites)

                    setPreviewInactive(previewsVideogames)
                    setPreviewInactive(previewsExperiments)
                    about.classList.add("about--inactive")
                    break;

                case "About":
                    about.classList.remove("about--inactive")

                    setPreviewInactive(previewsVideogames)
                    setPreviewInactive(previewsExperiments)
                    setPreviewInactive(previewsWebsites)

                default :
                    console.error("We didnt find the previews to show")
            }
        }, false);
    }
}

function setTabActive(navTab) {
    for(let i = 0; i < navTabs.length; i++){
        setTabInactive(navTabs[i]);
    }

    navTab.classList.add("nav__tab--active");
}

function setTabInactive(navTab) {
    navTab.classList.remove("nav__tab--active");
}


function setPreviewActive(previews) {
    //console.log("Activating these previews :", previews)

    for(let i = 0; i < previews.length; i++){
        previews[i].classList.remove("preview--inactive");
    }
}

function setPreviewInactive(previews) {
    //console.log("Desactivating these previews :", previews)

    for(let i = 0; i < previews.length; i++){
        previews[i].classList.add("preview--inactive");
    }
}