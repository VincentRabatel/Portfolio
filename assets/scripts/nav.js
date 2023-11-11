const navTabs = document.getElementsByClassName("nav__tab");

const previews = document.getElementsByClassName("preview");

const previewsGames = document.getElementsByClassName("preview--videogame");
const previewsExperiments = document.getElementsByClassName("preview--experiment");
const previewsWebsites = document.getElementsByClassName("preview--website");


initTabs();

function initTabs() {
    setTabActive(navTabs[0])
    setPreviewActive(previewsGames)
    
    setPreviewInactive(previewsExperiments)
    setPreviewInactive(previewsWebsites)

    for(let i = 0; i < navTabs.length; i++){
        let navTab = navTabs[i];
    
        navTab.addEventListener('click', function(){
            setTabActive(navTab)

            console.log(navTab.innerHTML)

            switch(navTab.innerHTML){
                case "Video Games":
                    setPreviewActive(previewsGames)

                    setPreviewInactive(previewsExperiments)
                    setPreviewInactive(previewsWebsites)
                    break;
                
                case "Experiments":
                    setPreviewActive(previewsExperiments)

                    setPreviewInactive(previewsGames)
                    setPreviewInactive(previewsWebsites)
                break;

                case "Websites":
                    setPreviewActive(previewsWebsites)

                    setPreviewInactive(previewsGames)
                    setPreviewInactive(previewsExperiments)
                    break;

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
    console.log("Activating these previews :", previews)

    for(let i = 0; i < previews.length; i++){
        previews[i].classList.remove("preview--inactive");
    }
}

function setPreviewInactive(previews) {
    console.log("Desactivating these previews :", previews)

    for(let i = 0; i < previews.length; i++){
        previews[i].classList.add("preview--inactive");
    }
}